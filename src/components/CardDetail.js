import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegSadCry, FaRegSmileBeam, FaAngleLeft } from 'react-icons/fa';
import './CardDetail.scss';

class CardDetail extends React.Component {
  render() {
    // const { src, name, house, match, data } = this.props;
    const { match, data, isLoading } = this.props;
    const { id } = match.params;
    //person = data es el array e id la posición del elemento
    const person = data[id];

    if (isLoading) {
      return <p className="text-center">Wait, I'm loading...</p>;
    }
    return (
      <div className='myCard'>
        <Link to='/'>
          <div className='back__link'>
            <span>
              <FaAngleLeft className='icon' /> Back to Characters
            </span>
          </div>
        </Link>
        {person ? (
          <Fragment>
            <div className='main__character'>
              <div className='character__img--content'>
                <img
                  className='character__img'
                  src={person.image}
                  alt={person.name}
                />
              </div>
              <div className='character__detail'>
                <h2 className='character__name'>{person.name}</h2>
                <ul className='character__list'>
                  <li>
                    House: {person.house ? person.house : ' Where is my home?'}
                  </li>
                  <li>
                    Year of Birth:{' '}
                    {person.yearOfBirth ? person.yearOfBirth : '??'}
                  </li>
                  <li>
                    Patronus:{' '}
                    {person.patronus ? person.patronus : 'No patronus'}
                  </li>
                  <li>
                    Estado:
                    {person.alive ? (
                      <FaRegSmileBeam className='icon' title='Alive' />
                    ) : (
                      <FaRegSadCry className='icon' title='Dead' />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </Fragment>
        ) : (
          <p>User doesn't exists</p>
        )}
      </div>
    );
  }
}

CardDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default CardDetail;
