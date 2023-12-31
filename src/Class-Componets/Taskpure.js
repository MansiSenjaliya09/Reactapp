import React from "react";
export default class Taskpure extends React.Component {
    render() {
        console.log("task added");
        return (<div>
           {this.props.title}
        </div>);
     }
  
}
