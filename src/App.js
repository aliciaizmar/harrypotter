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
      searchNameValue: '',
      houses: [],
      gender: ''
    };
    this.handlerSearchByName = this.handlerSearchByName.bind(this);
    this.handlerSearchByHouse = this.handlerSearchByHouse.bind(this);
    this.handlerSearchByGender = this.handlerSearchByGender.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.filterInput = this.filterInput.bind(this);
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
            id: index
          };
        });

        this.setState(prevState => {
          return {
            //data: data,
            ...prevState,
            data: newData,
            isLoading: false
          };
        });
      });
  }

  handlerSearchByName(event) {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        ...prevState,
        searchNameValue: value
      };
    });
  }

  handlerSearchByHouse(event) {
    const key = event.target.name;
    this.setState(prevState => {
      return {
        ...prevState,
        houses: prevState.houses.find(house => house === key)
          ? prevState.houses.filter(house => house !== key)
          : prevState.houses.concat(key)
      };
    });
  }

  handlerSearchByGender(event) {
    const { value } = event.target;
    console.log('clisck');
    this.setState(prevState => {
      console.log('clisck');
      return {
        ...prevState,
        gender: value
      };
    });
  }

  filterInput() {
    const { data, houses, searchNameValue, gender } = this.state;
    console.log('app:', gender);
    return data
      .filter(item => {
        return item.name.toLowerCase().includes(searchNameValue.toLowerCase());
      })
      .filter(item => {
        // if (!houses.length) {
        //   return true;
        // } else {
        //   return houses.includes(item.house);
        // }
        return !houses.length ? houses : houses.includes(item.house);
      })
      .filter(item => {
        console.log('input', item.gender)
        return (
          item.gender.includes(gender)
        )
      })
      ;
  }

  resetFilter() {
    this.setState({
      searchNameValue: ''
    });
  }

  render() {
    const { isLoading, data, searchNameValue, houses, gender } = this.state;
    console.log('app:', gender);
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
                data={this.filterInput()}
                filterByName={this.handlerSearchByName}
                filterByHouse={this.handlerSearchByHouse}
                filterByGender={this.handlerSearchByGender}
                searchNameValue={searchNameValue}
                houses={houses}
                gender={gender}
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
                resetFilter={this.resetFilter}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
