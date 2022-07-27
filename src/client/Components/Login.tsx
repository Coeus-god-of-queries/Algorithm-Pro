import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  styled
} from '@mui/material';

const Login = (): JSX.Element => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  
  //TODOS: make this function async/await
  const handleLogin = (e:React.MouseEvent<HTMLButtonElement>) : void => {
    const usernameInput = username.current?.value;
    const passwordInput = password.current?.value;


    //user: admin
    //pass: 123456

    axios({
      method: 'post',
      url: '/login',
      data: {
      username: usernameInput,
      password: passwordInput
      }
    })
    .then((response) => {
      console.log(response);
      navigate('/home', { state: { response: response.data, isLoggedIn: true } });
    })
    .catch((error) => {
      console.log('axios error:', error);
    });

    // axios.post('/login', {
    //   username: inputRef,
    //   password: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    //reset input fields
    if (username.current !== null && password.current !== null) {
    username.current.value = '';
    password.current.value = '';
    }
  };

  const handleSignup = (e:React.MouseEvent<HTMLButtonElement>): void => {
    //to be created, might not get to because of time constraints
  }

  const paperStyle = {
    padding: 20,
    // height: '38vh',
    width: 500,
    margin: '10% auto',
  };
  const avatarStyle = { backgroundColor: '#CFEFFF', color:'#FFA500' };
  const btnStyle = { margin: '8px 0' };

  const MyPaper = styled(Paper)({ borderRadius: 20, borderColor: "#000", margin: '0 auto', backgroundColor:'rgb(14, 93, 93)', color: 'white' });


    // <div id='login-container'>
    //   <div id='login-field-container'>
    //     <input id='username-field' placeholder='Username' ref={username}></input>
    //     <input id='password-field' type='password' placeholder='Password' ref={password}></input>
    //   </div>
      
    //   <div id='login-button-container'>
    //     <button onClick={(e) => handleSignup(e)}>Sign Up</button>
    //     <button onClick={(e) => handleLogin(e)}>Login</button>
    //   </div>

    // </div>

  return( 


    <div id='login-container'>
      <Grid>
        <MyPaper style={paperStyle} square={false} variant={'outlined'}>
          <Grid>
            <h1>Sign In</h1>
          </Grid>
          <TextField
            label='Username'
            name='username'
            placeholder='Username'
            variant='standard'
            sx={{ fontFamily: 'Raleway, sans-serif', }}
            fullWidth
            inputRef={username}
          />
          <TextField
            label='Password'
            name='password'
            placeholder='Password'
            type='password'
            variant='standard'
            sx={{ fontFamily: 'Raleway, sans-serif' }}
            fullWidth
            inputRef={password}
          />
          <Button
            type='submit'
            color='primary'
            variant='contained'
            fullWidth={false}
            style={btnStyle}
            sx={{ fontFamily: 'Raleway, sans-serif', alignSelf:'center' }}
            onClick={(e) => handleLogin(e)}
          >
            Login
          </Button>
          <Typography sx={{ fontFamily: 'Raleway, sans-serif', textAlign:'right' }}>
            <Link href='#'>Sign Up</Link>
          </Typography>
        </MyPaper>
      </Grid>
    </div>
  );
};

export default Login;
