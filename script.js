import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcYqJXeOMJQTDloW6zisz-HPx1MPuu4I",
  authDomain: "scientific-conference-d56ea.firebaseapp.com",
  databaseURL:
    "https://scientific-conference-d56ea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scientific-conference-d56ea",
  storageBucket: "scientific-conference-d56ea.appspot.com",
  messagingSenderId: "321832621840",
  appId: "1:321832621840:web:6d9f28994c26dbb09b1788",
  measurementId: "G-1ZVJZBWXQV",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const tableBody = document.getElementById("tableBody");

onValue(ref(db, "messages"), (snapshot) => {
  tableBody.innerHTML = "";

  snapshot.forEach((child) => {
    const data = child.val();

    const row = `
      <tr>
        <td>${data.firstName}</td>
        <td>${data.surname}</td>
        <td>${data.lastName}</td>
        <td>${data.status}</td>
        <td>${data.speciality}</td>
        <td>${data.institution}</td>
        <td>${data.topic}</td>
        <td>${data.consultant}</td>
        <td>${data.thematicDirection}</td>
        <td>${data.summary}</td>
        <td>${data.software}</td>
        <td>${data.timestamp}</td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });
});
