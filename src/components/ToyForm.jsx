import { useState } from "react";

function ToyForm({ addToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // safety check (prevents empty submissions)
    if (!name || !image) return;

    const newToy = {
      name: name,
      image: image,
      likes: 0,
    };

    console.log("FORM SUBMITTED:", newToy); // debug check

    addToy(newToy); // 🔥 sends data to App.jsx

    setName("");
    setImage("");
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        
        <input
          className="input-text"
          type="text"
          placeholder="Toy name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input-text"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="submit" type="submit">
          Add Toy
        </button>

      </form>
    </div>
  );
}

export default ToyForm;