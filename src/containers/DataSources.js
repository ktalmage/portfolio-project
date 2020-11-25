import React, { Component } from 'react'

class DataSources extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          astros : [],
        };
      }

      componentDidMount(){
          fetch('http://api.open-notify.org/astros.json')
          .then(resp => console.log(resp.json()))
          .then(data => this.setState({data : data}))
      }

    render() {

        const { astronauts } = this.state;

        return (
            <div>
                <ul>
                    <li>{astronauts}</li>
                </ul>
            </div>
        )
    }
}

export default DataSources


