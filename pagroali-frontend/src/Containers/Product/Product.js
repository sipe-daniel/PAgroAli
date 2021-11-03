import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'
import './Product.css'


export default function Product() {
    const location = useLocation()
    return (
        <div className="container">
            <div>
                <div className="product-content">
                    <h2>Votre produit: {location.state.product_name}</h2>
                    <p>Description du produit: {location.state.product_description}</p>
                    <p><span className="price-label">Prix :</span> {location.state.product_price} EUR</p>
                    <div className="product-code">Code produit : {location.state.product_code} </div>
                    {/*<p>{location.state.body}</p> */}
                </div>
            </div>
            
        </div>
       
    )
}
