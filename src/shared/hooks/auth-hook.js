import { useCallback, useEffect, useState } from "react";

export const useAuth = () =>{

  const [userId, setUserId] = useState(false);
  const [token, setToken] = useState(null);


  const login = useCallback((uid,token) => {
    setUserId(uid);
    setToken(token);
    localStorage.setItem('userData', JSON.stringify({userId:uid,token:token}));
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setToken(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.token){
       login(userData.userId, userData.token);
    }
  },[login]);

    return {userId, token, login, logout};
}