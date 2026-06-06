import { useState } from "react";
import { useApolloClient } from "@apollo/client/react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(
    localStorage.getItem("library-user-token"),
  );
  const [errorMessage, setErrorMessage] = useState(null);
  const client = useApolloClient();

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  const onLogout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        {token && <button onClick={() => setPage("add")}>add book</button>}
        {!token && <button onClick={() => setPage("login")}>login</button>}
        {token && <button onClick={onLogout}>logout</button>}
      </div>

      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

      <Authors show={page === "authors"} token={token} />

      <Books show={page === "books"} />

      <NewBook show={page === "add"} />

      <LoginForm
        show={page === "login"}
        setToken={(t) => {
          setToken(t);
          setPage("authors");
        }}
        setError={notify}
      />
    </div>
  );
};

export default App;
