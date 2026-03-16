import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  productLink,
  learnMore,
}) {
  return (
    <div className="container" >
      <div className="row border-top mt-5 align-items-center">
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {learnMore && (
              <a
                href={learnMore}
                style={{  textDecoration: "none" }}
              >
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
            {productLink && (
              <a href={productLink} style={{ textDecoration: "none" }}>
                {productName} <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
        <div className="col-6 p-5 text-center">
          <img src={imageURL} style={{width: "100%", maxWidth: "500px" }}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
