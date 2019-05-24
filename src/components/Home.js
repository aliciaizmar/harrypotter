import React, { Fragment } from 'react';
import List from './List';
import Filters from './Filters';

class Home extends React.Component {
  render() {
    const { isLoading, data, filterByName, searchNameValue } = this.props;
    //console.log('home: ' , searchNameValue)
    return (
      <Fragment>
        {isLoading ? (
          <p>Wait, I'm loading...</p>
        ) : (
          <Fragment>
            <nav className='main__header'>
              <h1>Harry Potter Characters</h1>
            </nav>
            <main>
              <Filters
                filterByName={filterByName}
                searchNameValue={searchNameValue}
              />
              <List data={data} />
            </main>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Home;
