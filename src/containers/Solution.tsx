import React, { Component } from 'react';
import {Input} from '../components/Input';
import { formatTime } from '../utils/timeConverter';

interface State {
  result: string;
} 
export default class Solution extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      result: "00:00:000"
    }
  }
  onInputChange = (value: string) => {
    this.setState({
      result: formatTime(parseInt(value))
    })
  }
  render = () => {
    return (
      <div>
        <p>Time converter</p>
        <Input onChange={this.onInputChange} />
        <p>
          {this.state.result}
        </p>
      </div>
    )
  }
}