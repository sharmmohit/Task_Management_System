import React, { useContext, useEffect, useState } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  useEffect(() => {
    setLocalStorage();
  }, []);

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  const data = useContext(AuthContext); // Correctly getting context data
  console.log(data?.userData?.employees); // Safe access to employees

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser.role);
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogin = (email, password) => {
    console.log(`Attempting login with Email: ${email}, Password: ${password}`);

    if (email === "admin@me.com" && password === "123") {
      const adminUser = { role: "admin" };
      setUser(adminUser.role);
      setLoggedInUser(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    } else if (data?.userData?.employees) {
      const employee = data.userData.employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        const employeeUser = { role: "employee", ...employee };
        setUser(employeeUser.role);
        setLoggedInUser(employeeUser);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      } else {
        console.log("Invalid credentials");
      }
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        loggedInUser && <EmployeeDashboard data={loggedInUser} />
      )}
    </>
  );
};

export default App;
