import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ChildNodes from './ChildNodes'


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
     checked: [0],
   };

   handleToggle = value => () => {
     const { checked } = this.state;
     const currentIndex = checked.indexOf(value);
     const newChecked = [...checked];

     if (currentIndex === -1) {
       newChecked.push(value);
     } else {
       newChecked.splice(currentIndex, 1);
     }

     this.setState({
       checked: newChecked,
     });
   };



  render() {

    let stations = [
      {name:'kristen', _id:'000', leaves:[1,2,3]},
      {name:'jacob', _id:'001', leaves:[1,2,3]}
    ];

    if(this.props.allnodes){
      stations = this.props.allnodes
    }

    console.log(this.props)

    return (
      <div>
        {stations.map( (station, index) => (
          <div className="station" key={station._id}>
          <List component="nav">
            <ListItem dense button onClick={this.handleToggle(station)}>
              <ListItemText inset>
                <p style={{fontSize: "small", color: "#2a3eb1"}}>
                {station.name} </p>
                </ListItemText>
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.checked.indexOf(station) !== -1} timeout="auto" unmountOnExit>
              <ChildNodes children={station.leaves}/>
            </Collapse>
          </List>
          </div>
        ))}
      </div>

    );
  }
}


function mapStateToProps(state) {
  return {auth: state.auth, allnodes: state.allnodes, usernodes:state.usernodes}
}



export default connect(mapStateToProps, actions)(NestedList);

//export default withStyles(styles)(NestedList);
