import React, { Component } from 'react'
import {useHistory} from 'react-router-dom'


export default function Logout () {
   let history = useHistory();

  
//    const getEraseDataConnexion = () =>{
//         fetch('http://localhost:8000/api/v0/logout', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 'Authorization':  localStorage.getItem("user-info").token
//             },
//         });
//     }
//     getEraseDataConnexion()
    window.localStorage.clear();
    window.location.reload(false);
    history.push('/login');

}

