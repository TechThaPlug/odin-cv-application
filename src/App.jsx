import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import "./styles/app.css";

function App() {
  return (
    <main className="app">
      <h1>CV Builder</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </main>
  );
}

export default App;
