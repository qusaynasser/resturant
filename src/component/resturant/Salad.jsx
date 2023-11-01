import React, { useEffect, useState } from 'react'

export default function Salad() {

    let[salad,setSalad] = useState([]);

    const getSalad =async ()=>{
        let apiSalad = await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
        let getData= await apiSalad.json();
        setSalad(getData.recipes);
    }

    useEffect(()=>{
        getSalad();
    },[])
  return (
    <div className='row'>
        {salad.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <img src={ele.image_url} className='img-fluid my-4' />
                <h2>{ele.title}</h2>
                </div>
        })}
    </div>
  )
}
