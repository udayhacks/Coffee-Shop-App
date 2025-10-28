

/*
{
    "id": 1,
    "name": "Cappuccino",
    "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
    "price": "$5.20",
    "rating": 4.7,
    "votes": 65,
    "popular": true,
    "available": true
 */



import React from "react";
export default function  Card(props){

    return(
      <>
      <div className="card-wrapper">

          <div className="card-image">
              <img src = {props.image}  alt="Product not available"/>
              {props.popular && <h1>popular</h1>}
          </div>

          <div className="card-content">
              <h1 className="card-name">{props.name}</h1>
              <h1>{props.price}</h1>

              <div className="card-star">
                  <img src = {"./assets/Star.svg"} alt= "start"/>
                  <h1 className="card-rating">{props.rating}</h1>
                  <h1 className="card-votes">{props.votes}</h1>
                  /* sold out add */

              </div>
          </div>
      </div>


      </>

    );
}