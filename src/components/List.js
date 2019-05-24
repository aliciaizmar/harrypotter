import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    const { data} = this.props;
    return (
      <Fragment>
        <ul className='main__list'>
          {data.map((person, id) => {
            return (
              <li className='list__li' key={id}>
                <Link to={`/detail/${person.id}`}>
                  <img
                    className='list__img'
                    src={person.image}
                    alt={person.name}
                  />
                  <h2 className='list__name'>{person.name}</h2>
                  <h3 className='list__house'>
                    {person.house ? person.house : 'Where is my home?'}
                  </h3>
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
