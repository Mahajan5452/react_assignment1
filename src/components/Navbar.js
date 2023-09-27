import React from "react";
import { Component } from "react";
import Display from "./Display";



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      butom: null,
    };
  }
  setValue(value) {
    this.setState({
      butom: value,
    });
  }

  render() {
    return (
        <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FoodCard
          </a>
          <button
             onClick={() => this.setValue('home')}
          >
            home
          </button>
          <button
             onClick={() => this.setValue('login')}
          >
            login
          </button>
          <button
             onClick={() => this.setValue('admin')}
          >
            admin
          </button>
          
        </div>
      </nav>
      
    
      <Display buttonforDisplay={this.state.butom} />
      </>
    );
  }
}

export default Navbar;
