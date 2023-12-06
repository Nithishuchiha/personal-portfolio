// import "../src/Styles/background.css";
import "./Styles/background.css";
import Aboutme from "./component/Aboutme";

// import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-#0a111d-800 via-#0a111d-900 to-#0c2343 p8">
      {/* <h1 className="texr-3xl font-bold underline">Hello world</h1> */}
      {/* <Navbar /> */}
      <Aboutme />/
    </div>
  );
};

export default App;
