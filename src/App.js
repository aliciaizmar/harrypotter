import React from 'react';
import Home from './components/Home';
import CardDetail from './components/CardDetail';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

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
          //console.log(item.name, item.alive);
          return {
            ...item,
            id: index
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
      return {
        //...prevState.searchNameValue,
        searchNameValue: value
      };
    });
  }

  // filterInput() {    
  //   const myInputData = data.filter(item => {
  //       return item.name
  //         .toLowerCase()
  //         .includes(searchNameValue.toLowerCase());
  //     })
  //     return myInputData;
  // }
 
  render() {
    const { isLoading, data, searchNameValue } = this.state;
    return (
      <div className='App'>
        {/* el switch se oculta, no se muestra en el html, por eso puedo meter aquí el CardDetail */}
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
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
            )}
          />
          <Route
            path='/detail/:id'
            render={routerProps => (
              <CardDetail 
                match={routerProps.match} 
                data={data}
                isLoading={isLoading}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
