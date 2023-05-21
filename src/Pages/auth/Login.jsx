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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form action="" onSubmit={handleLogin}>
          <div className="card-body " >
            <div className="form-control" >
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name = "email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name = "password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 gap-2">
            <input className="btn text-white btn-primary" type="submit" value="Login" />
              <button className="btn-primary btn text-white "  onClick={handleGoogleSignIn}>Login with google</button>
            </div>
            <p>
              <small>
                New to website?{" "}
                <Link to="/signup">
                  <span className="text-red-600">Create New Account</span>
                </Link>
              </small>
            </p>
            <p>{error}</p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
