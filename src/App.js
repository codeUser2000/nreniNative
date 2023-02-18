import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import ToastManager, { Toast } from 'toastify-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthProvider} from "./context/AuthContext";
import AppNav from "./navigations/AppNav";


function App(props) {
    useEffect(() => {
        (async () => {
           await SplashScreen.hide();
        })();
    }, []);
    return (
        <AuthProvider>
            <AppNav />
            <ToastManager />
        </AuthProvider>
    );
}

export default App;
