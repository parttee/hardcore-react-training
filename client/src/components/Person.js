import React, { memo } from "react";
import cx from "classnames";
import styles from "./Person.pcss";
import Button from "./Button";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.communist]: person.politicalView === "red",
    [styles.capitalist]: person.politicalView !== "red"
  });

  return (
    <div className={classes}>
      <div>
        <Link to={`/person/${person.id}`}>
          <strong>{person.lastName}</strong>, {person.firstName}{" "}
        </Link>
        {person.gender === "m" ? "♂" : "♀"}
      </div>
      <div>
        <small>{person.email}</small>
      </div>
      <div>Rahaa kuluu: ¥ {person.salary}</div>
      <div>Ideologia: {person.politicalView}</div>
      <div>
        <Button
          disabled={person.isBeingFired}
          primary
          block
          onClick={() => firePerson(person.id)}
        >
          Fire me!
        </Button>
      </div>
    </div>
  );
};

export default memo(Person);
