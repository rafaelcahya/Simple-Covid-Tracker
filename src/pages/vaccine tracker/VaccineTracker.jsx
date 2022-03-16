import React, { Component } from 'react'
import Navbar from '../component/navbar/Navbar'
import Sidebar from '../component/sidebar/Sidebar'

export default class VaccineTracker extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            result: [],
            DataisLoaded: false,
        };
    }
    componentDidMount() {
        fetch(
            "https://disease.sh/v3/covid-19/vaccine")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    results: json,
                    DataisLoaded: true,
                });
                console.log({results: json})
            })
    }
    render() {
        const { DataisLoaded, results } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
            <>
                <div className='flex h-screen overflow-hidden'>
                    <Sidebar/>
                    <div className='flex flex-1 flex-col gap-7 px-10 py-10 w-full overflow-y-scroll'>
                        <Navbar/>
                        <div className='bg-white flex flex-col gap-7 p-7 rounded-lg tracking-wide'>
                            <div className='flex flex-col gap-3'>
                                <p className='poppins_medium text-primary text-20'>Vaccine candidates in development</p>
                                <p className='text-secondary text-13 poppins w-3/4'>The worldwide endeavor to create a safe and effective COVID-19 vaccine is bearing fruit. Dozens of vaccines now have been authorized or approved around the globe; many more remain in development. Sourced from <a href={results.source} className='hover:underline' target='_blank' rel="noreferrer">RAPS</a> updated every 24 hours</p>
                            </div>
                            <div className='inline-block min-w-full shadow rounded-lg'>
                                <table className='min-w-full relative w-full'>
                                    <thead>
                                        <tr className='sticky -top-10 text-tertiary bg-secondary text-13 poppins_medium uppercase border-b-2 border-gray-200'>
                                            <td className='px-5 py-3'>Candidate</td>
                                            <td className='px-5 py-3'>Mechanism</td>
                                            <td className='px-5 py-3'>Sponsor</td>
                                            <td className='px-5 py-3'>Trial phase</td>
                                            <td className='px-5 py-3'>Institutions</td>
                                        </tr>
                                    </thead>
                                    {
                                        results.data.map((index, i) => (
                                            <tbody>
                                                <tr key={index} className='text-secondary poppins_medium hover:bg-slate-100 hover:scale-[1.03] duration-300'>
                                                    {
                                                        results.data[i].candidate !== 'No name announced' ? <td className='px-5 py-3'>{results.data[i].candidate}</td> : <td className='px-5 py-3'>Unnamed vaccine candidate</td>
                                                    }
                                                    <td className='px-5 py-3'>{results.data[i].mechanism}</td>
                                                    <td className='px-5 py-3'>{results.data[i].sponsors}</td>
                                                    <td className='px-5 py-3'>{results.data[i].trialPhase}</td>
                                                    <td className='px-5 py-3'>{results.data[i].institutions}</td>
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
