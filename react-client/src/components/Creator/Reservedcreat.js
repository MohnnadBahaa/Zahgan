import React from 'react'
import Modal from '../Modal/Modal'
import $ from 'jquery';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import {Table} from 'reactstrap';

class Reservedcreat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }

  }

  handleSubmit(event, item) {
    event.preventDefault();

  }

  render() {

    return (<div>
      <Card >
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src={this.props.item.url} alt="Card image cap"/>
        <CardBody>
          <CardText>
            <Table size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    Evant Name</th>
                  <th>
                    Creator Evants</th>
                  <th>
                    Available Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.props.item.eventName}</td>
                  <td>{this.props.item.creatorName}</td>
                  <td>{this.props.item.availableSeats}</td>
                </tr>
              </tbody>
            </Table>
          </CardText>
          <Button color="primary" onClick={()=>{
              this.props.acceptEvent(this.props.item._id)
            }}>
            <i class="far fa-thumbs-up"></i>
          </Button>
          <Button color="danger" onClick={()=>{
              this.props.rejectEvent(this.props.item._id);
            }}>
            <i class="far fa-thumbs-down"></i>
          </Button>
        </CardBody>
      </Card>
    </div>)

  }
}
export default Reservedcreat
