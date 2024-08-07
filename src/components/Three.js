import React from 'react';
import axios from "axios";
class Three extends React.Component {
  constructor() {
    super();
    console.log(this);
    console.log("Constructor Called");
    this.state = {
      name: 'Harsh',
      age: 19,
      apidata:[]
    }
  }
  f1()
  {
   // alert()
    this.setState({ name: "Bhau", age: Math.random()});
   // this.props.x1="200"
  }
  componentDidMount()
  {
    console.log("DidMount Cycle", this.state.name, this.state.age);
    var ans = axios.get("https://fakestoreapi.com/products");
    ans.then((response)=> {
      console.log(response);
      this.setState({ apidata: response.data });
    })
  }
  componentDidUpdate()
  {
    console.log("DidUpdate Cycle", this.state.name, this.state.age);
  }
  componentWillUnmount()
  {
console.log("Will Unamount Cycle");
  }
  render() {
    var ans = this.state.apidata;
    return (
      <div className="container">
        <h1>Class Component</h1>
        <p>{ this.state.name}</p>
        <p>{this.state.age}</p>
        <button onClick={() => { this.f1() }}>Enter</button>
        <p>{this.props.x1}</p>
        <div className='row'>
          {
            ans && ans.length > 0 && ans.map(value => 
              <div className='col-3'>
                {value.title}
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

export default Three;










