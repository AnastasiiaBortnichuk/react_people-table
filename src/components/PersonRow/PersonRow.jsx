import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PersonName } from '../PersonName';
import './PersonRow.scss';

export const PersonRow = ({ person, people, match }) => (
  <tr className={classNames({
    Person: true,
    selected: match.params.slug === person.slug,
  })}
  >
    <td>
      <PersonName
        name={person.name}
        slug={person.slug}
        sex={person.sex}
      />
    </td>
    <td>{person.sex}</td>
    <td>{person.born}</td>
    <td>{person.died}</td>
    <td>
      {(people.some(parent => parent.name === person.motherName)
        ? (
          <>
            <PersonName
              name={person.motherName}
              slug={people.find(parent => parent.name === person.motherName)
                .slug}
              sex={people.find(parent => parent.name === person.motherName).sex}
            />
          </>
        )
        : <>{person.motherName}</>
      )}
    </td>
    <td>
      {(people.some(parent => parent.name === person.fatherName)
        ? (
          <>
            <PersonName
              name={person.fatherName}
              slug={people.find(parent => parent.name === person.fatherName)
                .slug}
              sex={people.find(parent => parent.name === person.fatherName).sex}
            />
          </>
        )
        : <>{person.fatherName}</>
      )}
    </td>
  </tr>
);

PersonRow.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    born: PropTypes.number.isRequired,
    died: PropTypes.number.isRequired,
    motherName: PropTypes.string,
    fatherName: PropTypes.string,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  people: PropTypes.arrayOf(PropTypes.object),
};

PersonRow.defaultProps = {
  people: null,
};
