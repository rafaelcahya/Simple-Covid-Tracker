import React, { Component } from 'react';

export default class Vaccines extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            result: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
            "https://disease.sh/v3/covid-19/vaccine/coverage?fullData=true")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    results: json,
                    DataisLoaded: true
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
                <p className='text-sm text-slate-400 font_opensans'>Total vaccination</p>
                <p className='text-3xl text-slate-600 font_opensans_semibold'>{results[29].total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
            </>
        )
    }
}
