import React, { Fragment } from 'react';
import List from './List';
import Filters from './Filters';

class Home extends React.Component {
  render() {
    const { isLoading, data } = this.props;
    //console.log('home: ', data);
    return (
      <div>
        {isLoading ? (
          <p>Cargando datos...</p>
        ) : (
          <Fragment>
            <h1>Harry Potter Characters</h1>
            <Filters />
            <List data={data} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default Home;
