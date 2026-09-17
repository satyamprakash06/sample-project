import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
    </main>
  );
}
