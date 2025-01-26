import "./styles.css";
import useLocalHost from "./useLocalHost";

export default function App() {
  const [value, setItem, removeItem] = useLocalHost("kunal", "student");
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>{value}</h1>
      <button onClick={() => setItem("employee")}>change</button>
      <button onClick={() => setItem("student")}>back</button>
      <button onClick={removeItem}>clear value</button>
    </div>
  );
}
