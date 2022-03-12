import React, { Component } from 'react';

import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

export default class GlobalComponent extends Component {
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
                                data: [ json.active, json.recovered, json.deaths]
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
                    <p className='text-primary text-20 poppins_medium'>Global statistics</p>
                    <div className='grid grid-cols-2 justify-between gap-7'>
                        <div className='grid grid-cols-2 justify-between gap-7 uppercase'>
                            <div className='flex flex-col gap-5 bg-white p-7 rounded-lg w-full'>
                                <p className='text-13 poppins_medium text-secondary'>Total cases</p>
                                <p className='text-25 poppins_semibold text-blue'>{results.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                            <div className='flex flex-col gap-5 bg-white p-7 rounded-lg w-full'>
                                <p className='text-13 poppins_medium text-secondary'>Total active</p>
                                <p className='text-25 poppins_semibold text-orange'>{results.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                            <div className='flex flex-col gap-5 bg-white p-7 rounded-lg w-full'>
                                <p className='text-13 poppins_medium text-secondary'>Total recovered</p>
                                <p className='text-25 poppins_semibold text-green'>{results.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                            <div className='flex flex-col gap-5  bg-white p-7 rounded-lg w-full'>
                                <p className='text-13 poppins_medium text-secondary'>Total deaths</p>
                                <p className='text-25 poppins_semibold text-red'>{results.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
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
