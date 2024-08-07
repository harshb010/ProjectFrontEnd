import React, { useEffect, useState } from 'react'

export default function About() {
    var [counter, setcounter] = useState(100);
    function f1() {
        setcounter(counter + 10);
    }
    // useEffect(function () {
    //   console.log(Math.random());
    // }),
      
    // useEffect(function () {
    //     console.log(Math.random());
    // }, []);
      useEffect(function () {
          console.log(Math.random());
          return () => {
              console.log("Success")
          }
      }, []);
    
  return (
      <div className='container'>
          <h1>Use Effect Example</h1>
          <p>{counter}</p>
          <button onClick={f1}>Enter</button>
    </div>
  )
}



