import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PersonName } from '../PersonName';
import './PersonRow.scss';

export const PersonRow = ({ person, people, sortByParam, sort }) => {
  const { slug } = useParams();

  return (
    <tr className={classNames({
      Person: true,
      selected: slug === person.slug,
    })}
    >
      <td className={classNames({
        td: true,
        sorted: sortByParam === 'name',
      })}
      >
        <PersonName
          name={person.name}
          slug={person.slug}
          sex={person.sex}
          sort={sort}
        />
      </td>
      <td className={classNames({
        td: true,
        sorted: sortByParam === 'sex',
      })}
      >
        {person.sex}
      </td>
      <td className={classNames({
        td: true,
        sorted: sortByParam === 'born',
      })}
      >
        {person.born}
      </td>
      <td className={classNames({
        td: true,
        sorted: sortByParam === 'died',
      })}
      >
        {person.died}
      </td>
      <td className="td">
        {(people.some(parent => parent.name === person.motherName)
          ? (
            <>
              <PersonName
                name={person.motherName}
                slug={people.find(parent => parent.name === person.motherName)
                  .slug}
                sex={people.find(parent => parent.name === person.motherName)
                  .sex}
              />
            </>
          )
          : <>{person.motherName}</>
        )}
      </td>
      <td className="td">
        {(people.some(parent => parent.name === person.fatherName)
          ? (
            <>
              <PersonName
                name={person.fatherName}
                slug={people.find(parent => parent.name === person.fatherName)
                  .slug}
                sex={people.find(parent => parent.name === person.fatherName)
                  .sex}
              />
            </>
          )
          : <>{person.fatherName}</>
        )}
      </td>
    </tr>
  );
};

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
  sortByParam: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

PersonRow.defaultProps = {
  people: null,
};
