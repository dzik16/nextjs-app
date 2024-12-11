import { login } from "../api/request/auth.api";
import { saveTokenToLocalStorage } from "../store/profile.store";
import { useState } from "react";

export const useAuthHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [loginResult, setLoginResult] = useState<
    null | 'home' | 'recover'
  >(null);

  const onLoginUser = async (
    username: string,
    password: string
  ) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMsg('');

    try {
      if (username && password) {
        console.log(username);
        const res = await login(username, password)

        if (res.code === "00") {
          saveTokenToLocalStorage(res.token)
          setLoginResult('home')

          return 'home'
        } else {
          setLoginResult('recover');

          return 'recover'
        }
      }
    } catch (error) {
      console.log(error);
      
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onLoginUser,
    loginResult,
    isLoading,
    isError,
    errorMsg
  }
}