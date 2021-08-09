import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
"920604998733-bm5avktqgp21ff9mhi4hkl8q4ial18m8.apps.googleusercontent.com"

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;