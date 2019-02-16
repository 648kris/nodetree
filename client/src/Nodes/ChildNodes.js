import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Leaves(props) {
  console.log(props)

  let children = props.children.split(",")

  return (
    <div style={{marginLeft: "80px", color:"#5393ff"}}>
    {children.map( (value, index) => (
      <div key={index}>{value}</div>
    ))}
    </div>
  );
}

export default Leaves;
