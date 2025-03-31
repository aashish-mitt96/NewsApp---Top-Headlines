import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container my-5">
        <h2 style={{color:props.mode==='Light'?"Black":"White"}} className="mt-4"> About Us</h2>
        <p style={{color:props.mode==='Light'?"Black":"White"}}> 
          At NewsApp, we are dedicated to bringing you the latest and most
          relevant news from around the world, all in one place. Our mission is
          to inform, educate, and engage our readers by delivering accurate and
          timely news stories across a wide range of topics. We envision a world
          where information is not just abundant but also meaningful. We aim to
          cut through the clutter and provide news that informs, empowers, and
          enlightens. We believe in a future where news is more than just a
          commodity—it's a tool for positive change.
        </p>

        <h5 style={{color:props.mode==='Light'?"Black":"White"}} className="mt-5">What We Offer</h5>
        <div className="accordion" id="accordionExample">
          <div style={{backgroundColor: props.mode==='Light'?'White':'#98AFC7'}} className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Real-Time News
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Stay updated with breaking news as it happens, with our
                real-time news feed.
              </div>
            </div>
          </div>
          <div style={{backgroundColor: props.mode==='Light'?'White':'#98AFC7'}} className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Diverse Categories
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                From politics and economics to sports and entertainment, our app
                covers all the news categories that interest you.
              </div>
            </div>
          </div>
          <div style={{backgroundColor: props.mode==='Light'?'White':'#98AFC7'}} lass="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Dark Mode
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Read comfortably anytime with our Dark Mode feature, perfect for
                night-time browsing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
