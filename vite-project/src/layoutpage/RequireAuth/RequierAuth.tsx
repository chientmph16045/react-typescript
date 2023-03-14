import axios from "axios";
import React from "react";
import { Navigate } from "react-router";
import Signin from "../../page/login/signin";

type RequierAuthProps = {
  children: React.ReactElement;
}

const RequierAuth = ({ children }: RequierAuthProps) => {

  if (localStorage.getItem('token')) {
    var isAdmin = JSON.parse(localStorage.getItem('token') || "")
    console.log(isAdmin)
  }
  if (!isAdmin) {
    return <Navigate to="/signin" />
  }
  return children;
}

export default RequierAuth