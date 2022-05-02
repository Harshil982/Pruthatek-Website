import React from "react";
import Data from "./Data";
import CardsUi from "./CardsUi";

const Cards = () => {
  return (
    <>
      <div className="container d-flex justify-content-between mt-5">
        <div className="row">
          <div className="col-md-4 mt-2">
            <CardsUi
              imgsrc={Data[0].imgsrc}
              title={Data[0].title}
              description={Data[0].description}
            />
          </div>
          <div className="col-md-4 mt-2">
            <CardsUi
              imgsrc={Data[1].imgsrc}
              title={Data[1].title}
              description={Data[1].description}
            />
          </div>
          <div className="col-md-4 mt-2">
            <CardsUi
              imgsrc={Data[2].imgsrc}
              title={Data[2].title}
              description={Data[2].description}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
