import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "rider@gmail.con",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("useEffect called!!");
  }, []);

  useEffect(() => {
    //console.log("form state change");
  }, [formState]);

  useEffect(() => {
    //console.log("email change");
  }, [email]);

  return (
    <div>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="hugo@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "strider2" && <Message />}
    </div>
  );
};
