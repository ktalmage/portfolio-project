import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
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
                <Table striped bordered hover size="sm" align = 'center'>
                <thead>
                     <tr>
                     <th>Name</th>
                     <th>Craft</th>
                    </tr>
                </thead>
                {astros.map(person => 
                    <tbody>
                     <tr>
                     <td>{person.name}</td>
                     <td>{person.craft}</td>
                     </tr>
                   </tbody>
                    
                    
                    
                    
                    
)}
               
                
            </Table>
                
                
                
               
            </div>
        )
    }
}

export default DataSources


