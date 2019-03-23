import { connect } from "react-redux";
import App from "../App";
import { getPersons } from "../../ducks/person";
import { withRouter } from "react-router";
import { compose } from "redux";

export default compose(
  withRouter,
  connect(
    state => ({
      counter: state.person.get("counter"),
      loading: state.ui.get("loading") > 0
    }),
    {
      getPersons
    }
  )
)(App);
