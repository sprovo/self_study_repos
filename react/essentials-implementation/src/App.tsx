import React, { useState, useEffect } from "../react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log({ count });
  }, []);

  return (
    <div>
      <section>
        <h1 className=".header__1">Hello From React Clone</h1>
        <p>
          I am a p tag.
          <span style={{ display: "block", color: "red" }}>I am a span within a p tag.</span>
        </p>
      </section>
      <button type="button" onClick={() => setCount(count + 1)}>
        +1
      </button>
      {count}
      <button type="button" onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default App;
