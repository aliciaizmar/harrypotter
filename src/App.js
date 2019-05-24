import React from 'react';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      searchName: ''
    };
  }
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        const newData = data.map((item, index) => {
          return {
            ...item,
            id: index + 1
          }
        })
        this.setState({
          //data: data,
          data: newData,
          isLoading: false
        });
        //console.log('character:', data);
      });
  }

  render() {
    const { isLoading, data } = this.state;
    //console.log('App: ', data)
    return (
      <div className='App'>
        <Home 
          isLoading={isLoading}
          data={data}
       />
      </div>
    );
  }
}

export default App;
