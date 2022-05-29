import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, Login, Signup, PageNotFound, Dashboard } from "./pages";
import { NavBar, Footer, SideNavBar, Loader } from "./components";
import { Redirect, PrivateRoute } from "./router";
import Logo from "./assets/images/notes-logo.png";
import { useAuth, useLoader } from "./contexts";
import { Toaster } from "react-hot-toast";

const App = () => {
  const {
    authState: { token },
  } = useAuth();

  const { isLoading } = useLoader();

  return (
    <div className="wrapper justify-between">
      <NavBar title="Subtle Notes" logo={Logo} />
      <main className="flex-1 flex gap-1 pos-rel">
        {token && <SideNavBar />}

        <Routes>
          <Route element={<Redirect />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/archive" element={<h1>Archive</h1>} />
            <Route path="/trash" element={<h1>Trash</h1>} />
          </Route>

          <Route
            path="*"
            element={
              <PageNotFound
                errorMsg="Oops! Looks like you have lost your way. The page you're looking for does not exist."
                gotoMsg="Go to Homepage"
                gotoPath="/"
              />
            }
          />
        </Routes>
        {isLoading && <Loader />}
      </main>

      <Toaster />

      <Footer />
    </div>
  );
};

export default App;
