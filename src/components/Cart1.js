import React from 'react'
import { useSelector } from 'react-redux'
import { removefromcart } from "../redux/slices/cartslice";
import { useDispatch } from "react-redux";

export default function Cart1() {
    let dispatch=useDispatch()
    function f1(value) {
      console.log(value);
      dispatch(removefromcart(value));
    }
    let ans = useSelector(state => state.cart.value)
    
  return (
    <div className="container">
      <h1>cartpage</h1>
      <div className="row">
        {ans &&
          ans.length > 0 &&
          ans.map((value) => (
            <div className="col-3">
              <img src={value.image} alt="" className="img-fluid" />
              <h2>{value.price}</h2>
              <button onClick={() => {f1(value);}}>
                remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
