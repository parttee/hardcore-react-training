import React from "react";
import { Formik } from "formik";
import uuid from "uuid";
import * as Yup from "yup";
import Form, { FormBody } from "./Form";
import Button from "./Button";

/*

age: 83.51708043017504
birthDay: "1935-09-12T23:21:01.323Z"
email: "Kole42@yahoo.com"
firstName: "Skye"
gender: "m"
handedness: "l"
id: "56d406ac-00b0-4c9b-bde8-d17d81dfc68b"
lastName: "Lindgren"
politicalView: "green"
relatedToCEO: false
salary: 5505
unionized: false*/

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

const HirePersonForm = props => {
  const { hirePerson } = props;

  return (
    <Formik
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki"
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        const newPerson = {
          ...values,
          id: uuid(),
          age: 25.3
        };
        hirePerson(newPerson);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <FormBody>
              <div>
                <label>Etunimi</label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && touched.firstName && (
                  <div>{errors.firstName}</div>
                )}
              </div>
              <div>
                <label>Sukunimi</label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && touched.lastName && (
                  <div>{errors.lastName}</div>
                )}
              </div>
              <div>
                <label>Sähköposti</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>
              <div>
                <label>Sukupuoli</label>
                <select
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <option>--Valitse--</option>
                  <option value="m">Mies</option>
                  <option value="f">Nainen</option>
                </select>
                {errors.gender && touched.gender && <div>{errors.gender}</div>}
              </div>
              <div>
                <label>Käsirajoitus</label>
                <select
                  name="handedness"
                  value={values.handedness}
                  onChange={handleChange}
                >
                  <option>--Valitse--</option>
                  <option value="l">Vasuri</option>
                  <option value="r">Oikuri</option>
                </select>
                {errors.handedness && touched.handedness && (
                  <div>{errors.handedness}</div>
                )}
              </div>
              <div>
                <label>Poliittinen aivopesu</label>
                <input
                  type="text"
                  name="politicalView"
                  value={values.politicalView}
                  onChange={handleChange}
                />
                {errors.politicalView && touched.politicalView && (
                  <div>{errors.politicalView}</div>
                )}
              </div>
              <div>
                <label>Veri vettä sakeampaa?</label>
                <select
                  name="relatedToCEO"
                  value={values.relatedToCEO}
                  onChange={handleChange}
                >
                  <option>--Valitse--</option>
                  <option value={false}>Ei</option>
                  <option value={true}>Joo</option>
                </select>
                {errors.relatedToCEO && touched.relatedToCEO && (
                  <div>{errors.relatedToCEO}</div>
                )}
              </div>
              <div>
                <label>Paljon vaatii massia?</label>
                <input
                  type="number"
                  name="salary"
                  value={values.salary}
                  onChange={handleChange}
                />
                {errors.salary && touched.salary && <div>{errors.salary}</div>}
              </div>
              <div>
                <label>Liiton kätyri?</label>
                <select
                  name="unionized"
                  value={values.unionized}
                  onChange={handleChange}
                >
                  <option>--Valitse--</option>
                  <option value={false}>Ei</option>
                  <option value={true}>Joo</option>
                </select>
                {errors.unionized && touched.unionized && (
                  <div>{errors.unionized}</div>
                )}
              </div>
            </FormBody>
            <Button type="submit">Part of the crew. Part of the ship</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
