import Link from "next/link";
import React, { useState, useEffect } from "react";
import Router from "next/router";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { loginWithGoogle, authenticate, isAuth } from "../../actions/auth";
import { GOOGLE_CLIENT_ID } from "../../config";

const LoginGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response);
    const tokenId = response.credential;
    console.log(tokenId);
    const user = { tokenId };

    loginWithGoogle(user).then((data) => {
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      if (data.error) {
        console.log(data.error);
      } else {
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  return (
    <div className="pb-3">
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <GoogleLogin
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          theme="dark"
        />
      </GoogleOAuthProvider>
    </div>
  );
};
export default LoginGoogle;
