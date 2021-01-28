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
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        const newData = data.map((item, index) => {
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

  render() {
    const { isLoading, data, searchNameValue } = this.state;
    return (
      <div className='App'>
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
