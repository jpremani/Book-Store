import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { login, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const form1 = location.state?.form?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login Succefull!!");
        navigate(form1, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  //Sign Up With google accounts
  const handleRegister = () => {
    loginwithGoogle()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate(form, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(errorMessage);
        // ...
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Log in Form</h1>
            </div>
            <form className="divide-y divide-gray-200" onSubmit={handleLogin}>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                </div>
                {error ? (
                  <p className="text-red-700 text-base">
                    Email and password not correct{" "}
                  </p>
                ) : (
                  ""
                )}
                <p>
                  If you haven't an account
                  <Link to="/signup" className="text-blue-700 underline">
                    Sign Up here
                  </Link>
                </p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-6 py-2">
                    Login
                  </button>
                  <hr />
                  <div className="flex w-full items-center flex-col mt-5 gap-3">
                    <button className="block" onClick={handleRegister}>
                      <img
                        src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951"
                        alt="Google"
                        className="w-12 h-12 inline-block mt-4"
                      ></img>
                      Login with Google
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
