import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row py-5 mt-4 align-items-center">
        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <img
            src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
            alt=""
            className="img-fluid mb-3 d-none d-md-block"
          />
          <h1>Create an Account</h1>
          <p className="font-italic text-muted mb-0">
            Designed to facilitate inclusive and accessible communication for
            individuals with disabilities. Serves as a versatile chat board that
            promotes a supportive environment for users of all abilities. Aims
            to break down barriers and foster meaningful connections within the
            disability community and beyond.
          </p>
        </div>

        <div className="col-md-7 col-lg-6 ml-auto">
          <form action="#">
            <div className="row">
              {/* <!-- First Name --> */}
              <div className="input-group col-lg-6 mb-4">
                <input
                  id="firstName"
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>

              {/* <!-- Last Name --> */}
              <div className="input-group col-lg-6 mb-4">
                <input
                  id="lastName"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>

              {/* <!-- Username --> */}
              <div className="input-group col-lg-6 mb-4">
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>

              {/* <!-- Email Address --> */}
              <div className="input-group col-lg-12 mb-4">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>

              {/* <!-- Pronouns --> */}
              <div className="input-group col-lg-12 mb-4">
                <select
                  id="pronoun"
                  name="pronountitle"
                  className="form-control custom-select bg-white border-left-0 border-md"
                >
                  <option value="">Choose your pronouns</option>
                  <option value="">He/Him</option>
                  <option value="">She/Her</option>
                  <option value="">Them/They</option>
                  <option value="">Xe/Xur</option>
                  <option value="">Choose not to Disclose</option>
                </select>
              </div>

              {/* <!-- Date of Birth --> */}
              <div className="input-group col-lg-12 mb-4">
                <input
                  id="DOB"
                  type="date"
                  name="DOB"
                  placeholder="Date of Birth"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>

              {/* <!-- Password --> */}
              <div className="input-group col-lg-6 mb-4">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>

              {/* <!-- Password Confirmation --> */}
              <div className="input-group col-lg-6 mb-4">
                <input
                  id="passwordConfirmation"
                  type="text"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  className="form-control bg-white border-left-0 border-md"
                />
              </div>

              {/* <!-- Terms and Conditions --> */}
              <div className="input-group col-lg-6 mb-4">
                <input type="checkbox" /> &nbsp;Accept&nbsp;
                <a href="this.props.url"> Terms & Conditions </a>
              </div>

              {/* <!-- Submit Button --> */}
              <div className="text-center form-group col-lg-12 mx-auto mb-0">
                <a href="this.props.url" className="btn btn-primary btn-block py-2">
                  <span className="font-weight-bold">Start Chatting</span>
                </a>
              </div>

              {/* <!-- Divider Text --> */}
              <div
                className="form-group col-lg-12 mx-auto d-flex align-items-center my-4"
              >
                <div className="border-bottom w-100 ml-5"></div>
                <span className="px-2 small text-muted font-weight-bold text-muted"
                >OR</span
                >
                <div className="border-bottom w-100 mr-5"></div>
              </div>

              {/* <!-- Already Registered --> */}
              <div className="text-center w-100">
                <p className="text-muted font-weight-bold">
                  Already Registered?
                  <a href="this.props.url" className="text-primary ml-2">Login</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
