import React from "react";
import style from "./Card.module.css";
import StarIcon from "../assets/Star.svg";
import StarIcon2 from "../assets/Star_fill.svg";

export default function Card({
                                 image,
                                 popular,
                                 available,
                                 name,
                                 price,
                                 rating,
                                 votes,
                             }) {
    const hasRating = rating > 0;

    return (
        <div className={`${style.cardWrapper} ${!available ? style.unavailable : ""}`}>
            <div className={style.cardImageWrapper}>
                <img src={image} alt={name} className={style.cardImage} />

                {/* Popular Badge */}
                {popular && <span className={style.cardBadge}>Popular</span>}


            </div>

            <div className={style.cardContent}>
                <div className={style.cardHeader}>
                    <h3 className={style.cardName}>{name}</h3>
                    <span className={style.cardPrice}>{price}</span>
                </div>

                <div className={style.cardFooter}>
                    {hasRating ? (
                        <>
                            <img
                                src={StarIcon2}
                                alt="star"
                                className={`${style.cardStarImage} ${style.filled}`}
                            />
                            <span className={style.cardRating}>{rating}</span>
                            <span className={style.cardVotes}>({votes} votes)</span>
                        </>
                    ) : (<>
                            <img
                                src={StarIcon2}
                                alt="star"
                                className={`${style.cardStarImage} ${style.filled}`}
                            />
                            <span className={style.noRating}>No ratings</span>
                    </>


                    )}
                    {!available && <h1 className={style.soldOut}>Sold out</h1>}
                </div>
            </div>
        </div>
    );
}
