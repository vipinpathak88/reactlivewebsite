import React from "react";

const Card = (props) => {
  return(
    <>
      <img src={props.imgSrc} alt="business card printing" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">Click</a>
    </>
  )
};

export default Card;