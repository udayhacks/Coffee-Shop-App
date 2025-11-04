import React from "react";
import useCoffeeData from '../hooks/Api.js'
import Card from '../Cards/Card.jsx'
import style from './Display.module.css'
import {useState} from "react";

export default function Display() {


    const [coffee, loading, error] = useCoffeeData()
    const [showAvailable ,setShowAvailable] = useState(false);
    //console.log(coffee);

    const available_coffee = coffee.filter(coffee => coffee.available === true);
    console.log(available_coffee);

    if (loading) return (
        <>
            <h1>Loading .... </h1>
        </>
    );
    if ( error ) return <p>{error}</p>;


    const available_handle = ()=>{

        setShowAvailable(true);
    }

    const collection = ()=>{

    setShowAvailable(false);
    }

    const display_coffee = showAvailable ? available_coffee :coffee;

    return (
        <>
                <div className={style.ourCollection}>
                    <h1 className={style.title}> Our Collection</h1>
                    <p>Introducing our Coffee Collection, a selection of unique coffees
                        from different roast types and origins, expertly roasted in small
                        batches and shipped fresh weekly. </p>
                    <div className="style.buttons">

                        <button type = "button" onClick={collection}> All Products</button>
                        <button type = "button" onClick={available_handle} > Available Now</button>
                    </div>
                    <div className={style.displayCoffee}>
                        {
                            display_coffee.map(
                                (item) => (
                                    <Card key = {item.id}  {...item}/>
                                )
                            )
                        }
                    </div>

                </div>
        </>
    );
}