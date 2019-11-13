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
      console.log(res)
      return res.json()
    })
    .then(function(res){
      console.log(res)
    })
    .catch(function(){
      console.log( "error conexion")
    })
}

  render(){
    return (
      <div>
        <ul>
          {this.state.customer.map((i,k)=>{
            return (<li>i.nombre</li>);
          })}
        </ul>
      </div>
    );
  }

}