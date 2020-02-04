import React, { Component } from 'react';
// import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        series: []
    }


    componentDidMount() {
        // const series = ['Travelers', 'Umbrella Academy', 'More tv shows'];
        // setTimeout(() => {
        //     this.setState({ series: series })
        // }, 2000);

        fetch('http://api.tvmaze.com/search/shows?q=friends')
            // .then((res) => {console.log(res)})
            .then(res => res.json())
            // .then(json => console.log(json));
            .then(json => this.setState({ series: json }));
        // console.log(this.json);
    }


    render() {
        return (
            <div>
                <h3>Series Container</h3>
                <p>The length of the series array: {this.state.series.length}</p>
                


            </div>
        )
    }
}
export default Series;