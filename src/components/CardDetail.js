import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class CardDetail extends React.Component {
  render() {
    // const { src, name, house, match, data } = this.props;
    const { match, data, isLoading } = this.props;
    const { id } = match.params;
    const detail = data[id];
    console.log('card', isLoading);
    return (
      <Fragment>
        <div className='myCard'>
          {isLoading ? (
            <p>Wait, I'm loading...</p>
          ) : (
            <div>
              <Link to='/'>
                <ul>
                  <li>Atrás</li>
                </ul>
              </Link>

              <img className='list__img' src={detail.image} alt={detail.name} />

              <h2 className='list__name'>{detail.name}</h2>
              <ul>
                <li className='list__house'>
                  Casa: Casa:{detail.house ? detail.house : 'Where is my home?'}
                </li>
                <li>
                  Nacimiento: {detail.yearOfBirth ? detail.yearOfBirth : '??'}
                </li>
                <li>Patronus: {detail.patronus}</li>
                <li>Estado: {detail.alive ? 'ALIVE' : 'DEAD'} </li>
              </ul>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default CardDetail;
