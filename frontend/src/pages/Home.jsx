const Home = () => {
  const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay positive. Work hard. Make it happen.",
    "Don’t wait for opportunity. Create it."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to Task Manager</h2>
      <p className="text-gray-600 mb-6">Manage your tasks effectively with this app.</p>
      <p className="text-lg italic text-blue-700 dark:text-blue-300">“{randomQuote}”</p>
    </div>
  );
};

export default Home;
