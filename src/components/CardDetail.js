import React, {Fragment} from 'react';

class CardDetail extends React.Component {
  render() {
    const { src, name, house } = this.props;
    //console.log('filter: ', src)
    return (
      <Fragment>
        <img
          className='list__img'
          src={src}
          alt={name}
        />
        <h2 className="list__name">{name}</h2>
        <h3 className ="list__house">{house ? (house) : ("Where is my home?")}</h3>
      </Fragment>
    );
  }
}

export default CardDetail;
