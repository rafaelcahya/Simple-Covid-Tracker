import React, { Component } from 'react'
import Navbar from '../component/navbar/Navbar'
import Sidebar from '../component/sidebar/Sidebar'

export default class Continent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            result: [],
            DataisLoaded: false,
        };
    }
    componentDidMount() {
        fetch(
            "https://disease.sh/v3/covid-19/continents")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    results: json,
                    DataisLoaded: true,
                });
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
                            <div>
                                <p className='poppins_medium text-primary text-20'>Coronavirus statistics for all continent</p>
                                <p className='text-secondary text-13 poppins'>Sourced from <a href="https://www.worldometers.info/" className='hover:underline' target='_blank' rel="noreferrer">Worldometers</a> updated every 10 minutes</p>
                            </div>
                            <div className='inline-block min-w-full shadow rounded-lg'>
                                <table className='min-w-full relative w-full'>
                                    <thead>
                                        <tr className='sticky -top-10 text-tertiary bg-secondary text-13 poppins_medium uppercase border-b-2 border-gray-200'>
                                            <td className='px-5 py-3'>Continent</td>
                                            <td>Population</td>
                                            <td>Cases</td>
                                            <td>Deaths</td>
                                            <td>Recovered</td>
                                            <td>Active</td>
                                            <td>Critical</td>
                                            <td>Tests</td>
                                        </tr>
                                    </thead>
                                    {
                                        results?.map((index, i) => (
                                            <tbody key={index}>
                                                <tr className='text-secondary poppins_medium hover:bg-slate-100 hover:scale-[1.03] duration-300'>
                                                    <td className='px-5 py-4'>{results[i].continent}</td>
                                                    <td>{results[i].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                                    <td>{results[i].tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
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
