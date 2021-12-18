import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [sucessfullLogIn, setSucessfullLogIn] = useState(false);

  const logIn = () => {
    setSucessfullLogIn(true);
    setInput("");
    setPassword("");
    setCheckbox(false);
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          logIn();
          e.preventDefault();
        }}
        className="form-container"
      >
        <h1 className="login">Название веб-сайта</h1>
        <div className="border-line">
          <div className="control">
            <label>Логин</label>

            <input
              type="text"
              placeholder="введите электронной почты"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>

          <div className="control">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="checked"
              checked={checkbox}
              onChange={(e) => {
                setCheckbox(e.target.checked);
              }}
            />
            <label htmlFor="checked">согласен с офертой</label>
          </div>
          <span className="actions">
            <button
              className="hovertext"
              data-hover={
                input.length === 0 ||
                password.length === 0 ||
                checkbox === false
                  ? "Пожалуйста, заполните все поля"
                  : "все поля заполнены"
              }
              type="submit"
              disabled={
                input.length === 0 ||
                password.length === 0 ||
                checkbox === false
                  ? true
                  : false
              }
            >
              Войти
            </button>
          </span>
        </div>
        {sucessfullLogIn && (
          <div>
            <h2>
              You are log in !{" "}
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Check this ultra secret link
              </a>{" "}
            </h2>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
