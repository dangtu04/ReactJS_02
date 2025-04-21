import axios from "../axios";

const userLogin = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};


const getAllUsers = (inputId) => {
  return axios.get(`/api/get-users?id=${inputId}`)
}


export { userLogin, getAllUsers};
