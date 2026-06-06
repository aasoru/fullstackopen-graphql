import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { EDIT_AUTHOR } from "../queries";

const SetBornForm = ({ authors }) => {
  const [name, setName] = useState(authors[0].name);
  const [born, setBorn] = useState("");

  const [editAuthor] = useMutation(EDIT_AUTHOR);

  const submit = (event) => {
    event.preventDefault();

    editAuthor({ variables: { name, setBornTo: Number(born) } });

    setBorn("");
  };

  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div>
          <select
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          >
            {authors.map((a) => (
              <option key={a.id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="born">born</label>
          <input
            id="born"
            type="number"
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default SetBornForm;
