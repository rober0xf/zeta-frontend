import { BrowserRouter as Router, Route, Routes } from "react-router";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import About from "./containers/pages/About";
import Models from "./containers/pages/Models";
import Pricing from "./containers/pages/Pricing";
import Research from "./containers/pages/Research";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* we define the routes here */}
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
