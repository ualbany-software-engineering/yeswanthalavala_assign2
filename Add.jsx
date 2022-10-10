import React from 'react';
import "./bootstrap-grid.min.css";

const shortText = "Yeswanth Reddy Alavala";
const longText = "Hello Everyone, This is Yeswanth a graduate student at UAlbany.";

class Apply extends React.Component{
  render() {

  return (
    <div className="class1">
<h1>Here you can add any two numbers</h1>
    <p>{shortText}</p>
    <p>{longText}</p>

    <h4> This is me</h4>
    <img src="logo192.png" width="200" height="200" class="d-inline-block align-top" alt="" />



    </div>
    

  );
}
}
export default Apply;