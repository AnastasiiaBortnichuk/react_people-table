import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './PersonName.scss';

export const PersonName = ({ name, slug, sex }) => (
  <Link
    to={`/people/${slug}`}
    className={classNames({
      man: sex === 'm',
      woman: sex === 'f',
    })}
  >
    {name}
  </Link>
);

PersonName.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};
