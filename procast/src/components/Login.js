//Client ID: 920604998733-bm5avktqgp21ff9mhi4hkl8q4ial18m8.apps.googleusercontent.com
//Client Secret: DmorI8_gbLNypGAqGKwJ34ml

import React from 'react';
import LoginPage from '../images/loginPage.svg';
import {Link} from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
"920604998733-bm5avktqgp21ff9mhi4hkl8q4ial18m8.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <Link to='/loggedinhomepage'>
        <div>
            <img className="centreHomepage2" src={LoginPage} alt="Our entire homepage"/>
            <div style={{position: "relative", left: "655px", top: "450px", borderRadius: "15px"}}><GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      /></div>
        </div>
    </Link>
  );
}

export default Login;