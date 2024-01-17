import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase';
import { getDocs, collection, doc } from 'firebase/firestore';
import { db } from './firebase';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [usersFromFirestore, setUsersFromFirestore] = useState([]);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const fetchUserFromFirestore = async () => {
    await getDocs(collection(db, 'users')).then((querySnapshot) => {
      const userFromFirestore = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsersFromFirestore(userFromFirestore);
      console.log(userFromFirestore);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    fetchUserFromFirestore();
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <UserAuthContext.Provider
      value={{
        user,
        usersFromFirestore,
        signup,
        login,
        logout,
        fetchUserFromFirestore,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
