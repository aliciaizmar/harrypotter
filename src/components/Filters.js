import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const {
      filterByName,
      searchNameValue,
      filterByHouse,
      houses,
      gender,
      filterByGender,
      filterByPatronus,
      searchByPatronus
    } = this.props;
    console.log('filter:', searchByPatronus);
    return (
      <Fragment>
        <form className='main__form'>
          <label htmlFor='name' className='hidden'>
            Filtrar por nombre
          </label>
          <input
            className='form__input'
            id='name'
            onChange={filterByName}
            value={searchNameValue}
            placeholder='Filtrar por nombre'
          />

          <label htmlFor='name' className='hidden'>
            Filtrar por patronus
          </label>
          <input
            className='form__input'
            id='name'
            onChange={filterByPatronus}
            value={searchByPatronus}
            placeholder='Filtrar por patronus'
          />

          <span className='dis-block'>Filtrar por casas </span>
          <label htmlFor='Gryffindor' className='dis-block text-center'>
            <input
              type='checkbox'
              name='Gryffindor'
              className='form__input--radio'
              id='Gryffindor'
              //value='Gryffindor'
              vaue={houses}
              onClick={filterByHouse}
            />
            Gryffindor
          </label>
          <label htmlFor='Hufflepuff' className='dis-block text-center'>
            <input
              type='checkbox'
              name='Hufflepuff'
              className='form__input--radio'
              id='Hufflepuff'
              value={houses}
              onClick={filterByHouse}
            />
            Hufflepuff
          </label>
          <label htmlFor='Ravenclaw' className='dis-block text-center'>
            <input
              type='checkbox'
              name='Ravenclaw'
              className='form__input--radio'
              id='Ravenclaw'
              value={houses}
              onClick={filterByHouse}
            />
            Ravenclaw
          </label>
          <label htmlFor='Slytherin' className='dis-block text-center'>
            <input
              type='checkbox'
              name='Slytherin'
              className='form__input--radio'
              id='Slytherin'
              value={houses}
              onClick={filterByHouse}
            />
            Slytherin
          </label>
          <label htmlFor='Homeless' className='dis-block text-center'>
            <input
              type='checkbox'
              name={houses}
              className='form__input--radio'
              id='Homeless'
              value={houses}
              onClick={filterByHouse}
            />
            Homeless
          </label>

          <span className='dis-block'>Filtrar por género </span>
          <label htmlFor='male' className='dis-block text-center'>
            <input
              type='radio'
              name='gender'
              className='form__input--radio'
              id='male'
              value='male'
              onClick={filterByGender}
            />
            Male
          </label>
          <label htmlFor='female' className='dis-block text-center'>
            <input
              type='radio'
              name='gender'
              className='form__input--radio'
              id='female'
              value='female'
              onClick={filterByGender}
            />
            Female
          </label>
          <label htmlFor='all' className='dis-block text-center'>
            <input
              type='radio'
              name='gender'
              className='form__input--radio'
              id='all'
              value='all'
              onClick={filterByGender}
            />
            All
          </label>
        </form>
      </Fragment>
    );
  }
}

Filters.propTypes = {
  filterByName: PropTypes.func.isRequired,
  searchNameValue: PropTypes.string.isRequired
};

export default Filters;
