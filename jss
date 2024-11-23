function InputForm({ onSubmit }) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userInput">Enter your instructions:</label>
      <input
        type="text"
        id="userInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="E.g., Write a haiku about summer"
      />
      <button type="submit">Generate</button>
    </form>
  );
}
