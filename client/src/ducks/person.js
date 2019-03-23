import { Map } from "immutable";

export const HIRE_PERSON = "HIRE_PERSON";
export const HIRE_PERSON_PENDING = "HIRE_PERSON_PENDING";
export const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";

export const FIRE_PERSON = "FIRE_PERSON";
export const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
export const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";

export const GET_PERSONS = "GET_PERSONS";
export const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
export const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

export const hirePerson = person => ({
  type: HIRE_PERSON,
  payload: person
});

export const firePerson = id => ({
  type: FIRE_PERSON,
  payload: id
});

// export const getPersons = () => async dispatch => {
//   dispatch({
//     type: GET_PERSONS_PENDING
//   });
//   try {
//     const persons = await personService.getPersons();
//     dispatch({
//       type: GET_PERSONS_FULFILLED,
//       payload: persons
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_PERSONS_REJECTED,
//       payload: e,
//       error: true
//     });
//   }
// };

export const getPersons = () => async dispatch => {
  dispatch({
    type: GET_PERSONS
  });
};

const defaultState = Map({
  persons: Map(),
  counter: 0
});

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case FIRE_PERSON_PENDING:
      return state.updateIn(["persons", payload], person => {
        return {
          ...person,
          isBeingFired: true
        };
      });

    case FIRE_PERSON_FULFILLED:
      return state.deleteIn(["persons", payload]);

    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], payload);

    case GET_PERSONS_FULFILLED:
      return state
        .set("persons", Map(payload.map(p => [p.id, p])))
        .update("counter", c => c + 1);

    default:
      return state;
  }
}
