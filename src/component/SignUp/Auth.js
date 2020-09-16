import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../firbase.config";
import { useState, useEffect, createContext } from "react";

firebase.initializeApp(firebaseConfig);

const authConctext = createContext();

export const AuthContextProvider = (porps) => {
    const auth = Auth();
    return (
        <authConctext.Provider value={auth}>
            {porps.children}
        </authConctext.Provider>
    );
};

export const useAuth = () => {
    return useContext(authConctext);
};

const Auth = () => {
    const [user, setUser] = useState([]);

    const getUser = (response) => {
        const { email, displayName } = response;
        return { email, displayName };
    };

    const signin = (email, password) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                return response.user;
            });
    };

    const updateUser = (response, name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        }).then(() => {
            const user = getUser(response.user.displayName);
            console.log(user);
            setUser(user);
            console.log("name updated");
        });
    };

    const signup = (email, password, name) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                updateUser(response, name);
                return response.user;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(null);
            });
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const users = getUser(user);
                setUser({ name: users.displayName, email: users.email });
            } else {
                // No user is signed in.
                setUser(null);
            }
        });
    }, []);

    return {
        user,
        signin,
        signout,
        signup,
    };
};

export default Auth;
