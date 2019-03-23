import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

const Container = posed.div({
  enter: {
    staggerChildren: 200
  },
  exit: {
    staggerChildren: 200
  }
});

const Item = posed.div({
  hidden: {
    opacity: 0,
    scaleX: 0
  },
  enter: {
    opacity: 1,
    scaleX: 1,
    x: 0,
    y: 0,
    originX: 50,
    originY: 50,
    margin: "10px 0",
    borderRadius: 0,
    overflow: "hidden",
    filter: "blur(0px)"
  },
  exit: {
    opacity: 0,
    scaleX: 0,
    x: "var(--pos)",
    y: -800,
    originX: 50,
    originY: 50,
    borderRadius: 100,
    margin: "10px 0",
    overflow: "hidden",
    filter: "blur(100px)",
    transition: {
      duration: 3000,
      ease: "linear"
    }
  }
});

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const PersonList = props => {
  const { persons, showMetaData, ...restProps } = props;

  const avgAge =
    persons.count() &&
    persons.reduce((a, p) => a + (p.age || 0), 0) / persons.count();

  if (!persons.count()) {
    return null;
  }

  return (
    <div style={{ position: "relative", "--pos": rnd(-600, 600) + "px" }}>
      <Container initialPose="hidden" pose="enter">
        {showMetaData && (
          <div>
            <p>Tyyppejä listalla: {persons.count()}</p>
            <p>Keski-ikä: {avgAge.toFixed(2)}</p>
          </div>
        )}
        <PoseGroup>
          {persons
            .map(person => {
              return (
                <Item key={person.id}>
                  <Person {...restProps} person={person} />
                </Item>
              );
            })
            .toList()}
        </PoseGroup>
      </Container>
    </div>
  );
};

PersonList.propTypes = {
  showMetaData: PropTypes.bool.isRequired,
  persons: PropTypes.object.isRequired
};

PersonList.defaultProps = {
  showMetaData: false
};

export default PersonList;
