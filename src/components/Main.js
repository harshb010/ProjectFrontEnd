import React from 'react'
import Right from './Right'
import Left from './Left'
import { useState } from 'react'
export default function Main() {
    var [record,setrecord]=useState("")
    function parentfunction(category) {
        console.log("Parent Function Called", category);
        setrecord(category);
    }
  return (
      <div className='container'>
          <div className='row'>
              <div className='col-3'>
                  <Left p1={parentfunction}></Left>
              </div>
              <div className='col-9'>
                  <Right p2={record }></Right>
              </div>
          </div>
          
    </div>
  )
}
