import axios from "axios";

const getPersons = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/person`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const hirePerson = async person => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/person`,
      person
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const firePerson = async id => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API}/person/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getPersons,
  hirePerson,
  firePerson
};
