import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Right(props) {
    
    var [apidata, setapidata] = useState();
    useEffect(function () {
        if (props.p2 !== "") {
            var apipath = `https://fakestoreapi.com/products/category/${props.p2}`;
            console.log(apipath);
           
            var ans = axios.get(`https://fakestoreapi.com/products/category/${props.p2}`)
           console.log(ans);
            ans.then(function (response) {
                setapidata(response.data)
            })
        }
    }  ,[props.p2]
    )

    return (
      <div className="container">
        <h1>Right</h1>
        <p>{props.p2}</p>
        <div className="row">
          {apidata &&
            apidata.length > 0 &&
            apidata.map((value) => (
              <div className="col-3 text-center">
                <img src={value.image} className="img-fluid" alt="" />
                <h2>{value.price}</h2>
                <p>{value.title}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
  
