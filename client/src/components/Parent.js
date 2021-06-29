import React from "react";
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";

// Need to move class to models if this will be saved to DB.


export default class Parent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const child = <Child/>
        const child2 = <Child2/>
        const child3 = <Child3/>
        const child4 = <Child4/>
        return (
            child,
            child2,
            child3,
            child4
        );
    }
}