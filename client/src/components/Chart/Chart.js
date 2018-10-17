import React, { Component } from "react";
import Highcharts from 'highcharts';

class Chart extends Component {
    constructor(props) {
        super(props);
    };

    

    componentDidMount() {
        this.highChartsRender();
    };

    highChartsRender() {
        
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Big 5 Personality Traits'
            },
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }    
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percent',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' %',
                valueDecimals: 2
            },
            plotOptions: {
                bar: {
                    
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Big 5',
                data:[
                    {name:'Openness', y:(this.props.personality[0].percentage*100), color: '#FFFF00'}, 
                    {name:'Conscientiousness', y:this.props.personality[1].percentage*100, color:'#FF0000'}, 
                    {name: 'Extraversion', y: this.props.personality[2].percentage*100, color:"#9400D3"}, 
                    {name:'Agreeableness', y:this.props.personality[3].percentage*100, color: "#6495ED"}, 
                    {name:'Neurotocism', y:this.props.personality[4].percentage*100, color: '#000000'}
                ]
            }]
        });
    }
    render() {
        return(
        <div id="container" styles="min-width: 310px; height: 400px; margin: 0 auto"></div>
        )
    }
};

export default Chart;