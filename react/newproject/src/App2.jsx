import {Component} from "react";
import {App3} from "./App3";

export class App2 extends Component
{
    state={
       counter:0
    }


    add=()  =>{
        let a=this.state.counter
        a++

        this.setState({counter:a})
        console.log((this.state.counter))

    }
    render() {
        return(
            <>
                <App3/>
                <strong>Counter:</strong><span>{this.state.counter}</span>



            </>
        )
    }


}