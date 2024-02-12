import React, { useState } from 'react'
import Fooddata from './FoodData'
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import "./style.css"

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);


    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={zomatologo} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt=" " />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
            </div>

            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search for Restaurants..." />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
            </Form>
        
            <section className='item_section mt-4 container'>
             <h2 className='px-4' style={{fontWeight:400}}>Restaurants in Mumbai Open now</h2>
             <div className="row mt-2 display-flex justify-content-around align-items-center">
                 <Cards data={fdata}/>
             </div>
            </section>
        </>
    )
}

export default Search