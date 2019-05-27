import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const { filterByName, searchNameValue } = this.props;
    return (
      <Fragment>
        <form className='main__form'>
          <label htmlFor='name' className="hidden">Filtrar por nombre </label>
          <input 
            className="form__input" 
            id='name' onChange={filterByName} 
            value={searchNameValue} 
            placeholder="Filtrar por nombre"
          />
        </form>
      </Fragment>
    );
  }
}

Filters.propTypes = {
  filterByName: PropTypes.func.isRequired, 
  searchNameValue: PropTypes.string.isRequired, 
};

export default Filters;
