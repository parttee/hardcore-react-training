import personService from "../services/person";
import { call, put } from "redux-saga/effects";
import {
  GET_PERSONS_FULFILLED,
  GET_PERSONS_PENDING,
  HIRE_PERSON_PENDING,
  HIRE_PERSON_FULFILLED,
  FIRE_PERSON_PENDING,
  FIRE_PERSON_FULFILLED
} from "../ducks/person";

export function* getPersons() {
  yield put({
    type: GET_PERSONS_PENDING
  });

  const persons = yield call(personService.getPersons);

  yield put({
    type: GET_PERSONS_FULFILLED,
    payload: persons
  });
}

export function* hirePerson(person) {
  yield put({
    type: HIRE_PERSON_PENDING
  });

  const hired = yield call(personService.hirePerson, person);

  yield put({
    type: HIRE_PERSON_FULFILLED,
    payload: hired
  });
}

export function* firePerson(id) {
  yield put({
    type: FIRE_PERSON_PENDING,
    payload: id
  });

  const fired = yield call(personService.firePerson, id);

  yield put({
    type: FIRE_PERSON_FULFILLED,
    payload: fired.id
  });
}
