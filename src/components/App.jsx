import { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const API = "http://localhost:3000/toys";
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setToys);
  }, []);

  function addToy(newToy) {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => setToys((prev) => [...prev, data]));
  }

  function handleLike(toy) {
    fetch(`${API}/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((res) => res.json())
      .then((updated) =>
        setToys((prev) =>
          prev.map((t) => (t.id === updated.id ? updated : t))
        )
      );
  }

  function handleDelete(id) {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    }).then(() =>
      setToys((prev) => prev.filter((toy) => toy.id !== id))
    );
  }

  return (
    <>
      <Header />
      <ToyForm addToy={addToy} />
      <ToyContainer
        toys={toys}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;