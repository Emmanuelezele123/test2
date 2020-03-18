import React from 'react';
import {Redirect} from 'react-router-dom';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',value2:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var {value,value2} = this.state;
    if(value === "ezele" & value2 === "ezele" ){

      this.props.history.push('/posts/');

    }else{
      alert("Login failed")
    }
  
  }
  //you have to use ezele as username and password

  render() {
    return (
     
      <form onSubmit={this.handleSubmit}>
         <div class="header">Mealimeter Login</div>
        <label>
          Username
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
       
        <label>
          Password
            </label>
            <input type="text" value={this.state.value2} onChange={this.handleChange2} />
     
        <input id="btn" type="submit" value="Submit" />
      </form>
    );
  }
}

