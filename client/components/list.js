import React {Components} from 'react';

export default class customers extends Components{
  constructor(){
    this.state = {
      customer : []
    }
  }

  render(){
    return (
      <div>
        <ul>
        {this.state.customer.map((i,k)=>{
          return <li>i.nombre</li>;
        })}
        </ul>
      </div>
    );
  }

}