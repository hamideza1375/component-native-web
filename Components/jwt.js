import jwt_decode from "jwt-decode";



  export const jwt = (token) => {
      jwt_decode(token)
  }