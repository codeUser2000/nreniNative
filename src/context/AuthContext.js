import React, {createContext, useCallback, useEffect, useState} from 'react';
import {Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()
export function AuthProvider({children}) {
    const [userToken, setUserToken] = useState('jk');
    const login = useCallback((data) => {
        setUserToken(data)
    }, [])

    const logout = useCallback(async () => {
        await AsyncStorage.removeItem('token')
        setUserToken('')
    }, [])

    useEffect(() => {
        (async () => {
           try{
               if(await AsyncStorage.getItem("token")){
                   setUserToken(await AsyncStorage.getItem("token"))
               }

               console.log(await AsyncStorage.getItem("token"),5678)
           } catch (e) {
               console.log(e)
           }
        })()
    }, []);

    return (
       <AuthContext.Provider value={{login, userToken, logout}}>
           {children}
       </AuthContext.Provider>
    );
}
