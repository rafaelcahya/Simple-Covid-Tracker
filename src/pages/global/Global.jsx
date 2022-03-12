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
                <div  className='flex h-screen overflow-hidden'>
                    <Sidebar/>
                    <div className='flex flex-1 flex-col gap-7 px-10 py-10 w-full overflow-y-scroll'>
                        <Navbar/>
                        <p className='text-primary text-20 poppins_medium'>Global statistics</p>
                        <div className='grid grid-cols-2 justify-between gap-7'>
                            <div className='poppins_medium text-16 flex flex-col gap-3 bg-white text-secondary p-7'>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Total cases</p>
                                    <p>{results.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Today cases</p>
                                    <p>{results.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Total deaths</p>
                                    <p>{results.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Today deaths</p>
                                    <p>{results.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Total recovered</p>
                                    <p>{results.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Today recovered</p>
                                    <p>{results.todayRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Total active</p>
                                    <p>{results.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Today critical</p>
                                    <p>{results.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Cases per one million</p>
                                    <p>{results.casesPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Deaths per one million</p>
                                    <p>{results.deathsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Tested per one million</p>
                                    <p>{results.testsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Active per one million</p>
                                    <p>{results.activePerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Recovered per one million</p>
                                    <p>{results.recoveredPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className='flex items-center justify-between gap-20'>
                                    <p className=''>Critical per one million</p>
                                    <p>{results.criticalPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                            </div>
                            <div className='flex justify-center text-center bg-white p-7 rounded-lg'>
                                <div>
                                    <Pie
                                        data={data}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
