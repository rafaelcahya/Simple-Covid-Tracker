import React, { Component } from 'react';
import Footer from './Footer';
import Vaccines from './Vaccines';

export default class Global extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            result: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
            "https://disease.sh/v3/covid-19/all")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    results: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, results } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
            <>
                <div className='flex flex-col min-h-screen p-10 font_opensans tracking-wide bg-slate-100'>
                    <div className='flex flex-col flex-grow gap-10'>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                            <p className='text-xl font_opensans_semibold'>Coronavirus Disease Statistics</p>
                            <div className='flex gap-10 text-sm'>
                                <span className='flex items-center gap-5 bg-white px-4 py-2 rounded-lg'>
                                    <p>Affected countries</p>
                                    <p>{results.affectedCountries.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </span>
                                <span className='flex items-center gap-5 bg-white px-4 py-2 rounded-lg'>
                                    <p>Total population</p>
                                    <p>{results.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </span>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 md:gap-10'>
                            <div className='flex flex-col gap-8 bg-white p-5 rounded-lg w-full'>
                                <p className='text-sm text-slate-400 font_opensans'>Total active</p>
                                <p className='text-3xl text-slate-600 font_opensans_semibold'>{results.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                            <div className='flex flex-col gap-8 bg-white p-5 rounded-lg w-full'>
                                <p className='text-sm text-slate-400 font_opensans'>Total tested</p>
                                <p className='text-3xl text-slate-600 font_opensans_semibold'>{results.tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                            <div className='flex flex-col gap-8 bg-white p-5 rounded-lg w-full'>
                                <Vaccines/>
                            </div>
                            <div className='flex flex-col gap-8  bg-white p-5 rounded-lg w-full'>
                                <p className='text-sm text-slate-400 font_opensans'>Total criticals</p>
                                <p className='text-3xl text-slate-600 font_opensans_semibold'>{results.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 md:gap-10'>
                            <div className='flex flex-col gap-8 bg-white p-5 rounded-lg w-full'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-slate-400 font_opensans'>Total cases</p>
                                    <p className='bg-orange-100 text-orange-400 font_opensans_semibold px-2 py-1 rounded-md'>+{((results.todayCases/results.cases)*100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} %</p>
                                </div>
                                <div>
                                    <p className='text-orange-400'>+{results.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    <p className='text-3xl text-orange-400 font_opensans_semibold'>{results.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-8 bg-white p-5 rounded-lg w-full'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-slate-400 font_opensans'>Total deaths</p>
                                    <p className='bg-red-100 text-red-500 font_opensans_semibold px-2 py-1 rounded-md'>+{((results.todayDeaths/results.deaths)*100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} %</p>
                                </div>
                                <div>
                                    <p className='text-red-500'>+{results.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    <p className='text-3xl text-red-500 font_opensans_semibold'>{results.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-8 bg-white p-5 rounded-lg w-full'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-slate-400 font_opensans'>Total recovered</p>
                                    <p className='bg-green-100 text-green-500 font_opensans_semibold px-2 py-1 rounded-md'>+{((results.todayRecovered/results.recovered)*100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} %</p>
                                </div>
                                <div className='text-green-500'>
                                    <p>+{results.todayRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    <p className='text-3xl font_opensans_semibold'>{results.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center pt-10'>
                        <Footer/>
                    </div>
                </div>
            </>
        )
    }
}
