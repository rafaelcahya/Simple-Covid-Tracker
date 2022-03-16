import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import moment from 'moment'

import Navbar from '../component/navbar/Navbar';
import Sidebar from '../component/sidebar/Sidebar';

export default class Vaccine extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            result: [],
            DataisLoaded: false,
        };
    }
    componentDidMount() {
        fetch(
            "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30&fullData=true")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    results: json,
                    DataisLoaded: true,
                    data: {
                        labels: [json[0].date, json[1].date, json[2].date, json[3].date, json[4].date, json[5].date, json[6].date, json[7].date, json[8].date, json[9].date, json[10].date, json[11].date, json[12].date, json[13].date, json[14].date, json[15].date, json[16].date, json[17].date, json[18].date, json[19].date, json[20].date, json[21].date, json[22].date, json[23].date, json[24].date, json[25].date, json[26].date, json[27].date, json[28].date, json[29].date],
                        
                        datasets: [
                            {
                                label: 'Daily',
                                fill: true,
                                borderColor: '#75FF9C',
                                backgroundColor : '#75ff9c40',
                                data: [ json[0].daily, json[1].daily, json[2].daily, json[3].daily, json[4].daily, json[5].daily, json[6].daily, json[7].daily, json[8].daily, json[9].daily, json[10].daily, json[11].daily, json[12].daily, json[13].daily, json[14].daily, json[15].daily, json[16].daily, json[17].daily, json[18].daily, json[19].daily, json[20].daily, json[21].daily, json[22].daily, json[23].daily, json[24].daily, json[25].daily, json[26].daily, json[27].daily, json[28].daily, json[29].daily ]
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
                        <p>{results.date}</p>
                        <div className='text-16 flex justify-center gap-5 text-center bg-white text-secondary p-7 rounded-lg'>
                            <div className='flex flex-col gap-10 w-1/2'>
                                <Line data={data}/>
                                <p className='text-secondary text-13'>Sourced from <a href="https://covid.ourworldindata.org/" className='hover:underline' target='_blank' rel="noreferrer">https://covid.ourworldindata.org/</a></p>
                            </div>
                        </div>
                        <div className='bg-white flex flex-col gap-10 p-7 rounded-lg tracking-wide'>
                            <div>
                                <p className='text-primary text-20 poppins_medium'>Table of total global of COVID-19 vaccine doses administered</p>
                                <p className='text-secondary text-13 poppins'>Sourced from <a href="https://covid.ourworldindata.org/" className='hover:underline' target='_blank' rel="noreferrer">https://covid.ourworldindata.org/</a></p>
                            </div>
                            <div className='inline-block min-w-full shadow rounded-lg'>
                                <table className='min-w-full relative w-full'>
                                    <thead>
                                        <tr className='sticky -top-10 text-tertiary bg-secondary text-13 poppins_medium uppercase border-b-2 border-gray-200'>
                                            <td className='px-5 py-3'>Date</td>
                                            <td>Daily</td>
                                            <td>Daily per million</td>
                                            <td>Total</td>
                                            <td>Total per hundred</td>
                                        </tr>
                                    </thead>
                                    {
                                        results?.sort((a,b) => new Date(a.date) > new Date(b.date) ? -1 : 1).map((index, i) => (
                                            <tbody>
                                                <tr key={index} className='text-secondary poppins_medium hover:bg-slate-100 hover:scale-[1.03] duration-300'>
                                                    <td className='px-5 py-3'>{moment(results[i].date).format('ll')}</td>
                                                    <td>{results[i].daily.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].dailyPerMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].totalPerHundred.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
