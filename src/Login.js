import React from '../utils/MiniReact';
// eslint-disable-next-line import/no-cycle
import renderApp from '../index';

const STATE_TYPES = {
  SUBMITTED: 'SUBMITTED',
  NOT_SUBMITTED: 'NOT_SUBMITTED',
};

const state = {
  email: null,
  formState: STATE_TYPES.NOT_SUBMITTED,
};

export default function LoginPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    // const password = form.password.value;
    state.email = email;
    state.formState = STATE_TYPES.SUBMITTED;
    renderApp();
  };
  return (
    <div className="container">
      <main className="row justify-content-center">
        <div className="col-md-7 col-lg-5 py-5">
          {state.formState === STATE_TYPES.SUBMITTED ? (
            <h2>You are logged in successfully as {state.email}</h2>
          ) : (
            <div>
              <h2 className="text-center">Login</h2>
              <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label" name="password">
                    Password <span className="text-muted"></span>
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="col-12">
                  <button className="w-100 btn btn-primary btn-lg" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
