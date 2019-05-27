import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaRegSadCry, FaRegSmileBeam } from 'react-icons/fa';
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
                <span> -- Back to Characters</span>
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
          <p>...</p>
        )}
      </div>
    );
  }
}

export default CardDetail;
