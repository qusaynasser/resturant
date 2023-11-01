import React, { useEffect, useState } from 'react'

export default function Onion() {

    let[onion,setOnion] = useState([]);

    const getOnion =async ()=>{
        let apiOnion = await fetch('https://forkify-api.herokuapp.com/api/search?q=onion');
        let getData= await apiOnion.json();
        setOnion(getData.recipes);
    }

    useEffect(()=>{
        getOnion();
    },[])
  return (
    <div className='row'>
        {onion.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <img src={ele.image_url} className='img-fluid my-4' />
                <h2>{ele.title}</h2>
                </div>
        })}
    </div>
  )
}
