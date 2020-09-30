import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PersonRow } from '../PersonRow';
import './PeopleTable.scss';

export const PeopleTable = ({ people, handleSort, sortByParam }) => (
  <table className="PeopleTable">
    <thead>
      <tr>
        <th
          className={classNames({
            th: true, selected: sortByParam === 'name',
          })}
          onClick={() => handleSort('name')}
        >
          Name
        </th>
        <th
          className={classNames({
            th: true, selected: sortByParam === 'sex',
          })}
          onClick={() => handleSort('sex')}
        >
          Sex
        </th>
        <th
          onClick={() => handleSort('born')}
          className={classNames({
            th: true, selected: sortByParam === 'born',
          })}
        >
          Born
        </th>
        <th
          onClick={() => handleSort('died')}
          className={classNames({
            th: true, selected: sortByParam === 'died',
          })}
        >
          Died
        </th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>
    <tbody>
      {people.map(person => (
        <PersonRow
          person={person}
          key={person.name}
          people={people}
          sortByParam={sortByParam}
        />
      ))}
    </tbody>
  </table>
);

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func.isRequired,
  sortByParam: PropTypes.string.isRequired,
};

PeopleTable.defaultProps = {
  people: [],
};
