import React, { Component } from 'react';

import Chart from '../../components/Chart/Chart';

import { BitcoinService } from '../../services/BitcoinService'
import './StatisticPage.css'

class StatisticPage extends Component {

  state = {
    chartsData: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const chartsData = await BitcoinService.getStatisticsData()
    this.setState({ chartsData, loading: false })
  }

  renderChart(chart, color) {
    const { title, data, description } = chart

    return (

      <Chart title={title}
        data={data}
        description={description}
        color={color} />

    )
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>

    const colors = ['blue', 'green']
    return (
      <div className="statistic-page">
        <ul>
          {
            this.state.chartsData.map((chart, idx) =>
              <li className="statistic-chart" key={idx}>{this.renderChart(chart, colors[idx])}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default StatisticPage;
