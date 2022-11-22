import React, { useState, useEffect } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
  const [isAuth, setIsAuth] = useState(false);
  // useEffect(() => {
  //   if (token === "token") {
  //     setIsAuth(true);
  //   }
  // },[]);
  const handleToogleIsAuth = () => {
    setIsAuth(prevState => !prevState);
  };
  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);
  const onLogin = () => {
    handleToogleIsAuth();
    localStorage.setItem("auth", "token");
  };
  const onLogOut = () => {
    handleToogleIsAuth();
    localStorage.removeItem("auth");
  };
  return (
    <CardWrapper>
      <Component
        isAuth={isAuth}
        onLogin={onLogin}
        onLogOut={onLogOut}
      />
    </CardWrapper>
  );
};

export default withFunctions;
