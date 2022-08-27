import SelectVariants from "./components/dropdown";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 80,
        }}
      >
        <SelectVariants />
      </div>
    </div>
  );
}

export default App;
