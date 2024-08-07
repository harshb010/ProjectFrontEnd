import { UseSelector, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  let ans = useSelector((state) => state.cart.value)
  
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="aboutus">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="cart">
                UsersList
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="form">
                Add User
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="two">
                Two
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="three">
                Three
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="error">
                Error
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="main">
                Main
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="cart1">
                Cart1({ans.length})
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Header;
