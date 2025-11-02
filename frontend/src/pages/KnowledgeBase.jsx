import React, { useState } from "react";

const KnowledgeBase = () => {
  const [search, setSearch] = useState("");
  const articles = [
    { id: 1, title: "How to reset password", content: "Go to settings..." },
    {
      id: 2,
      title: "Troubleshooting login issues",
      content: "Check your email...",
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Knowledge Base</h1>
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <div key={article.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
