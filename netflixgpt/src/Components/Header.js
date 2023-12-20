import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux"


const Header = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
  const handlesignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email,displayName } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    
  })

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img alt='logo' width={200} height={150}  src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
    <div className='flex p-2'>
    <img 
    alt='icon'
    className='w-12 h-12'
    src='https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e'
    />
    <button onClick={handlesignout}>Sign out</button>
    </div>
        </div>
  )
}

export default Header
