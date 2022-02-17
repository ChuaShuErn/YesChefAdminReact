import React, { useState, useRef, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { Remove, Add, CloudUpload } from '@material-ui/icons';
import { Button, Grid, Stack, Modal } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import RecipeService from '../services/RecipeService';
import { useNavigate } from 'react-router-dom';
import { SettingsPowerRounded } from '@mui/icons-material';



type localImagesArrayType = {
    fileType: string;
    url: string;
    id: string;
    file: File
}[]

interface schema {
    imageModalDetails: {
        shouldShow: boolean,
        recipeId: string | undefined
    },
    setImageModalDetails: (arg: any) => void,


}

export default function ImageURLForm({ imageModalDetails, setImageModalDetails }: schema) {
    const [localImages, setLocalImages] = useState<localImagesArrayType>([]);

    const imagesSelectRef = useRef<HTMLInputElement>(null);



    const onFileChange = async (e: any) => {
        Object.values(e.target.files).forEach((file: any) => {
            const type = file.type.split("/").shift().toLowerCase();
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async (E: any) => {
                setLocalImages((prevState) =>
                    prevState.concat({
                        file,
                        fileType: type,
                        url: E.target.result,
                        id: uuidv4(),
                    })
                );
            };
        });

        if (imagesSelectRef.current?.value) {
            imagesSelectRef.current.value = "";
        }
    };

    const onClose = () => {
        
        setImageModalDetails((prevState: any) => ({ ...prevState, shouldShow: false }))}


    const uploadToS3Bucket = async () => {
        const multiPartFiles = localImages.map(imgObj => imgObj.file);
        if (!imageModalDetails.recipeId) return alert('Receipe Id not provided')
        if (!multiPartFiles.length) return alert('Please select files to upload')

        const formData = new FormData();
        formData.append('file', multiPartFiles[0])
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        try {

            await RecipeService.uploadImageFile(imageModalDetails.recipeId, formData, config)
            alert('Successfully uploaded files')
            // onClose()

        } catch (err) {
            console.error(err)
        }
    }

    //Difficulty Recommendation portion
    //set variable and state
    const [difficultyRecommendation, setDifficultyRecommendation] = useState<string[]>([]);
    //Configure API
    const showDifficultyRecommendation = async () =>{
        if (!imageModalDetails.recipeId) return alert('Receipe Id not provided');
        
        try{
            const {data} = await RecipeService.getDifficultyRecommendation(imageModalDetails.recipeId as string);
            console.log(data);
            setDifficultyRecommendation(data);

        }
        catch(err){
            console.error(err)
        }

    }
    //call api to save new difficulty tag
    const useRecommendedDifficulty = async() =>{
        //call recipeservice for method
        console.log(imageModalDetails.recipeId);
        console.log(difficultyRecommendation);
        await RecipeService.putDifficultyRecommendation(imageModalDetails.recipeId as string, difficultyRecommendation);
        alert('Difficulty set to: ' + difficultyRecommendation);

    }

    //Difficulty Recommendation Colour
    const getColour = (value:string[]) =>{
        let colour;
        if (value[0] == 'Easy'){
          colour = '#4aa336';
        }
        if (value[0] == 'Medium'){
          colour = '#e37610';
        }
        if (value[0] == 'Advanced'){
          colour = '#c41837';
        }
        return colour;
      }

    //navigation
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/';
        navigate(path);
    }


    return (

        <Modal
            
            open={imageModalDetails.shouldShow}
            
            onClose={(_,reason) =>{
                if (reason!=="backdropClick" && reason!=="escapeKeyDown"){
                onClose()
            }
            }}
            
            
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Stack spacing={2}
                sx={{
                    padding: "20px",
                    width: '90vw',
                    height: '90vh',
                    overflowY: 'auto',

                    backgroundColor: '#ffffff',
                    outline: "none",
                    position: "relative",

                    borderRadius: "10px",

                    margin: "20px",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
            >

            <h1 style={{textAlign:'center'}}>Last few steps...</h1>
            <h2>Upload some images!</h2>
                <h3>New Local Images</h3>
                
                <Grid container spacing={2}>
                    {
                        localImages.map((imgObj, index) =>
                            <Grid key={index} item xs={12} sm={6} lg={3}>
                                <img src={imgObj.url}
                                    width={300}
                                    height={300}
                                />
                            </Grid>
                        )
                    }
                </Grid>

                <Button startIcon={<Add />}
                    variant="outlined"
                    onClick={() => imagesSelectRef.current?.click()}
                >
                    Select Image
                </Button>


                <Stack direction="row" spacing={2}>
                    <Button fullWidth startIcon={<Remove />}
                        variant="outlined"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button fullWidth startIcon={<CloudUpload />}
                        variant="outlined"
                        onClick={uploadToS3Bucket}
                    >
                        Upload
                    </Button>

                </Stack>

                <input
                    ref={imagesSelectRef}
                    type={"file"}
                    accept="image/*"
                    // multiple
                    onChange={onFileChange}
                    style={{ display: "none" }}
                />
                 <h3 style={{textAlign:'center'}}>We can analyze your recipe to give you an accurate Difficulty prediction!</h3>
                <br></br>
                <br></br>
                <Button 
                style={{maxWidth:'300px', display: "flex", margin: '0 auto'}}         
                variant="contained"
                onClick={showDifficultyRecommendation}> Click Here to Predict the Difficulty</Button>
                <h3 style={{textAlign:'center'}}>We recommend your set your difficulty as: </h3>
                <h1 style={{textAlign:'center', color: getColour(difficultyRecommendation)}}>{difficultyRecommendation}</h1>
                <br></br>
                <br></br>

                    
                    <Button 
                        style={{maxWidth:'300px', display: "flex", margin: '0 auto'}}
                        
                        variant="outlined"
                        onClick={useRecommendedDifficulty}
                    >
                        Use Recommended Difficulty
                    </Button>
                    <br></br>

                <Button 
                style={{width:'270px', display: "flex", margin: '0 auto'}}
                
                variant="contained" onClick={routeChange}>DONE</Button>

                
            </Stack>
           
            

        </Modal>


    );
}

