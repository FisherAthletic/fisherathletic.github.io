import React, { useState } from "react";
import firebase from "firebase";
import Firestore from "./Firestore";

const User = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([{ fullName: "tester 2020" }]);

  const db = firebase.firestore();

  const updateInput = (event) => {
    if (event.target.name === "fullName") {
      setFullName(event.target.value);
    } else {
      setEmail(event.target.value);
    }
  };

  const addUser = (event) => {
    event.preventDefault();
    db.collection("users").add({
      fullName: fullName,
      email: email,
    });
    setFullName("");
    setEmail("");
  };

  const getAllUsers = () => {
    db.collection("users")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("All data in user collection", data);
        setUserData(data);
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          onChange={updateInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
        />
        <button type="submit" onClick={addUser}>
          Submit
        </button>
        <p>Full name: {fullName}</p>
        <p>Email: {email}</p>
      </form>
      <button onClick={getAllUsers}>View all users</button>
      <ul>
        {userData.map((item) => (
          <li>Name: {item.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
