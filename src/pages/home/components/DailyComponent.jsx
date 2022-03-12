import React, { Component } from 'react';

import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

export default class DailyComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            result: [],
            DataisLoaded: false,
        };
    }
    componentDidMount() {
        fetch(
            "https://disease.sh/v3/covid-19/all")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    results: json,
                    DataisLoaded: true,
                    data: {
                        labels: ['Total active', 'Total recovered', 'Total deaths'],
                        datasets: [
                            {
                                label: 'Rainfall',
                                backgroundColor: ['#FAAC74', '#75FF9C', '#FF8383'],
                                borderColor: '#fff',
                                borderWidth: 2.5,
                                data: [ json.critical, json.todayRecovered, json.todayDeaths ]
                            }
                        ]
                    }
                });
            })
    }
    render() {
        const { DataisLoaded, results, data } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
            <>
                <div className='flex flex-col gap-7'>
                    <p className='text-primary text-20 poppins_medium'>Daily statistics</p>
                    <div className='grid grid-cols-2 justify-between gap-7'>
                        <div className='grid grid-cols-2 justify-between gap-7 uppercase'>
                            <div className='flex flex-col gap-5 bg-white p-7 rounded-lg w-full'>
                                <p className='text-13 poppins_medium text-secondary'>Today cases</p>
                                <p className='text-25 poppins_semibold text-blue'>{results.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                            <div className='flex flex-col gap-5 bg-white p-7 rounded-lg w-full'>
                                <p className='text-13 poppins_medium text-secondary'>Critical</p>
                                <p className='text-25 poppins_semibold text-orange'>{results.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                            <div className='flex flex-col gap-5 bg-white p-7 rounded-lg w-full'>
                                <p className='text-13 poppins_medium text-secondary'>Today recovered</p>
                                <p className='text-25 poppins_semibold text-green'>{results.todayRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                            <div className='flex flex-col gap-5  bg-white p-7 rounded-lg w-full'>
                                <p className='text-13 poppins_medium text-secondary'>Today deaths</p>
                                <p className='text-25 poppins_semibold text-red'>{results.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                        </div>
                        <div className='flex justify-center text-center p-7 bg-white rounded-lg'>
                            <div>
                                <Pie
                                    data={data}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
