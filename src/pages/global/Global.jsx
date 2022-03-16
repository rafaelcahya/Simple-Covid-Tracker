import React, { Component } from 'react';

import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import Sidebar from '../component/sidebar/Sidebar';
import Navbar from '../component/navbar/Navbar';

export default class Global extends Component {
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
                <div className='flex h-screen overflow-hidden'>
                    <Sidebar/>
                    <div className='flex flex-1 flex-col gap-5 p-5 w-full overflow-y-scroll'>
                        <Navbar/>
                        <div className='grid grid-cols-2 justify-between gap-5'>
                            <div className='poppins_medium text-16 flex flex-col gap-5 bg-white text-secondary p-7 rounded-lg'>
                                <div>
                                    <p className='text-primary text-20'>Total global COVID-19</p>
                                    <p className='text-secondary text-13 poppins'>Sourced from <a href="https://www.worldometers.info/" className='hover:underline' target='_blank' rel="noreferrer">Worldometers</a> updated every 10 minutes</p>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Total cases</p>
                                        <p className='text-tertiary'>{results.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Today cases</p>
                                        <p className='text-tertiary'>{results.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Total deaths</p>
                                        <p className='text-tertiary'>{results.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Today deaths</p>
                                        <p className='text-tertiary'>{results.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Total recovered</p>
                                        <p className='text-tertiary'>{results.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Today recovered</p>
                                        <p className='text-tertiary'>{results.todayRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Total active</p>
                                        <p className='text-tertiary'>{results.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Today critical</p>
                                        <p className='text-tertiary'>{results.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Cases per one million</p>
                                        <p className='text-tertiary'>{results.casesPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Deaths per one million</p>
                                        <p className='text-tertiary'>{results.deathsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Tested per one million</p>
                                        <p className='text-tertiary'>{results.testsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Active per one million</p>
                                        <p className='text-tertiary'>{results.activePerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Recovered per one million</p>
                                        <p className='text-tertiary'>{results.recoveredPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                    <div className='flex items-center justify-between gap-20'>
                                        <p className=''>Critical per one million</p>
                                        <p className='text-tertiary'>{results.criticalPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center bg-white p-7 rounded-lg'>
                                <div className='flex flex-col items-center gap-10'>
                                    <Pie
                                        data={data}
                                    />
                                    <p className='text-secondary text-13 poppins'>Sourced from <a href="https://www.worldometers.info/" className='hover:underline' target='_blank' rel="noreferrer">Worldometers</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
