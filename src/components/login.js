import { Avatar, FormControlLabel, Grid, Paper, TextField,Button, Typography, Link } from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from "@material-ui/core/Checkbox";

const Login=()=>{

    const paperStyle={padding :20,height:'70vh', width:280 , margin:"20px auto"}
    const avatarStyle={backgroundColor:'LightSeaGreen'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' fullWidth required/>
            <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
            <FormControlLabel 
            control={ 
            <Checkbox
                name="checked8"
                color="primary"
            />
            }
            label="Remember me"
            />
            <Button type='submit' color='primary'  variant="contained" style={btnstyle} fullWidth>SIGN IN</Button>
            <Typography>
            <Link href="#">
                 Forget Password ?
            </Link>
            </Typography>
            <Typography>
            <Link href="#"> Do you have account ?
                 Sign Up 
            </Link>
            </Typography>
          </Paper>
        </Grid>
       
    )
}

export default Login