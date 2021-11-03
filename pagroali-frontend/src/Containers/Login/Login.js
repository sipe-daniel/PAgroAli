import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
   

    // useEffect(() => {
    //     if(localStorage.getItem('user-info')) {
    //         history.push("/")
    //     }
    // })

    // function redirection(res){
    //     setToken(res)
    // }

    function refreshPage() {
      window.location.reload(false);
    }


     async function handleSubmit(){
        let item = {email, password};

        let response = await fetch('http://localhost:8000/api/v0/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
      
            body: JSON.stringify(item)
          });
          if (response.status >= 200 && response.status <= 299) {
            const jsonResponse = await response.json();
            
            localStorage.setItem("user-info",JSON.stringify(jsonResponse))
            
            history.push('/');
          } else {
            // Handle errors
            console.log(response.status, response.statusText);
          }
    }

    return (
        <div className="container-login">
            <h1 className="login">Se connecter :</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" autoComplete="off">Adresse email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" autoComplete="off">mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}  className="btn btn-primary">Envoyer</button>
        </div>
    )
}


