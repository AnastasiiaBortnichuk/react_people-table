import React from 'react';

export const PersonRow = ({ person }) => (
  <tr className="Person">
    <td>{person.name}</td>
    <td>{person.sex}</td>
    <td>{person.born}</td>
    <td>{person.died}</td>
    <td>{person.motherName}</td>
    <td>{person.fatherName}</td>
  </tr>
);
