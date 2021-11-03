import React from 'react'
import './Home.css'
import Card from '../../Components/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import {useEffect, useState} from 'react'
import {getProducts} from '../../redux/products/productReducer'
import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'


export default function Home() {
    const {products} = useSelector(state => ({
        ...state.productReducer
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        // When the component finish to load
        if(products.length === 0){
            dispatch(getProducts());
        }
        console.log(products);
    }, [])

    const handleDelete = id => {
        const filteredState = products.filter(item => {
            return item.id !== id;
        })
        dispatch({
            type: 'DELETEPRODUCT',
            payload: id
        })

        dispatch({
            type: 'LOADPRODUCTS',
            payload: filteredState
        })

    }



    return (
        <>
            <h1 className="home-title">produits agroalimentaires</h1>
            <div className="container-cards">
                { products.map(item => {
                        return (
                            <Card key={uuidv4()}>
                                
                                <img src="https://cdn.pixabay.com/photo/2013/08/09/05/54/layer-170971__340.jpg"/>
                                <h1 className="product-name"><b>{item.product_name}</b></h1>
                                <h2><b>{item.product}</b></h2>
                                <div><span className="price-label">Prix:</span> {item.product_price} EUR</div>
                                
                                <Link to={{pathname: `products/description/${item.product_name.replace(/\s+/g, '-').trim()}`,
                                state: {
                                    product_code: item.product_code,
                                    product_name: item.product_name,
                                    product_description: item.product_description,
                                    product_price: item.product_price,
                                }}}>Description du produit</Link>

                                {!(localStorage.getItem('user-info')===null|| typeof(localStorage.getItem('user-info'))===undefined) &&
                                <div className="row justify-content-center-around">
                                    <div className="col-3 ">
                                    <Link to={{pathname: `products/edit/${item.product_name.replace(/\s+/g, '-').trim()}`,
                                        state: {
                                            id: item.id,
                                            product_code: item.product_code,
                                            product_name: item.product_name,
                                            product_description: item.product_description,
                                            product_price: item.product_price,
                                        }}}>
                                        <button type="button"  className="btn btn-primary btn-sm btn-block  button-update ">Modifier</button>
                                    </Link>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={() => handleDelete(item.id)} type="button" className="btn btn-danger btn-sm btn-block" >Supprimer</button>
                                    </div>
                                </div>
                    
                        
                                }
                            
                            </Card>
                        )
                })}
            </div>

        </>
    )
}
