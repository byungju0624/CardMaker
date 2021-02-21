import React, { useState } from "react";
import "./app.css";
import Login from "./components/login/login.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Login isLogin={isLogin} />
    </>
  );
}

export default App;
