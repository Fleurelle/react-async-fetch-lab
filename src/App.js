// create your App component here
import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleNames: []
        }
    }

    componentDidMount() {
        let baseURL = "http://api.open-notify.org/astros.json"
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peopleNames:data.people
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.peopleNames.name}
            </div>

        )
    }
}

export default App;