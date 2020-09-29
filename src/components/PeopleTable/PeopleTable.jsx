import React from 'react';
import { PersonRow } from '../PersonRow';
import './PeopleTable.scss';

export const PeopleTable = ({ people }) => (

  <table className="PeopleTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Sex</th>
        <th>Born</th>
        <th>Died</th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>
    <tbody>
      {people && people.map(person => (
        <PersonRow person={person} key={person.name} />
      ))}
    </tbody>
  </table>
);
