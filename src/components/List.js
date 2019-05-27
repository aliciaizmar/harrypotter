import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './List.scss';

class List extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Fragment>
        <ul className='main__list'>
          {data.map((person, id) => {
            return (
              <li className='list__li' key={id}>
                <Link to={`/detail/${person.id}`}>
                  <div className='list__img--content'>
                    <img
                      className='list__img--list'
                      src={person.image}
                      alt={person.name}
                    />
                  </div>
                  <div className='list__info--content'>
                    <h2 className='list__name'>{person.name}</h2>
                    <h3 className='list__house'>
                      {person.house ? person.house : 'Where is my home?'}
                    </h3>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default List;
