import { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [usersFromFirestore, setUsersFromFirestore] = useState([]);
  const [matchUser, setMatchUser] = useState(null);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    console.log('clicked');
    return signOut(auth);
  };

  const fetchUserFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userFromFirestore = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setUsersFromFirestore(userFromFirestore);

      const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
        setUser(currUser);

        // Access user.email directly from the current user object
        const matchUser = userFromFirestore.find(
          (userData) => userData.emailValue === currUser?.email
        );
        setMatchUser(matchUser);
      });

      // unsubscribe();
    } catch (error) {
      console.error('Error fetching user data from Firestore:', error);
    }
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        usersFromFirestore,
        matchUser,
        setMatchUser,
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
