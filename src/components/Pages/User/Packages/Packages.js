import React from "react";
import Star from '../../../../images/Normal User/star.png'
import "../../../CSS/Packages/package.css";

export const Packages = () => {
  return (
    <>
      <div className="Package-container ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 package-bg my-5 ">
              <div className="pak-b">
                <div className="pa-header">
                  <p>Free</p>
                </div>
                <div className="package">
                  <p> <img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Video Upload</p>
                  <p><img src={Star} className="star" alt="star" /> One Entry in One Fan Group</p>
                  <p><img src={Star} className="star" alt="star" /> Free E-commerce Surfing</p>
                  <p><img src={Star} className="star" alt="star" /> </p>
                </div>
                <div className="but-c">
                  <button className="package-btn">Free User</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 package-bg my-5 ">
              <div className="pak-b">
                <div className="pa-header">
                  <p>Silver</p>
                </div>
                <div className="package">
                  <p><img src={Star} className="star" alt="star" /> 10% off.On Every Purchase.</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Chat With A Star</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Video Upload</p>
                  <p><img src={Star} className="star" alt="star" /> One Entry in One Fan Group</p>
                  <p><img src={Star} className="star" alt="star" /> Free E-commerce Surfing</p>
                </div>
                <div className="but-c">
                  <button className="package-btn">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 package-bg my-5 ">
              <div className="pak-b">
                <div className="pa-header">
                  <p> Gold</p>
                </div>
                <div className="package">
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                </div>
                <div className="but-c">
                  <button className="package-btn">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 package-bg my-5 ">
              <div className="pak-b">
                <div className="pa-header">
                  <p>Platinum</p>
                </div>
                <div className="package">
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                  <p><img src={Star} className="star" alt="star" /> One Free Voice Record</p>
                </div>
                <div className="but-c">
                  <button className="package-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
