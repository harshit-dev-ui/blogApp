import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "react-js-loader";
function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? <Loader /> : <>{children}</>;
}

export default Protected;

// if(true){
//   if (false) {
//     navigator("/login")
//   }
// }
