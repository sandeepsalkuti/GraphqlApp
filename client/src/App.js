import "./App.css";
import logo from "./logo.png";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="spacex logo"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="/launch/:flight_number" element={<Launch />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
