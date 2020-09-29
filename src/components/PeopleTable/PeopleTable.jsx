import React from 'react';
import PropTypes from 'prop-types';
import { PersonRow } from '../PersonRow';
import './PeopleTable.scss';

export const PeopleTable = ({ people, match }) => (

  <table className="PeopleTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Sex</th>
        <th onClick={() => people.sort((a, b) => a.born - b.born)}>Born</th>
        <th>Died</th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>
    <tbody>
      {people && people.map(person => (
        <PersonRow
          person={person}
          key={person.name}
          people={people}
          match={match}
        />
      ))}
    </tbody>
  </table>
);

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
};

PeopleTable.defaultProps = {
  people: null,
};
