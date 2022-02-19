import { FormControlLabel, Grid, Paper,Button, Checkbox, TextField, Avatar,Typography,Link,Stack } from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from '../../services/LoginService';

function LoginComponent(){
    

    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const changeUsernameHandler = (event: any) => {
        setUserEmail(event.target.value);
    }
    const changePasswordHandler = (event: any) => {
        setUserPassword(event.target.value);
    }

    let navigate = useNavigate();

    function routeChange(){
        let path = '/adminDashboard';
        navigate(path);
    }

    const Login = async (event:any) =>{
        event.preventDefault();
        console.log(userEmail);
        console.log(userPassword);
        
        const {data} = await LoginService.postCheckLogin(userEmail,userPassword);
           
        
    
       

    //    try {
    //     await RecipeService.updateRecipe(recipeId, recipe);
    //     // TODO: setDifficultyRecommendation
    //     setImageModalDetails({
    //         shouldShow: true,
    //         recipeId       
    //     })
    // } catch (err) {
    //     console.error(err)

       if (data == "OK"){
           routeChange();
       }
       else{
           alert("Username or Password Incorrect");
           setUserEmail('');
           setUserPassword('');
       }

    }






    return (

        <Grid>
        <Paper elevation={24} style={{padding :20,height:'70vh',width:480, margin:"20px auto"}}>
            <Grid container direction="row" alignItems="center">
                <Avatar style={{backgroundColor:'#FF5733', margin:"20px auto"}}><OutdoorGrillIcon /></Avatar>
            </Grid>
                <br></br>
                <h2 style={{textAlign:'center'}}>Yes Chef Admin Login</h2>
                <br></br>
            
            <TextField label='Username' placeholder='Enter username' fullWidth required variant="filled" value = {userEmail} onChange={changeUsernameHandler}/>
            <br></br>
            <br></br>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required variant="filled" value = {userPassword} onChange={changePasswordHandler}/>
            <FormControlLabel
                control={
                <Checkbox
                    name="checkedB"
                    color="primary"
                />
                }
                label="Remember me"
             />
            <Button type='submit' onClick={Login} color='primary' variant="contained" style={{margin:'8px 0'}} fullWidth>Login</Button>
            {/* <Typography >
                 <Link href="#" >
                    Forgot password ?
            </Link>
            </Typography>
            <Typography > Do you have an account ?
                 <Link href="#" >
                    Sign Up 
            </Link>
            </Typography> */}
        </Paper>
    </Grid>
        
    );
    






}

export default LoginComponent;