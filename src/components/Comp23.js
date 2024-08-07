import React, { useContext } from 'react'
import CONTEXT from '../contextapi'

export default function Comp23(xyz) {
  var ans=useContext(CONTEXT)
  return (
    <div>Comp23,{xyz.p3}
      <hr />
      <p>Data From Provider</p>
      { ans}
    </div>
  )
}
