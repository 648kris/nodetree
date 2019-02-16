import axios from 'axios';

export default function createNewNode(name, amount, rangeLow, rangeHigh, currentuser) {
  axios("http://mysite.com/api/things/", {
    method: "post",
    data: {user: "currentuser", leaves: ["leaves"], name: "name"},
    withCredentials: true
})
}
