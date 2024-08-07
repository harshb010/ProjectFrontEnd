import React from 'react'

export default function Left(props) {
    function f1(data) {
        console.log(data);
        props.p1(data)
    }
  return (
      <div>
          <ul>
              <li onClick={()=>{f1("electronics");}}>electronics</li>

              <li onClick={()=>{f1("jewelery");}}>jewelery</li>
          </ul>

    </div>
  )
}
