import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

const IndexPage = props => {
  const { persons, hirePerson, firePerson } = props;

  const isGood = person =>
    person.politicalView !== "red" && person.unionized === false;

  const goodPeople = persons.filter(isGood);
  const badPeople = persons.filter(p => !isGood(p));

  return (
    <div>
      <HirePersonForm hirePerson={hirePerson} />

      <table>
        <tbody>
          <tr>
            <td>
              <h2>Pahat ihmiset</h2>
              <PersonList
                showMetaData
                persons={badPeople}
                firePerson={firePerson}
              />
            </td>
            <td>
              <h2>Hyvät ihmiset</h2>
              <PersonList
                showMetaData
                persons={goodPeople}
                firePerson={firePerson}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IndexPage;
