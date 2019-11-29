import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios';

const config = require('../../../config');

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount = () => {
    const postId = this.props.match.params.view;
    axios.get(config.serverUrl + '/api/posts/' + postId)
    .then((response) => {
      console.log(response);
      this.setState({
        data: response.data,
      });
    })
  }

  onChange(event) {  
  }

  render() {

    return (
      <div className="one-selected-summary">
        <div className="one-selected-date-emo-wrapper flex">
          <p className="one-selected-date flex"
            // type="date"           
          >
          {this.state.data.createdDt}
        </p>
        </div>
        <p className="one-selected-textarea"> 
          {this.state.data.summary}
        </p>      
        <div className="one-selected-btnContainer flex">
          <Link to="/post">
            <Button type="primary" className="btn btn-submit">
              목록으로 
            </Button> 
          </Link>                    
        </div>
      </div>
    )
  }
}
export default Summary
          