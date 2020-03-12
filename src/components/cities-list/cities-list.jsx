import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import City from '../city/city.jsx';

const CitiesList = (props) => {
  const {cities, onCityClick, activeCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => <City key={city} city={city} onCityClick={onCityClick} activeClass={city === activeCity ? `tabs__item--active` : ``}/>)
      }
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  onCityClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

export default connect(
    (state) => ({
      city: state.city,
    }),
    mapDispatchToProps
)(CitiesList);
