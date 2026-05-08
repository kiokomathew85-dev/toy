function ToyCard({ toy, onLike, onDelete }) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>

      <img
        className="toy-avatar"
        src={toy.image}
        alt={toy.name}
      />

      <p>{toy.likes} Likes</p>

      <div className="buttonContainer">
        <button onClick={() => onLike(toy)}>Like ❤️</button>
        <button onClick={() => onDelete(toy.id)}>Delete 🗑</button>
      </div>
    </div>
  );
}

export default ToyCard;