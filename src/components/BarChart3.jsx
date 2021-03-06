import React from 'react';
import { Bar} from 'react-chartjs-2';

const BarChart3 = (props) => {
	const options = {
		responsive: true,
		maintainAspectRatio: props.aspectRatio===undefined?true:props.aspectRatio,
		title: {
			display: true,
			fontSize:props.TitleSize===undefined?12:props.TitleSize,
			fontColor:props.fontColor===undefined?"#666":props.fontColor,
			text: props.title
		},
		legend:{
			display:props.display===undefined?true:props.display,
			labels:{
				boxWidth:props.labelwidth === undefined ? 20 : props.labelwidth,
				fontSize:props.labelSize === undefined ? 12 : props.labelSize
			},
			position:props.labelposition===undefined?'right':props.labelposition
		},
		tooltips: {
			mode: 'index',
			intersect: true,
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';

          return label=label+ " " +tooltipItem.yLabel+"%"
        }
        }
		},
		hover: {
			mode: 'index',
			intersect: true,
			animationDuration: 1000
		},
		elements: {
			line: {
				fill: false
			}
		},
		scales: {
			xAxes: [
				{
					stacked: true,
					display: true,
					gridLines: {
						display: true,
					},
				}
			],
			yAxes: [
				{
					stacked: true,
					type: 'linear',
					display: true,
					position: 'left',
					id: 'y-axis-1',
					gridLines: {
						display: true,  
					}, 
					scaleLabel: {
						display: true,
						labelString:props.labelString===undefined?'':props.labelString,
						fontColor:props.fontColor===undefined?'#546372':props.fontColor,
						fontSize:props.fontSize===undefined?18:props.fontSize,
						fontFamily: "Montserrat",
					},
					ticks: {
						callback: function(label, index, labels) {
							return label+'%';
						},
					},
					labels: {
						show: true,
						position: 'right',
					},
				},
				{
					type: 'linear',
					display: false,
					position: 'right',
					id: 'y-axis-2',
					gridLines: {
						display: false
					},
					labels: {
						show: true
					}
				}
			]
		}
	};

	let data=props.data;
	return (
	<Bar 
		data={data}
		options={options}/>

	);
}


export default BarChart3;