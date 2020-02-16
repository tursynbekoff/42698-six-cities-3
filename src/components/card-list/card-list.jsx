import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

class CardList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      card: null,
    };
    this.handleCardMouseOver = this.handleCardMouseOver.bind(this);
    this.handleCardMouseOut = this.handleCardMouseOut.bind(this);
  }

  handleCardMouseOver(id) {
    if (this.state.card === id) {
      return;
    }

    this.setState({
      card: id
    });
  }

  handleCardMouseOut() {
    this.setState({
      card: null
    });
  }


  render() {
    const {aparts} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content" onMouseOut={this.handleCardMouseOut}>
        {
          aparts.map((apart) => <Card key={apart.id} apart={apart} onMouseOver={this.handleCardMouseOver} />)
        }
      </div>
    );
  }
}

CardList.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.exact(
      {
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isMarked: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
      })
  )
};

export default CardList;