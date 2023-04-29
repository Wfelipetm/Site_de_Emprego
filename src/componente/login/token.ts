import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    return tokenString
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    if (userToken) {
      sessionStorage.setItem('token', userToken);
      setToken(userToken);
    }else{
      sessionStorage.removeItem('token');
      setToken(null);
    }
  };

  return {
    setToken: saveToken,
    token
  }
}