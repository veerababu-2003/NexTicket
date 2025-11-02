import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chatbot from "./components/Chatbot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import KnowledgeBase from "./pages/KnowledgeBase";
import Profile from "./pages/Profile";

function App() {
  // For simplicity, assume authenticated; in real app, use auth state
  const isAuthenticated = true; // TODO: integrate with auth

  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 overflow-auto p-4">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/knowledge-base" element={<KnowledgeBase />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
          <Chatbot />
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
