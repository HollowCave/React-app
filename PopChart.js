import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: '#f4f4f4',
          foreColor: '#333'
        },
        xaxis: {
          categories: [
            'Vatican City',
            'Tuvalu',
            'Nauru',
            'Palau',
            'Monaco',
            'San Marino',
            'Liechtenstein',
            'Saint Kitts and Nevis',
            'Dominica',
            'Marshall Islands'
          ]
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        fill: {
          colors: ['#4717F6']
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Smallest Countries by Population',
          align: 'center',
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: '25px'
          }
        }
      },
      series: [
        {
          name: 'population',
          data: [
            1000,
            11052,
            11359,
            21431,
            30645,
            33537,
            38244,
            52715,
            73897,
            74539
          ]
        }
      ]
    };
  }

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>Change</button>
      </React.Fragment>
    );
  }
}

export default PopChart;
