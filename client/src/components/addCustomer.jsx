import React,{ Component  } from "react";

export default class AddCustomer extends Component{
    render(){
        return (
        <div>
            <form action="/api/customers" method="POST">
                <label htmlFor="Nombre">Nombre Cliente</label>
                <input type="text" name="Nombre" id=""/>
                <label htmlFor="Apellido">Apellido</label>
                <input type="text" name="Apellido" id=""/>
                <label htmlFor="Edad">Edad</label>
                <input type="number" name="Edad" id=""/>
                <label htmlFor="Mail">Mail</label>
                <input type="email" name="Mail" id=""/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>);
    }
}