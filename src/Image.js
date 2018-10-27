import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import {Card} from 'antd';
class App extends Component {
  render() {
    return (
      <div>
			<Card
			hoverable

			cover={<img alt="example" style={{width:240, height: 200}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
			/>
	  </div>
    );
  }
}

export default App;
