import { BrowserRouter as Router, Route, Routes } from "react-router";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
