import React from 'react';

function Leaves(props) {

  let children = props.children.split(",")

  return (
    <div style={{marginLeft: "80px", color:"#5393ff"}}>
    {children.map( (value, index) => (
      <div key={index}>
        {value}
      </div>
    ))}
    </div>
  );
}

export default Leaves;
