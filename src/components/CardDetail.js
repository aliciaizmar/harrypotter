import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './CardDetail.scss';

class CardDetail extends React.Component {
  render() {
    // const { src, name, house, match, data } = this.props;
    const { match, data, isLoading } = this.props;
    const { id } = match.params;
    const detail = data[id];
    //console.log('card', isLoading);
    return (
      <div className='myCard'>
        {isLoading ? (
          <p>Wait, I'm loading...</p>
        ) : (
          <Fragment>
            <Link to='/' className="back__link">
              <div>
                <span> -- Back to Characters</span>
              </div>
            </Link>

            <div className='main__character'>
              <div className='character__img--content'>
                <img
                  className='character__img'
                  src={detail.image}
                  alt={detail.name}
                />
              </div>

              <div className='character__detail'>
                <h2 className='character__name'>{detail.name}</h2>
                <ul className="character__list">
                  <li>
                    House: {detail.house ? detail.house : ' Where is my home?'}
                  </li>
                  <li>
                    Year of Birth:{' '}
                    {detail.yearOfBirth ? detail.yearOfBirth : '??'}
                  </li>
                  <li>
                    Patronus:{' '}
                    {detail.patronus ? detail.patronus : 'No patronus'}
                  </li>
                  <li>Estado: {detail.alive ? 'Alive' : 'Dead'} </li>
                </ul>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default CardDetail;
