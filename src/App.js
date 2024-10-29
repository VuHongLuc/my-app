import "./App.css";
// import "./Components/Table/Table.js";
import Table from "./Components/Table/Table.js";

function App() {
  return (
    <div className="App">
        <h1>Bảng Quản Lý Sinh Viên</h1>
        <button class="btn add-button">ADD</button>
        <Table></Table>
    </div>
  );
}

export default App;
