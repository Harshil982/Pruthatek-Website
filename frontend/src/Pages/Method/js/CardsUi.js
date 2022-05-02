import React from "react";

const CardsUi = (props) => {
  return (
    <>
      <div className="card" style={{ width: "100%", height: "100%" }}>
        <div className="overflow text-center">
          <img
            src={props.imgsrc}
            alt="myPic"
            className="img-thumbnail mt-3 border-0"
            style={{ width: "20%" }}
          />
        </div>
        <div className="card-body text-dark">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text text-secondary">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default CardsUi;
