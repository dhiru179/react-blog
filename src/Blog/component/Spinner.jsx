import React, { Component } from 'react';
import spinner from './loading.svg'

export default class Spinner extends Component {
  render() {
    return (
      <div className='my-3'>
        <img src={spinner} alt="loading..." />
      </div>
    )
  }
}
