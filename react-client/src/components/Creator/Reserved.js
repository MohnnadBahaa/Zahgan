import React from 'react'
import $ from 'jquery';
import EventClassNew from '../Home/EventClassNew'
import GoogleMapReact from 'google-map-react';

import Eventcreat from './Eventcreat'
import Reservedcreat from './Reservedcreat'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

class Reserved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

  }


  update=(id)=>{
    var x=this.state.items
    for(var i=0;i<x.length;i++){
        if(x[i]._id==id){
          x.splice(i,1)
        }
    }
    this.setState({
      items:x
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/eventpendding',
      type: "GET",
      success: (data) => {

        console.log('userData', data)

        this.setState({items: data})

      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  acceptEvent = (id)=>{
    this.update(id)
    var obj={
      id:id,
      action:1
    }
    $.ajax({
        type: "POST",
        url: '/eventaccept',
        data: {
            obj
        },
        success: function (data) {
            console.log("saved", data)
        }
    });

    console.log(id);
  }

  rejectEvent = (id)=>{
    this.update(id)
    var obj={
      id:id,
      action:2
    }
    $.ajax({
        type: "POST",
        url: '/eventaccept',
        data: {
            obj
        },
        success: function (data) {
            console.log("saved2", data)
        }
    });
    console.log(id);
  }

  render() {

    return (<div>

      <div>

        {
          this.state.items.map((item) => {
            return (<div >
              <Reservedcreat update={this.update} item={item} acceptEvent={this.acceptEvent} rejectEvent={this.rejectEvent}/>
            </div>)

          })

        }
      </div>
    </div>);
  }
}
export default Reserved
