import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(120);

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }

    setLiked((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
          alt="Nature"
          className="w-full h-60 object-cover"
        />

        <div className="p-5">

          <h2 className="text-xl font-bold text-black">
            Beautiful Nature
          </h2>

          <p className="text-black mt-2">
            Enjoying the beauty of nature 🌿
          </p>

          <button
            onClick={handleLike}
            className={`mt-5 flex items-center gap-2 text-xl font-medium transition duration-300 ${
              liked
                ? "text-red-500"
                : "text-black hover:text-red-500"
            }`}
          >
            {liked ? "❤️" : "🤍"}
            {liked ? "Liked" : "Like"}
          </button>

          <p className="mt-3 text-black font-semibold">
            {likes} Likes
          </p>

        </div>

      </div>
    </div>
  );
}

export default App;