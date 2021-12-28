import { useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/firebaseInit";

// call firebase config file
firebaseAuthentication();
const useFirebase = () => {
  // Post Type
  const [postType, setPostType] = useState("");
  // View Type
  const [view, setView] = useState(false);
  // declare user state
  const [user, setUser] = useState({});
  // user state change state
  const [isLoading, setIsLoading] = useState(true);
  // error state
  const [authError, setAuthError] = useState("");

  //declare admin
  // const [admin, setAdmin] = useState("false");

  // declare auth
  const auth = getAuth();
  // google auth
  const googleProvider = new GoogleAuthProvider();

  // Post Type
  const handlePostTypeText = () => {
    setPostType("text");
  };
  const handlePostType = () => {
    setPostType("others");
  };

  // View Type
  const handleViewType = (x) => {
    setView(x);
  };

  // register new user
  const registerUser = (name, email, password, location, history) => {
    setAuthError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);

        // save user to the database
        const photoURL = "defaultAvatar";
        saveUser(email, name, photoURL, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        const destination = location?.state?.from || "/home";
        history(destination);
      });
  };

  // login user
  const loginUser = (email, password, location, history) => {
    setAuthError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        history(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  // google sign in
  const signInWithGoogle = (location, history) => {
    setAuthError("");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, user.photoURL, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/home";
        history(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  // detect the user state if changes
  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // getIdToken(user).then((idToken) => {
        //   setToken(idToken);
        // });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // logout user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Logout Successfull");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // saved user function
  const saveUser = (email, displayName, photoURL, method) => {
    const user = { email, displayName, photoURL };
    fetch("https://aqueous-springs-11487.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // // admin data load
  // useEffect(() => {
  //   fetch(`https://immense-peak-33349.herokuapp.com/users/${user.email}`)
  //     .then((res) => res.json())

  //     .then((data) => setAdmin(data.admin));
  // }, [user.email]);

  return {
    registerUser,
    authError,
    loginUser,
    signInWithGoogle,
    logout,
    user,
    isLoading,
    postType,
    handlePostType,
    handlePostTypeText,
    handleViewType,
    view,
  };
};

export default useFirebase;
