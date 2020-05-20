import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';
import './Graf.css';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};


export default class GrafP extends Component {
    render() {
        return (
            <div className="polar">
              <h3>Polar Example</h3>
                 <Polar data={data} />  
            </div>
        )
    }
}
