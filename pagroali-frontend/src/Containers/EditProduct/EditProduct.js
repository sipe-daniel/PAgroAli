import React from 'react'
import Form from '../../Components/Forms/FormEditProduct/FormEditProduct'
import { useLocation } from 'react-router-dom'


export default function EditProduct() {
    const location = useLocation()
    console.log("location state"+location.state);

    return (
        <>
            <Form currentProductValue={location.state}/>
        </>
    )
}
