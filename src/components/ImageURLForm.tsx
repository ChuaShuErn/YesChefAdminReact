import React, { useState, useRef, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { Remove, Add, CloudUpload } from '@material-ui/icons';


import { Button, Grid, Stack, Modal } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import RecipeService from '../services/RecipeService';
import { useNavigate } from 'react-router-dom';



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




export default function ImageURLForm({ imageModalDetails, setImageModalDetails }: schema, handleNewDifficultyRecommendation:string[]) {
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

    const onClose = () => setImageModalDetails((prevState: any) => ({ ...prevState, shouldShow: false }))


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
        alert('succesfully implemented recommended difficulty');

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
            onClose={onClose}
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


                <h1>New Local Images</h1>
                
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
                 <h1>Difficulty Recommendation</h1>
                <Button onClick={showDifficultyRecommendation}> getDifficultyPrediction</Button>
                <h1>Your recommended difficulty is: {difficultyRecommendation}</h1>
                <Button onClick={useRecommendedDifficulty}>Use Recommended Difficulty</Button>
                <Button>Stick to my previous choice</Button>
                <Button onClick={routeChange}>View All Recipes</Button>

                
            </Stack>
           
            

        </Modal>


    );
}

