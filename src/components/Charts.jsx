import React from 'react'
import "../assets/css/Charts.scss"
import Chart from 'react-apexcharts';

const PieChart = () => {
  return (
    <section className='charts'>
      <div className="chart-wrapper">
        <div className="donut-chart inner">
          <Chart
            type="donut"
            width= {382.61}
            height= {322.61} 
            series={[160512222, 8400100]}
            
            options={{
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show:true,
                    }
                  }
                }
              }
            }}
          />
        </div>
      <div className="map-chart inner">2</div>
      <div className="info inner">3</div>
      </div>
    </section>
  )
}

export default PieChart