import React, { useEffect, useState } from 'react'

export default function Pizza() {

    let[pizza,setPizza]=useState([]);

    const getPizza=async ()=>{
        let apiPizza=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let getData=await apiPizza.json();
        setPizza(getData.recipes);
    }

    useEffect(()=>{
        getPizza();
    },[])
  return (
    <div className='row'>
        {pizza.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <img src={ele.image_url} className='img-fluid my-5'></img>
                <h2>{ele.title}</h2>
            </div>
        })}
    </div>
  )
}
