import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props)

    this.drawChart = this.drawChart.bind(this);
  }

  componentWillMount() {
      google.charts.load('current', {'packages':['corechart']});

  }

  componentDidMount() {
      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(this.drawChart);    
  }

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
  drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Status');
    data.addColumn('number', 'Estimates');
    data.addRows([
      ['Not contacted', this.props.statuses.notContacted],
      ['Making decision', this.props.statuses.makingDecision],
      ['Customer declined', this.props.statuses.custDeclined],
      ['Deal closed', this.props.statuses.dealsClosed]
    ]);

    // Set chart options
    var options = {'title':'Customers by status',
                   'width':400,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  render() {
    return(
      <div className='outer-chart'>
        <div className='chart-center' id="chart_div"></div>
      </div>
    )
  }
}


export default Chart;

