import React, { useRef } from 'react'
import axios from 'axios'
export default function Form() {
    var x1 = useRef()
    var x2 = useRef()
    var x3 = useRef()
    var x4 = useRef()
    var x5 = useRef()

    function f1() {
        var data1 = x1.current.value
        var data2 = x2.current.value
        var data3 = x3.current.value
        var data4 = x4.current.value
        var data5 = x5.current.value

        var record = { name: data1, email: data2, phoneNumber: data3, address: data4, role: data5 }
        var ans = axios.post("http://localhost:9090/user", record);
        console.log(ans);
    }
  return (
    <div className="container">
      <br></br>
  
          <h1>Add Record</h1>
          
      <br></br>
     

      
      <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" ref={x1}class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"></input>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Email</label>
  <input type="text" ref={x2}class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Phone Number</label>
  <input type="text" ref={x3}class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Address</label>
  <input type="text" ref={x4} class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Role</label>
  <input type="text" ref={x5} class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
</div>

<br></br>
      <button onClick={f1}>Enter</button>
      <br></br>

    </div>
  );
}
