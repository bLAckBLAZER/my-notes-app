import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, Login, Signup, PageNotFound } from "./pages";
import { NavBar, Footer, SideNavBar } from "./components";
import { Redirect, PrivateRoute } from "./router";
import Logo from "./assets/images/notes-logo.png";
import { useAuth } from "./contexts";

const App = () => {
  const {
    authState: { token },
  } = useAuth();

  return (
    <div className="wrapper justify-between">
      <NavBar title="Subtle Notes" logo={Logo} />
      <main className="flex-1 flex gap-1">
        {token && <SideNavBar />}

        <Routes>
          <Route element={<Redirect />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/archive" element={<h1>Archive</h1>} />
            <Route path="/trash" element={<h1>Trash</h1>} />
          </Route>

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
