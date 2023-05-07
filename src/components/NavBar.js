import React from "react";

export const Navbar = () => {
  //navigation bar start here
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="row collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="col navbar-nav mt-2 mt-lg-0 ms-2 me-2">
            <li class="nav-item active col-2 ms-4">
              <a class="nav-link text-light" href="/dashboard">
                DASHBOARD <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item col-1">
              <a class="nav-link text-light" href="/login">
                SIGNIN
              </a>
            </li>
            <li class="nav-item col-1">
              <a class="nav-link text-light" href="/signup">
                SIGNUP
              </a>
            </li>
          </ul>
          <form class="col form-inline my-2 my-0 justify-content-between ">
            <div className="row me-2 ">
              <input
                class="form-control mr-sm-2 col"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="col-1 btn btn-success ms-2 ps-2 my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};
