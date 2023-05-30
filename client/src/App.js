import "./App.css";
import "./bootstrap.min.css";
import Login from "./Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/threads" element={<Threads data={isbn} />} />
        <Route path="/individualthread" element={<Results data={isbn} />} />
      </Routes>
    </div>
  );
}

export default App;
