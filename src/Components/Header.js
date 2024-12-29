    import React, { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { useDispatch, useSelector } from 'react-redux';
    import { onAuthStateChanged, signOut } from 'firebase/auth';
    import { auth } from '../Utils/firebase';
import { addUser, removeUser } from '../Utils/userSlice';
import { NETFLIX_LOGO, USER_AVATAR } from '../Utils/constants';

    const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            
        })
        .catch((error) => {
            // Create an Error page 
            navigate("/error")
        });
    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
            
                const {uid,email,displayName} = user; 
                dispatch(addUser({uid:uid, email:email,displayName:displayName}))
                navigate("/browse");

            } 
        
            else {
            
                dispatch(removeUser());
                navigate("/");
            
            }
        });
            // Unsubscribe when the component unmounts
        return () => unsubscribe();

    }, []);



    return (
        <div className="  absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img 
            className="w-44" 
            src= {NETFLIX_LOGO}
            alt="Netflix logo"
        />
        
        {user && (
            <div className="flex items-center">
            <img 
                className="w-10 h-10 rounded-full mr-2"
                // Using Netflix's default avatar
                src={USER_AVATAR}
                alt="User Profile"
            />
            <button 
                onClick={handleSignOut}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
            >
                Sign Out
            </button>
            </div>
        )}
        </div>
    );
    };

    export default Header;
