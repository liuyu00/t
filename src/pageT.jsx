import React from 'react';
import Mui from 'material-ui';
var Card = Mui.Card;
var CardText = Mui.CardText;
var CardTitle = Mui.CardTitle;

export default class pageT extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cData: {}
    };
  }

  componentWillUpdate(){
    console.log(this.props.cData);
  }

  render(){
    //console.log(this.state.cData);
    return (
      <div>
        {JSON.stringify(this.state.cData)}
      </div>
    );
  }
}
