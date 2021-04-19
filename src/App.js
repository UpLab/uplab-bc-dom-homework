import React from '../utils/MiniReact';

export default function App() {
  return (
    <div className="container">
      <main className="row justify-content-center">
        <div className="col-md-7 col-lg-5 py-5">
          <h2 className="text-center">Login</h2>
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="email" className="form-label"
                >Email <span className="text-muted"></span
              ></label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-12">
              <label htmlFor="password" className="form-label"
                >Password <span className="text-muted"></span
              ></label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="col-12">
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
