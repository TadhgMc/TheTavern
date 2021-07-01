import React from "react";
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import Child5 from "./Child5";
import Child6 from "./Child6";
import Child7 from "./Child7";
import Child8 from "./Child8";
import Child9 from "./Child9";
import Child10 from "./Child10";
import Child11 from "./Child11";


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
        const child8 = <Child8/>
        const child9 = <Child9/>
        const child10 = <Child10/>
        const child11 = <Child11/>

        return (
            child,
            child2,
            child3,
            child4,
            child5,
            child6,
            child7,
            child8,
            child9,
            child10,
            child11
        );
    }
}