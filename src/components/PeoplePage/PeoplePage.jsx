import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getPeople } from '../../api/api';
import { PeopleTable } from '../PeopleTable';

export const PeoplePage = ({ match }) => {
  const [people, setPeople] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    getPeople()
      .then(result => setPeople(result
        .map(person => (
          {
            ...person,
            mother: result.find(item => item.name === person.motherName),
            father: result.find(item => item.name === person.fatherName),
          }
        ))));
  }, []);

console.log(people);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(event) => {
          searchParams.set('query', event.target.value);
          history.push({
            search: searchParams.toString(),
          });
        }}
      />
      {people && (
        <>
          <PeopleTable
            people={people.filter(p => p.name.toLowerCase()
              .includes(query.toLowerCase())
              || (p.motherName && p.motherName.toLowerCase()
                .includes(query.toLowerCase()))
              || (p.fatherName && p.fatherName.toLowerCase()
                .includes(query.toLowerCase())))}
            match={match}
          />
        </>
      )
      }
    </>
  );
};
