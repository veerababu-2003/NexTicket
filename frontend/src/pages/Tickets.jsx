import React, { useState } from "react";

const Tickets = () => {
  const [tickets, setTickets] = useState([
    { id: 1, title: "Issue with login", status: "Open", priority: "High" },
    { id: 2, title: "Feature request", status: "Resolved", priority: "Medium" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTicket, setNewTicket] = useState({ title: "", description: "" });

  const handleCreate = () => {
    if (newTicket.title && newTicket.description) {
      setTickets([
        ...tickets,
        {
          id: tickets.length + 1,
          title: newTicket.title,
          status: "Open",
          priority: "Medium",
        },
      ]);
      setNewTicket({ title: "", description: "" });
      setShowForm(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Tickets</h1>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {showForm ? "Cancel" : "Create New Ticket"}
      </button>
      {showForm && (
        <div className="mb-4 p-4 bg-white rounded shadow">
          <input
            type="text"
            placeholder="Title"
            value={newTicket.title}
            onChange={(e) =>
              setNewTicket({ ...newTicket, title: e.target.value })
            }
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={newTicket.description}
            onChange={(e) =>
              setNewTicket({ ...newTicket, description: e.target.value })
            }
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleCreate}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      )}
      <div className="space-y-2">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">{ticket.title}</h2>
            <p>
              Status: {ticket.status} | Priority: {ticket.priority}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
