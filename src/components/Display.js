import { Component } from "react";
import LoginPage from "./LoginPage";
import AdminInfo from "./AdminInfo";
import ProductList from "./ProductList";

class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <>
            {this.props.buttonforDisplay}
            
              {this.props.buttonforDisplay === 'home'? <ProductList products={this.props.products}></ProductList>: null}
              {this.props.buttonforDisplay === 'login' ? <LoginPage></LoginPage> : null} 
              {this.props.buttonforDisplay === 'admin' ? <AdminInfo></AdminInfo> : null}
              
        </>
    )
  }
}

export default Display;
