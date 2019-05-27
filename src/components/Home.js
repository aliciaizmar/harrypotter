import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Filters from './Filters';

class Home extends React.Component {
  render() {
    const { isLoading, data, filterByName, searchNameValue, match } = this.props;
    //console.log('home: ', isLoading)
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
              <List 
                data={data}
                match={match}
                isLoading={isLoading}
               />
            </main>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool,
};

export default Home;
