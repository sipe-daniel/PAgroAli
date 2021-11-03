import React, {useState, useEffect} from "react";
import './Navbar.css';
import {Link} from "react-router-dom";


export default function Navbar(props) {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {  props.menu ?(
                 <>
                    <ul className="liste nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <Link to='/'>
                            <li className=" nav-link px-2 text-white">Acceuil</li>
                        </Link>
                       
                        <Link to="/contact">
                            <li className=" nav-link px-2 text-white">Contact</li>
                        </Link>
                    </ul>
                    <div className="text-end">
                        <Link to='/login'>
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                        </Link>
                        <Link to='/register'>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </Link>
                    </div>
                </>

                ):(   
                    <>
                        <ul className="liste nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <Link to='/'>
                                <li className=" nav-link px-2 text-white">Acceuil</li>
                            </Link>
                            <Link to='/addProduct'>
                                <li className=" nav-link px-2 text-white">Ajouter Produit</li>
                            </Link>
                           
                        </ul>
                        <div className="text-end">
                        <Link to='#'>
                            <button type="button" className="btn btn-outline-light me-2 d-none">Login</button>
                        </Link>
                        <Link to="/logout">
                            <button type="button" className="btn btn-danger me-2">Logout </button>
                        </Link>
                    </div>
                        
                        
                    </>
            ) }
            {/* <div className="text-end">
            <Link to='/login'>
                <button type="button" className="btn btn-outline-light me-2">Login</button>
            </Link>
            <Link to='/register'>
                <button type="button" className="btn btn-warning">Sign-up</button>
            </Link>
        </div> */}
         
            </div>
            </div>
        </header>
    )


}

