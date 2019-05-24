import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class CardDetail extends React.Component {
  render() {
    // const { src, name, house, match, data } = this.props;
    const {match, data } = this.props;
    const { id } = match.params;
    const detail = data[id];
    return (
      <Fragment>
        <div>
          <Link to='/'>
            <ul>
              <li>Atrás</li>
            </ul>
          </Link>
        </div>
        <img className='list__img' src={detail.image} alt={detail.name} />
        <div>
          <h2 className='list__name'>{detail.name}</h2>
          <ul>
            <li className='list__house'>
              Casa: Casa: {detail.house ? detail.house : 'Where is my home?'}
            </li>
            <li>
              Nacimiento: {detail.yearOfBirth ? detail.yearOfBirth : '??'}
            </li>
            <li>Patronus: {detail.patronus}</li>
            <li>Estado: {detail.alive} </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default CardDetail;
