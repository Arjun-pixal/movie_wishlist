import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Watched from "./pages/Watched";
import "./styles.css";


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
