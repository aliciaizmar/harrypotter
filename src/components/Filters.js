import React, { Fragment } from 'react';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const { filterByName, searchNameValue } = this.props;
    return (
      <Fragment>
        <form className='main__form'>
          <label htmlFor='name' className="hidden">Filtrar por nombre </label>
          <input className="form__input" id='name' onChange={filterByName} value={searchNameValue} placeholder="Filtrar por nombre" />
        </form>
      </Fragment>
    );
  }
}

export default Filters;
