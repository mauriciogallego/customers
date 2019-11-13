import React, {Component} from 'react';

export default class Customers extends Component{
  constructor(){
    super();
    this.state = {
      customer : []
    }
  }
  
componentDidMount(){
  fetch('/api/customers')
    .then(function(res){
      return res.json()
    })
    .then(function(res){
      this.setState({
        customer: res
      })
    })
    .catch(function(){
      console.log( "error conexion")
    })
}

  render(){
    return (
      <div>
        <ul>
          {this.state.customer}
        </ul>
      </div>
    );
  }

}