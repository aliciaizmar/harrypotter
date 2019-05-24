import React, { Fragment } from 'react';
import CardDetail from './CardDetail';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <ul className='main__list'>
          {data.map((person, id) => {
            return (
              <li className='list__li' key={id} id={id}>
                <Link to={`/detail/${person.id}`}>
                  <CardDetail
                    src={person.image}
                    alt={person.name}
                    name={person.name}
                    house={person.house}
                  />
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
