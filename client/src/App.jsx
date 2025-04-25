import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-screen-xl md:px-6 mx-auto py-4">
      <Navbar />
      <main className="mt-8 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
