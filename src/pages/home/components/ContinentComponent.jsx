import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                
                console.log({results: json})
            })
    }
    render() {
        const { DataisLoaded, results } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
            <>
                <div className='bg-white flex flex-col gap-7 p-7 rounded-lg tracking-wide w-1/2'>
                    <p className='text-primary text-20 poppins_medium'>Coronavirus statistics for all continents</p>
                    <div className='inline-block min-w-full shadow rounded-lg'>
                        <table className='min-w-full'>
                            <thead>
                                <tr className='text-tertiary bg-secondary text-13 poppins_medium uppercase border-b-2 border-gray-200'>
                                    <td className='px-5 py-3'>Continent</td>
                                    <td>Population</td>
                                    <td>Cases</td>
                                </tr>
                            </thead>
                            {
                                results?.map((index, i) => i < 10 && (
                                    <tbody>
                                        <tr className='text-secondary poppins_medium hover:bg-slate-100 hover:scale-[1.03] duration-300'>
                                            <td className='px-5 py-4'>{results[i].continent}</td>
                                            <td>{results[i].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                            <td>{results[i].cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                    </div>
                    <Link to='/continent' className='text-center text-secondary underline'>Show more data</Link>
                </div>
            </>
        )
    }
}
