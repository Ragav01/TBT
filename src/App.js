import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Navbar from "./components/Navbar";
import Tickets  from "./pages/Tickets";
import AddCyberTicket from "./pages/AddCyberTicket";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Navbar/>
          <div className="w-full">
            <Appbar/>
            <main className="p-4">
              <Routes>
                <Route path="tickets">
                  <Route index element={<Tickets/>}/>
                  <Route path="addcyberticket" element={<AddCyberTicket/>}/>
                </Route>
                <Route path="addticket" element={<Tickets/>}/>
                <Route path="editticket" element={<Tickets/>}/>
              </Routes>
            </main>
          </div>   
        </div>
      </Router>
    </>
  );
}

export default App;
