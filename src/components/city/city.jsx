import React from "react";
import PropTypes from 'prop-types';

const City = (props) => {
  const {city, onCityClick, activeClass} = props;
  const _handleCityClick = () => {
    onCityClick(city);
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeClass}`} href="#" onClick={_handleCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  activeClass: PropTypes.string
};

export default City;
