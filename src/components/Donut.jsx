import { useEffect } from 'react';
import {Doughnut} from 'react-chartjs-3';
import { Chart } from 'chart.js';
import "../assets/css/Charts.scss"




const BACKGROUND_COLOR = '#1B1F30'
const ACCEPTED_VOTES_COLOR = '#449352'
const REJECTED_VOTES_COLOR = '#E30325'
const LABEL_COLOR = 'rgba(255, 255, 255, 0.5)'


const totalVotes = 168912222
const acceptedVotes = 160512222
const rejectedVotes = 8400000

const electionLabel = {
    id: 'electionLabel',
    afterDraw(chart){
        const {ctx, chartArea: {top, bottom, left, right},  width, height} = chart
        ctx.save()
        chart.data.datasets.forEach((dataset, i) => {
            chart.getDatasetMeta(i).data.forEach((datapoint, index) =>{
                const {x, y} = datapoint.tooltipPosition()
                ctx.fillStyle = LABEL_COLOR
                ctx.fillRect(x, y, 2, 2)

                //draw line
                const halfWidth =  width/2
                const halfHeight =  height/2
      
                const xLine = x >= halfWidth ? x + 50 : x -50
                const yLine = y >= halfHeight ? y + 50 : y -50
                const xtraLine = x >= halfHeight ? 50 : -50
                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.lineTo(xLine, yLine)
                ctx.lineTo(xLine + xtraLine, yLine )
                ctx.strokeStyle = LABEL_COLOR
                ctx.stroke()

                // draw text
                const textWidth = ctx.measureText(chart.data.labels[index])?.width
                console.log(textWidth)
                ctx.font = '12px Arial'

                // control the position

                ctx.textBaseLine = 'middle'
        ctx.textAlign = 'center'

                ctx.fillText(chart.data.labels[index], xLine + xtraLine, yLine)
                ctx.font = '14px Arial'
                ctx.fillStyle = 'white'
                ctx.fillText(dataset.data[index].toLocaleString(), xLine  + xtraLine , yLine + 15)

            })
        });
    }
}

const textCenter = {
    id: 'textCenter',
    afterDraw(chart){
        const {ctx, data} = chart
        ctx.save()
        ctx.textAlign = 'center'
        ctx.textBaseLine = 'middle'
        ctx.font = 'bolder 12px sans-serif'
        ctx.strokeStyle = 'white'
        ctx.fillText('Total votes', chart.getDatasetMeta(0).data[0]._view.x, chart.getDatasetMeta(0).data[0]._view.y)
        ctx.fillText(totalVotes.toLocaleString(), chart.getDatasetMeta(0).data[0]._view.x, chart.getDatasetMeta(0).data[0]._view.y + 15)
    }
}

const circleMiddle = {
    id: 'circleMiddle',
    afterDraw(chart){
        const {ctx, width, height} = chart
        const centerX = chart.getDatasetMeta(0).data[0]._view.x
        const centerY = chart.getDatasetMeta(0).data[0]._view.y
        const datapoint = chart.getDatasetMeta(0).data[0].tooltipPosition()
        const radius = Math.sqrt( Math.pow((centerX-datapoint.x), 2) + Math.pow((centerY-datapoint.y), 2) ) /1.6
        console.log(datapoint, "radius")
        ctx.save()
        ctx.strokeStyle = 'white'
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

const Donut = () =>{
    useEffect(() =>{
        Chart.plugins.register(electionLabel);
        Chart.plugins.register(textCenter);
        Chart.plugins.register(circleMiddle);

    }, [])
    const data = {
        labels: [ 'ACCEPTED VOTES', 'REJECTED VOTES'],
        datasets: [
          {
            label: 'Presidential Election Votes',
            data: [acceptedVotes, rejectedVotes],
            backgroundColor: [  
            ACCEPTED_VOTES_COLOR, REJECTED_VOTES_COLOR,],
            borderColor: [ACCEPTED_VOTES_COLOR, REJECTED_VOTES_COLOR]
          }
        ]
      };
      const options = {
        maintainAspectRation: false,
        // aspectRatio: 1,
        legend: {
            display: false
        },
        layout: {
            padding: 40
        },
        plugins: {
            electionLabel: true,
            textCenter: true,
            circleMiddle: true
        }
      }
return <div className='donut-div' style={{backgroundColor: BACKGROUND_COLOR}}>
<Doughnut data={data} options ={options} width="500px" height="400px" />
</div> 
}

export default Donut