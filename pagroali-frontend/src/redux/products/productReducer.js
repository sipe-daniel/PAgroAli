const INITIAL_STATE = {
    products: []
}


function productReducer( state = INITIAL_STATE, action)
{
    switch(action.type){
        case "ADDPRODUCT":
            const newArr = [...state.products];
            addProduct(action.payload)
            return {
                products: newArr
            }
        case "LOADPRODUCTS": {
            console.log(action.payload);
            return {
                ...state,
                products: action.payload,
            }
        }
        case "UPDATEPRODUCT": {
            console.log("Print: " + action.payload)
            editProduct(action.payload)
            console.log("Print: " + action.payload)

            console.log("DANS UPDATE")
            break;
        }
        break;
        case "DELETEPRODUCT": {
            console.log("Element a supprimer: "+action.payload)
            deleteProduct(action.payload)
            break;
        }
        
    }
    return state;
}

function addProduct(data,token){
    
    const userinfo = JSON.parse(localStorage.getItem('user-info'))

    fetch("http://localhost:8000/api/v0/products/", {
    method: "POST",
    
    body: JSON.stringify({
        product_code: data.product_code,
        product_name: data.product_name,
        product_description: data.product_description,
        product_price: data.product_price
    }),
     
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + userinfo.token, 
    },
})}

function editProduct(data){
    const userinfo = JSON.parse(localStorage.getItem('user-info'))
    fetch("http://localhost:8000/api/v0/products/"+data.id, {
    method: "PUT",
    
    body: JSON.stringify({
        product_code: data.product_code,
        product_name: data.product_name,
        product_description: data.product_description,
        product_price: data.product_price
    }),

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + userinfo.token, 
    },
})}

const deleteProduct = (id) => {
    const userinfo = JSON.parse(localStorage.getItem('user-info'))
    // console.log(userinfo.token)
    fetch('http://localhost:8000/api/v0/products/'+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + userinfo.token
        },
    });
}

export default productReducer;

export const getProducts = () => dispatch => {
    fetch("http://localhost:8000/api/v0/products/")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADPRODUCTS',
            payload: data
        })
    })
}

