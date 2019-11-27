import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import axios from 'axios';

class Emotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affectivity : 0
    }
  }

  btnClicked = (emotion) => {
    this.setState({
      affectivity: emotion
    })
  }

  render() {
    return(
      <div className="App-Content-Emotion">
        <p>오늘 기분은??</p>
        <div className='iconList' style={{ padding: 5, background: '#fff', minHeight: 20}}>
{/* 선택한 이모티콘에 value를 넣고, 저장되도록 설정해야 함 */}
          <Button onClick={this.btnClicked(1)}>
            <Icon type="like" />
          </Button>
          <Button onClick={this.btnClicked(2)}>
            <Icon type="smile" />
          </Button>         
          <Button onClick={this.btnClicked(3)}>
           <Icon type="meh" />
          </Button>
          <Button onClick={this.btnClicked(4)}>
            <Icon type="frown" />
          </Button>         
          <Button onClick={this.btnClicked(5)}>
            <Icon type="dislike" />
          </Button>        
        </div>
      </div>
    )
  }
}

export default Emotion