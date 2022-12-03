import React from "react";
import { CardComp } from "../../components/card/card_comp";
import { housesData } from "../../data/data";

const Home = () => {

    // const house = housesData;
    console.log('house', housesData);

  return (
    <>
      <section className="heros overflow-hidden mt-4">
        <div className="row">
          <div className="heros__left d-flex flex-column justify-content-center col-md-6 col-sm-12">
                <div className="container col-md-8">
                <h1 className="fw-bold text-capitalize">
              <span className="text-danger">Rent</span> your dream house with
              us.{" "}
            </h1>

            <p className="text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              deleniti ea ipsa quia. Ut ullam sit iusto! Reprehenderit,
              excepturi. Itaque.
            </p>
                </div>
          </div>
          <div className="heros__right col-md-6 col-12">
            <img src="./assets/house-banner.png" width="80%" alt="banner" className="img-fluid float-end" />
          </div>
        </div>
      </section>

      <section className="card-section">
        <CardComp />
      </section>
    </>
  );
};

export default Home;
