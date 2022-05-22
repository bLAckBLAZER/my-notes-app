import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, Login, Signup, PageNotFound } from "./pages";
import { NavBar, Footer } from "./components";
import Logo from "./assets/images/notes-logo.png";

const App = () => {
  return (
    <div className="wrapper justify-between">
      <NavBar title="Subtle Notes" logo={Logo} />
      <main className="flex-1 flex gap-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="*"
            element={
              <PageNotFound
                errorMsg="Oops! Looks like you have lost your way. The page you're looking for
does not exist.
"
                gotoMsg="Go to Homepage"
                gotoPath="/"
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
