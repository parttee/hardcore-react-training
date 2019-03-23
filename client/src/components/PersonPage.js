import React from "react";

const PersonPage = props => {
  const { person } = props;

  if (!person) {
    return null;
  }

  return (
    <section>
      <h2>
        <strong>{person.lastName}</strong>, {person.firstName}
      </h2>
    </section>
  );
};

export default PersonPage;
