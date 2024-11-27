// import { Router, Routes, Route, Navigate } from "@solidjs/router";
import { Router, Routes, Route, Navigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Protected from "./pages/Protected";
import Navbar from "./components/Navbar";

// Simulated authentication state
const [isAuthenticated, setIsAuthenticated] = createSignal(false);

// Route guard function
const requireAuth = () =>
  isAuthenticated() ? <Protected /> : <Navigate href="/login" />;

export default function App() {
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated()} />
      <Routes>
        <Route
          path="/login"
          component={() => <Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/logout"
          component={() => <Logout setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/protected" component={requireAuth} />
      </Routes>
    </Router>
  );
}




// import { Routes, Route, Navigate } from "@solidjs/router";
// import { createSignal } from "solid-js";
// import Login from "./pages/Login";
// import Logout from "./pages/Logout";
// import Protected from "./pages/Protected";
// import Navbar from "./components/Navbar";

// // Simulated authentication state
// const [isAuthenticated, setIsAuthenticated] = createSignal(false);

// // Route guard function
// const requireAuth = () => (isAuthenticated() ? <Protected /> : <Navigate href="/login" />);

// export default function App() {
//   return (
//     <>
//       <Navbar isAuthenticated={isAuthenticated()} />
//       <Routes>
//         <Route path="/login" component={() => <Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/logout" component={() => <Logout setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/protected" component={requireAuth} />
//       </Routes>
//     </>
//   );
// }







// import logo from './logo.svg';
// import styles from './App.module.css';

// function App() {
//   return (
//     <div class={styles.App}>
//       <header class={styles.header}>
//         <img src={logo} class={styles.logo} alt="logo" />
//         <p>
//           Edit <code>src/App.jsx</code> and save to reload.
//         </p>
//         <a
//           class={styles.link}
//           href="https://github.com/solidjs/solid"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Solid
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
