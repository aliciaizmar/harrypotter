import React from 'react';
import Home from './components/Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      searchNameValue: ''
    };
    this.handlerSearchByName = this.handlerSearchByName.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        const newData = data.map((item, index) => {
          //console.log(index);
          return {
            ...item,
            id: index + 1
          };
        });

        this.setState({
          //data: data,
          data: newData,
          isLoading: false
        });
        //console.log('character:', data);
      });
  }
  handlerSearchByName(event) {
    const { value } = event.target;
    this.setState(prevState => {
      console.log('click?');
      return {
        //...prevState.searchNameValue,
        searchNameValue: value
      };
    });
  }

  render() {
    const { isLoading, data, searchNameValue } = this.state;
    //console.log('App: ', searchNameValue);
    return (
      <div className='App'>
        <Home
          isLoading={isLoading}
          data={data.filter(item => {
            return item.name
              .toLowerCase()
              .includes(searchNameValue.toLowerCase());
          })}
          filterByName={this.handlerSearchByName}
          searchNameValue={searchNameValue}
        />
      </div>
    );
  }
}

export default App;
