import { Appbar } from "./components/Appbar";
import Navbar from "./components/Navbar";
import { Tickets } from "./pages/Tickets";

function App() {
  return (
    <>
      <div className="flex">
        <Navbar/>
        <div className="w-full">
          <Appbar/>
          <main className="p-4">
            <Tickets/>
          </main>
        </div>   
      </div>
    </>
  );
}

export default App;
