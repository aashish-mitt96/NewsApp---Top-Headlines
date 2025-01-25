import React from "react";

function Card({title, description, imgUrl, newsUrl, mode, date}) {

  const formattedDate = new Date(date).toLocaleString();
  return (
    <>
    <div className="card" style={{ width: "21rem", marginBottom: "20px", backgroundColor: mode==="Light"? "White": "#36454f"}}>

      <img src={imgUrl} height="180" className="card-img-top" alt={title} />

      <div className="card-body">

        <h5 style={{color: mode==="Light"? "Black":"White"}} className="card-title"> {title.slice(0,40)}... </h5>

        <p style={{color: mode==="Light"? "Black":"White"}} className="card-text"> {description.slice(0, 100)}... </p>

        <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
        <p style={{color: mode==="Light"? "Black":"White"}} className="card-text"><small className="text-muted">Last updated on {formattedDate}</small></p>
      </div>
    </div>
    </>
  );
}

export default Card;
