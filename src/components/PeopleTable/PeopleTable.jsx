import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PersonRow } from '../PersonRow';
import './PeopleTable.scss';

export const PeopleTable = ({ people, handleSort, sortByParam, sort }) => (
  <table className="PeopleTable">
    <thead>
      <tr>
        {['name', 'sex', 'born', 'died', 'mother', 'father'].map(item => (
          <th
            key={item}
            className={classNames({
              th: true, selected: sortByParam === item,
            })}
            onClick={() => handleSort(item)}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {people.map(person => (
        <PersonRow
          person={person}
          key={person.name}
          people={people}
          sortByParam={sortByParam}
          sort={sort}
        />
      ))}
    </tbody>
  </table>
);

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func.isRequired,
  sortByParam: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

PeopleTable.defaultProps = {
  people: [],
};
