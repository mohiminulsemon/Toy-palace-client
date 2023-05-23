import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProviders";

const Login = () => {

    const { signIn, signInWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // console.log('login page location', location)
  // const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
    
        if (password.length < 6) {
          setError('password must be at least 6 characters')
        }
        else {
          signIn(email, password)
          .then(result => {
              const loggedUser = result.user;
              // console.log(loggedUser);
              {location.state?.from?.pathname ? navigate(location.state.from.pathname) : navigate("/")}
              
          })
          .catch(error => {
             setError(error.message)
          })
            }
      };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            {location.state?.from?.pathname ? navigate(location.state.from.pathname) : navigate("/")}
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Login Now!</h1>
      <div className="bg-white shadow-md rounded px-8 py-6">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleGoogleSignIn}
            >
              Login with Google
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          New to the website?{" "}
          <Link to="/signup" className="text-indigo-500 font-bold">
            Create a new account
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Login;
