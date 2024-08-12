import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./ProductDetails.css";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    axios.get(url).then((res) => {
      // console.log(res);
      setData(res.data);
    });
  }, [id]);

  return (
    <>
      <center>
        <div className="container mt-5">
          <div className="row bg-light">
            <div className="col-6">
            <figure>
              <img src={data.image} alt={data.title} style={{width:"50%"}}/>
            </figure>
            </div>
          
          
            <div className="col-6 text-start">
            <h5><b>Title :</b> {data.title}</h5>
            <p className="mt-4"><b>Description : </b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere laboriosam placeat delectus ut. Maiores obcaecati facere at nemo nesciunt enim consectetur, id ipsum rem qui asperiores illum aliquid. Accusantium, minima rerum optio fugit obcaecati quia! Totam esse ea assumenda eius sint veniam, dolor atque placeat sequi odit, commodi id!</p>
              <h6><b>Price</b> ${data.price}</h6>
              <p>
                <b>Rating : </b>
                {/* {data.rating.rate} */}
              </p>
             
              <br />
              <Link to="/cart" onClick={() => addToCart(data)}>
                <button className="btn btn-dark">Add to cart</button>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/">Back to home</Link>
      </center>
    </>
  );
};

export default ProductDetails;