import React, {Component} from 'react';

export default class Customers extends Component{
  constructor(){
    super();
    this.state = {
      customer : []
    }
  }

componentDidMount(){
  getCustomerAsync()
    .then(data => this.setState({customer : data}) );
}

  render(){
    return (
      <div id="">
        <ul>
          {this.state.customer.map((i,k)=>{
            return (<li hey={k}>{i.Nombre}</li>);
          })}
        </ul>
      </div>
    );
  }

}

async function getCustomerAsync(){
  let response = await fetch('/api/customers');
  let data = await response.json()
  return data;
}  
