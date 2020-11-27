import React, { Component } from 'react'

class DataSources extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          astros : [],
        };
      }

      componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                astros: data.people
            })
        })
    }

    render() {

        const { astros } = this.state

        return (
            <div>
                <br></br>
                <b>These people are at the International Space Station Right Now: </b>
                
                {astros.map(person => <li>{person.name} - {person.craft}</li>)}
                
                
               
            </div>
        )
    }
}

export default DataSources


