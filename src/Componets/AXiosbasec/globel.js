import axios from "axios";

let userItem = JSON.parse(localStorage.getItem("useItem"))?.jwtToken;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'bearer' + userItem;