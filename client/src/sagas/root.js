import { takeEvery, all, call } from "redux-saga/effects";
import { GET_PERSONS, HIRE_PERSON, FIRE_PERSON } from "../ducks/person";
import { getPersons, hirePerson, firePerson } from "./person";

export default function* rootSaga() {
  yield all([
    takeEvery(GET_PERSONS, getPersons),
    takeEvery(HIRE_PERSON, function*(action) {
      yield call(hirePerson, action.payload);
    }),
    takeEvery(FIRE_PERSON, function*(action) {
      yield call(firePerson, action.payload);
    })
  ]);
}
