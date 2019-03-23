import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import * as reducers from "../ducks";
import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();

export function getSagaMiddleware() {
  return sagaMiddleWare;
}

export function getMiddlewares() {
  let middlewares = [thunk, promiseMiddleware, sagaMiddleWare];
  return middlewares;
}

export function getReducers() {
  return reducers;
}

export function getEnhancers() {
  return [];
}
