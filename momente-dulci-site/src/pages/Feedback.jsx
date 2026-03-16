import { useState, useEffect } from "react";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [reviews, setReviews] = useState([]);

  // recenzii fictive inițiale cu rating
  const initialReviews = [
    {
      name: "Ana Popescu",
      message: "Torturile sunt absolut delicioase!",
      rating: 5,
    },
    {
      name: "Mihai Ionescu",
      message:
        "Am comandat un tort pentru ziua de naștere și toți au fost încântați.",
      rating: 4,
    },
    {
      name: "Ioana Marinescu",
      message: "Serviciul clienți foarte prompt și prietenos.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews"));
    if (saved) setReviews(saved);
    else setReviews(initialReviews);
  }, []);

  function submit(e) {
    e.preventDefault();
    if (!name || !message) return;
    const newReview = { name, message, rating };
    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setName("");
    setMessage("");
    setRating(5);
  }

  // functie pentru a afisa stele
  function renderStars(num) {
    return "★".repeat(num) + "☆".repeat(5 - num);
  }

  return (
    <section className="bg-teal-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-teal-700 mb-12">
          Feedback clienți
        </h1>

        {/* Recenzii */}
        <div className="space-y-6 mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <strong className="block text-lg text-teal-600 mb-1">
                {r.name}
              </strong>
              <div className="text-yellow-400 mb-2">
                {renderStars(r.rating)}
              </div>
              <p className="text-gray-700">{r.message}</p>
            </div>
          ))}
        </div>

        {/* Formular */}
        <form
          onSubmit={submit}
          className="space-y-4 bg-white rounded-xl p-6 shadow-lg"
        >
          <input
            type="text"
            placeholder="Nume"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <textarea
            placeholder="Părerea ta"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <label className="block text-gray-700 font-semibold">Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value={5}>5 - Excelent</option>
            <option value={4}>4 - Foarte bun</option>
            <option value={3}>3 - Bun</option>
            <option value={2}>2 - Satisfăcător</option>
            <option value={1}>1 - Nesatisfăcător</option>
          </select>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 transition-colors text-white px-6 py-3 rounded font-semibold w-full"
          >
            Trimite feedback
          </button>
        </form>
      </div>
    </section>
  );
}
