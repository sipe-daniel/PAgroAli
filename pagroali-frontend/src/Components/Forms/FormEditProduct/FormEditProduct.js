import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import './FormEditProduct.css'
import { useHistory } from 'react-router'

export default function FormEditProduct(props) {
    const [product, setProduct] = useState({
        id: props.currentProductValue.id,
        product_code: props.currentProductValue.product_code,
        product_name: props.currentProductValue.product_name,
        product_description: props.currentProductValue.product_description,
        product_price: props.currentProductValue.product_price
    })

    let history = useHistory()

    function redirectToHomePage(){
        history.push("/")
    }
    console.log(props.currentProductValue);
    const dispatch = useDispatch();

    const handleForm = e => {
        console.log("le produit: "+product);
        e.preventDefault()
        console.log("le produit: "+product);
        dispatch({
            type: 'UPDATEPRODUCT',
            payload: product
        })
        redirectToHomePage()
    }
    
    const handleInputs = e => {
        if(e.target.classList.contains('inp-product_name')){
            const newObjState = {...product, product_name: e.target.value}
            setProduct(newObjState)
        }else if(e.target.classList.contains('inp-product_description')){
            const newObjState = {...product, product_description: e.target.value}
            setProduct(newObjState) 
        }else if(e.target.classList.contains('inp-product_price')){
            const newObjState = {...product, product_price: e.target.value}
            setProduct(newObjState) 
        }else if(e.target.classList.contains('inp-product_code')){
            const newObjState = {...product, product_code: e.target.value}
            setProduct(newObjState) 
        }
        console.log(product)
    }

    return (
        <>
            <h1 className="product_name-form">Modifier un produit</h1>
            <form onSubmit={handleForm} action="" className="container-form">
                <label htmlFor="product_name">Nom du produit</label>
                <input 
                onChange={handleInputs}
                value={product.product_name}
                type="text" 
                id="product_name" 
                placeholder="Entrez le nom de votre produit"
                className="inp-product_name"/>
           
                <label htmlFor="product_description">Votre produit</label>
                <textarea
                onChange={handleInputs}
                value={product.product_description}
                id="product_description" 
                placeholder="Entrez la description de votre produit"
                className="inp-product_description"></textarea>
                
                <input 
                onChange={handleInputs}
                value={product.product_price}
                type="number" 
                id="product_price" 
                placeholder="Entrez le prix de votre produit"
                className="inp-product_price"/>

                <label htmlFor="product_code">Code produit</label>
                <input 
                onChange={handleInputs}
                value={product.product_code}
                type="text" 
                id="product_code" 
                placeholder="Entrez le code de votre produit"
                className="inp-product_code"/>

                <button>Modifier</button>
            </form>
        </>
    )
}
