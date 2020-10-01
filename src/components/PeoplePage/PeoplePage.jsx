import React, { useState, useEffect, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getPeople } from '../../api/api';
import { PeopleTable } from '../PeopleTable';

export const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sortByParam = searchParams.get('sortBy') || '';
  const query = searchParams.get('query') || '';
  const [sort, setSort] = useState('');

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

  const filteredPeople = useMemo(() => {
    const filtered = people.filter(p => p.name.toLowerCase()
      .includes(query.toLowerCase())
    || (p.motherName && p.motherName.toLowerCase()
      .includes(query.toLowerCase()))
    || (p.fatherName && p.fatherName.toLowerCase()
      .includes(query.toLowerCase())));

    switch (sortByParam) {
      case 'born':
        return filtered.sort((a, b) => a.born - b.born);

      case 'died':
        return filtered.sort((a, b) => a.died - b.died);

      case 'sex':
        return filtered.sort((a, b) => a.sex.localeCompare(b.sex));

      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));

        // case 'mother':
        //   return filtered.sort((a, b) => a.motherName
        //     .localeCompare(b.motherName));

        // case 'father':
        //   return filtered.sort((a, b) => a.fatherName
        //     .localeCompare(b.fatherName));

      default:
        return filtered;
    }
  }, [people, query, sortByParam]);

  // eslint-disable-next-line consistent-return
  const sortPeople = (sortBy) => {
    if (sortBy === sortByParam) {
      filteredPeople.reverse();
    }

    switch (sortBy) {
      case 'born':
      case 'died':
      case 'sex':
      case 'name':
      // case 'mother':
      // case 'father':
        setSort(sortBy);
        searchParams.set('sortBy', `${sortBy}`);
        history.push({
          search: searchParams.toString(),
        });
        break;

      default: return null;
    }
  };

  return (
    <>
      <label>
        {`Search person `}
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
      </label>
      <PeopleTable
        people={filteredPeople}
        handleSort={sortPeople}
        sortByParam={sortByParam}
        sort={sort}
      />
    </>
  );
};
