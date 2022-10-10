import React from 'react';
class AddComponent extends React.Component{
    constructor(props) {
      super(props); 
      this.state = {
      num1: null,
      num2: null, total: null
      };
    }
myChangeHandler = (event) => {
    let nam =event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val});
}

mySubmitHandler = (event) => {

    event.preventDefault();
    const url = `http://localhost:3001/add/${this.state.firstNumber}/and/${this.state.secondNumber}`
    fetch(url)
        .then((result) => result.json())
        .then(result => {
            this.setState({ queryResult: result.Addition })
        });
}
    render() {
        return (
<div className="r">
    <div className="c">
    <form onSubmit={this.mySubmitHandler}>
        <div className="f">
            <label htmlFor="num1">Enter First Number</label>
<input
type="number"
name="num1"
id="num1"
className="fc"
onChange={this.myChangeHandler} />
</div>
<div className="f">
    <label htmlFor="num2">Enter Second Number</label>
    <input
    type="number"
    name="num2"
    id="num2"
    className="fc"
    onChange={this.myChangeHandler} />
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
        );
    }
}
export default AddComponent;