import React from "react";

export default function Icons(props) {

    return (

       <i className={`fa fa-${props.type}`} style={{color: `${props.color}`, fontSize: props.size}} >    </i>

    );

}