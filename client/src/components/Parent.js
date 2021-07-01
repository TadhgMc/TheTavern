import React from "react";
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import Child5 from "./Child5";
import Child6 from "./Child6";
import Child7 from "./Child7";

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
        const child5 = <Child5/>
        const child6 = <Child6/>
        const child7 = <Child7/>

        return (
            child,
            child2,
            child3,
            child4,
            child5,
            child6,
            child7
        );
    }
}