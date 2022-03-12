import React, { Component } from 'react';

export default class Navbar extends Component {
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
                <div className='flex justify-between items-center gap-5'>
                    <p className='text-20 poppins_medium text-primary'>Coronavirus Disease Statistics</p>
                    <div className='flex gap-7 text-13 poppins_medium uppercase'>
                        <span className='flex items-center gap-10 bg-white px-7 py-3 rounded-lg'>
                            <p className='text-secondary'>Affected countries</p>
                            <p className='text-tertiary'>{results.affectedCountries.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                        </span>
                        <span className='flex items-center gap-10 bg-white px-7 py-3 rounded-lg'>
                            <p className='text-secondary'>Total population</p>
                            <p className='text-tertiary'>{results.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}
