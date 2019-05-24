import React, { Fragment } from 'react';
import CardDetail from './CardDetail';

class List extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Fragment>
        <ul className='main__list'>
          {data.map((person, id) => {
            return (
              <li className='list__li' key={id} id={id}>
                <img
                  className='list__img'
                  src={person.image}
                  alt={person.name}
                />
                <h2>{person.name}</h2>
                <h3>{person.house}</h3>
              </li>
            );
          })}
        </ul>
        <CardDetail />
      </Fragment>
    );
  }
}

export default List;
