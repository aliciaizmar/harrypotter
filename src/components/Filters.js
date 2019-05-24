import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <div>
        <form>
            <label htmlFor="name">Filtrar por nombre </label>
            <input id="name" />
        </form>
      </div>
    );
  }
}

export default Filters;
