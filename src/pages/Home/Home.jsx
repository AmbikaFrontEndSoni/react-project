import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating/Rating";
import img1 from "../../assets/diamond_website_design_mangalsutra.jpg"
import img2 from "../../assets/I4V4P0-YAK0633-HY-Winter-22-Banner-1386-x-554-4.webp"


const Home = ({ addToCart }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = id
      ? `https://fakestoreapi.com/products/${id}`
      : "https://fakestoreapi.com/products";
    axios.get(url).then((res) => {
      setData(id ? [res.data] : res.data);
    });
  }, [id]);

  return (
    <>
     {/* <div className="banner"></div> */}
{/*=================carousel===========  */}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <img src={img1} className="d-block w-100" style={{height:"70vh"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" style={{height:"70vh"}} alt="..."/>
    </div>
    {/* <div className="carousel-item">
      <img src="../../assets/bb1.jpg" className="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
     
     {/*=================carousel===========  */}
      <center>
          <h2 className="arrivals">New Arrivals</h2>
        <div className="card-container">
          {data.map((value) => (
            <div className="card " key={value.id}>
              <figure>
                <Link to={`/react-project/productDetails/${value.id}`}>
                  <img src={value.image} alt={value.title} />
                </Link>
              </figure>
              <hr />
              <div className="card_body">
                <div><b>Price :</b> {value.price}</div>
                <div>
                  <Rating stars={value.rating?.rate} />
                </div>

                <div style={{fontSize:"14px"}}><b>Title :</b> {value.title}</div>
                <br />
                <div className="button-container">
                  {/* <Link to={`/React-project-E-commerce/productDetails/${value.id}`}>
                    <button className="card-button">Read More</button>
                  </Link> */}
                  <Link to="/react-project/cart">
                    <button
                      onClick={() => addToCart(value)}
                      className="card-button"
                    >
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </center> 
    </>
  );
};

export default Home;