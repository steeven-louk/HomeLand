import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useParams } from "react-router-dom";
import { housesData } from "../../data/data";

const Details = () => {
  const { id } = useParams();

  const houseData = housesData.find((house) => house.id === parseInt(id));

  const { name, type, description, price, country, bathrooms, bedrooms, surface, imageLg } = houseData;


  return (
    <>
      <div className="container">
        <div>
          <div className="top-detail d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="fw-bold">{houseData.name} </h4>

              <h5>{houseData.address}</h5>
            </div>

              <div className="fw-bold d-block mt-4 text-white">
                <span className="bg-success rounded me-2 p-1">
                  {type}{" "}
                </span>
                <span className="bkg-secondary p-1 rounded">
                  {" "}
                  {country}
                </span>
            </div>

            <h4 className="mt-4 fw-bold color-secondary">
              ${price}
            </h4>
          </div>

          <div className="row">
            <div className="left-side col-md-8">
              <div className="card border-0 rounded-0">
                <img
                  src={`.${imageLg}`}
                  alt={name}
                  className="card-img-top"
                />

                <div className="card-body">
                  <div className="house-details d-flex gap-3 mb-3 color-secondary">
                    <span className="text-center">
                      <FontAwesomeIcon className="me-2" icon="fa-bath" />
                      {bathrooms}
                    </span>
                    <span className="text-center">
                      <FontAwesomeIcon
                        className="me-2"
                        icon="fa-solid fa-bed"
                      />
                      {bedrooms}
                    </span>
                    <span className="text-center">
                      <FontAwesomeIcon
                        className="me-2"
                        icon="fa-solid fa-up-right-and-down-left-from-center"
                      />
                      {surface}
                    </span>
                  </div>

                  <div className="card-text">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-side p-4 border border-secondary rounded col-md-4 h-25">
              <div className="profil d-flex gap-4 ">
                <img
                  src={`.${houseData?.agent.image}`}
                  className="img-fluid w-25 d-block border p-1 border-secondary rounded-pill border-2"
                  alt={houseData?.agent.name}
                />
                <div className="name text-capitalize mt-3">
                  <h5 className="fw-bold">{houseData?.agent.name} </h5>
                  <span className="color-secondary">view listings</span>
                </div>
              </div>

              <form className="form mt-5">
                <input type="text" placeholder="Name*" className="form-control rounded  p-2" />
                <input type="email" placeholder="Email*" className="form-control my-1 rounded p-2" />
                <input type="text" placeholder="Phone*" className="form-control  rounded p-2" />
                <textarea className="form-control rounded my-1 p-2" id="" cols="30" rows="5" resize="none" placeholder="Hello, I am interested in (Modern apartment)"></textarea>
                
                <div className="btn-group d-flex gap-1">
                <a href="/" role="button" className="btn btn-outline-secondary bkg-secondary p-2 w-50 text-white fw-semibold">Send message</a>
                <a href="/" role="button" className="btn btn-outline-secondary color-secondary p-2 w-50 fw-semibold">Call</a>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
