import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  productLink
}) {
  return (
    <div className="container">
      <div className="row border-top mt-5">
        <div className="col-5 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {tryDemo && (
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                Try Demo <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}

            {learnMore && (
              <a
                href={learnMore}
                style={{ marginLeft: "50px", textDecoration: "none" }}
              >
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
            {productLink && (
                <a
                href={productLink}
                style={{  textDecoration: "none" }}
              >
                {productName} <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="media\images\google-play-badge.svg" />
            </a>
            <a
              href={appStore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              <img src="media\images\appstore-badge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
