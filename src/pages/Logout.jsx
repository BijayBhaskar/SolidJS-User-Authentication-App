import { useNavigate } from "@solidjs/router";

export default function Logout({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Confirm Logout</button>
    </div>
  );
}
