import React from "react";


const Cards = ({ title, description }) => {
  return (
    <>


      <section className="  card">
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    </>


  );
};




export default Cards;