import React, { useEffect, useState } from 'react'

export default function Products() 
{

    let[product,setProduct]=useState([]);

    const getProduct=async()=>
    {
        let response=await fetch('https://fakestoreapi.com/products');
        let data=await response.json();
        setProduct(data);
    }
    useEffect(()=>{
        getProduct();
    },[])

    
return (
    <div className='row'>
        {product.map((ele)=>{
        return <div className='col-md-4'  key={ele.id}>
            <img src={ele.image} className='img-fluid w-75'></img>
            <p>{ele.title}</p>
            <p>{ele.price}</p>

        </div>
        })}
    </div>
)
}
