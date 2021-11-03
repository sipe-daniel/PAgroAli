import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

import './Register.css'

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmationPassword] = useState("");
    const history = useHistory();

     async function handleSubmit(){
        let item = {name,email, password, password_confirmation};
        console.log(item);
        let response = await fetch('http://localhost:8000/api/v0/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
      
            body: JSON.stringify(item)
          });
          if (response.status >= 200 && response.status <= 299) {
            const jsonResponse = await response.json();
            console.log("ici le json response"+jsonResponse);
            console.log("ici le json response token"+jsonResponse.token);
          } else {
            console.log(response.status, response.statusText);
          }
    }
    return (
        
        <form className="container-register" action="/login">
            <h1 className="register">Créez un compte :</h1>
            <div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" autoComplete="off"> nom</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" autoComplete="off">Adresse email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" autoComplete="off">mot de passe</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password_confirmation" className="form-label" autoComplete="off">comfirmation du mot de passe</label>
                    <input type="password" className="form-control" id="password_confirmation" onChange={(e) => setConfirmationPassword(e.target.value)}/>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Envoyer</button>
            </div>
        </form>
    )
}
