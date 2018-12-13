import React ,{ Component} from 'react'
import $ from 'jquery';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { Progress } from 'reactstrap';





class AdminApproval extends React.Component {


  state = {
    info:[{
        creatorName: 'mohannad',
        eventName: 'happybirthday',
        cost: 20,
        des: 'amman',
        url: "https://seda.college/wp-content/uploads/party.jpg",
        availableSeats: 25,
        date: 15/9/1994,
        eventLocation: 'amman',
        attending: ['asd','asd'],
        approve: 0


    },
    ]
  }


handleChange = (event)=>{
    this.setState({
      [event.target.id]:event.target.value

  })
}

handleSubmit = (event)=>{

   var obj = {
    userName: this.state.name,
    email: this.state.email,
    feedback: this.state.feedback
  }

//post requst using ajax
$.ajax({
  type: "POST",
  url: '/adminapproval',
  data: {
      obj
  },
  success: function (data) {
      console.log("ajax data", data)
  },
  error: (err) => {

        console.log('err', err);
      }

});

event.preventDefault()

};

   render(){

       return(
         <div>
      <div className="text-center">0%</div>
      <Progress />
      <div className="text-center">25%</div>
      <Progress value="25" />
      <div className="text-center">50%</div>
      <Progress value={50} />
      <div className="text-center">75%</div>
      <Progress value={75} />
      <div className="text-center">85%</div>
      <Progress value={85} />
      <div className="text-center">Multiple bars</div>
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="100" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>
    </div>
       )


   }
}

export default AdminApproval
