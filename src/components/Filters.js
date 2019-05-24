import React, { Fragment } from 'react';

class Filters extends React.Component {
  render() {
    const { filterByName, searchNameValue } = this.props;
    return (
      <Fragment>
        <form className='main__form'>
          <label htmlFor='name'>Filtrar por nombre </label>
          <input id='name' onChange={filterByName} value={searchNameValue} />
        </form>
      </Fragment>
    );
  }
}

export default Filters;
