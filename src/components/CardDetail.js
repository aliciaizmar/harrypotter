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
    //console.log('card', match.params);

    return (
      <div className='myCard'>
        {person ? (
          <Fragment>
            <Link to='/' className='back__link'>
              <div>
                <span> <FaAngleLeft className="icon" /> Back to Characters</span>
              </div>
            </Link>

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
                    {person.alive 
                    ? (
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
          <Fragment>
            {isLoading 
            ? (<p>Wait, I'm loading...</p>) 
            : (<p>User doesn't exists</p>)}            
          </Fragment>
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
