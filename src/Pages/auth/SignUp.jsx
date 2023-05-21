import { useContext} from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProviders";

const SignUp = () => {
  const { createUser, setuserprofilepicture } = useContext(AuthContext);

//   const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // console.log('register page location', location)

  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleRegister = (event) => {
    event.preventDefault();
    // setError();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password)

    //validation

    // if (password.length < 6) {
    //   setError("Please add at least 6 characters in your password");
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        // setError("");
        setuserprofilepicture(name, photo)
          .then((result) => {
            console.log(result.displayName);
          })
          .catch((error) => {
            console.log(error);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form action="" onSubmit={handleRegister}>
          <div className="card-body "  >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                {" "}
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-white btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p>
              <small>
                Have already an account?{" "}
                <Link to="/login">
                  <span className="text-red-600">Login</span>
                </Link>
              </small>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
