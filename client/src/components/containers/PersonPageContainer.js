import { connect } from "react-redux";
import PersonPage from "../PersonPage";
import { hirePerson, firePerson } from "../../ducks/person";

export default connect(
  (state, props) => ({
    person: state.person.getIn(["persons", props.match.params.id])
  }),
  {
    hirePerson,
    firePerson
  }
)(PersonPage);
