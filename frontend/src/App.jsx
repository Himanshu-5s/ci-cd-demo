import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }

        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setError("Could not connect to backend");
      });
  }, []);

  return (
    <div>
      <h1>CI/CD Demo</h1>

      <p>Frontend: React + Nginx</p>

      <p>
        Backend:{" "}
        {error ? error : message}
      </p>
    </div>
  );
}

export default App;