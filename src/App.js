import Navigation from "./components/Navigation.js";
import LogRegForm from "./components/LogRegForm.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div className="center-container">
        <LogRegForm></LogRegForm>
      </div>
    </>
  );
}
export default App;
