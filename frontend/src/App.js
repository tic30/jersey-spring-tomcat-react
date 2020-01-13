import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse : ''
        };
    }

    componentDidMount() {
        const mySelf = this;

        fetch('http://localhost:8080/api')
            .then((resp) => resp.text()) // Transform the data into json
            .then(function(data) {
                mySelf.setState({
                    apiResponse: data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { apiResponse } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        API response: {apiResponse}
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
