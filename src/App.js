import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Navbar from "./components/Navbar";
import Tickets  from "./pages/Tickets";
import AddTicket from "./pages/AddTicket";

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
                  <Route path="addticket" element={<AddTicket/>}/>
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
