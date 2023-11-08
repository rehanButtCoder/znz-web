import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
// import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import { headerData } from "./HeaderData";
import { useDispatch, useSelector } from "react-redux";
import { userRemoveData } from "../../features/user/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  const logout = () => {
    // localStorage.removeItem("znz_website");
    dispatch(userRemoveData());
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };

  const profileImage = () => {
    return (
      <div className={style.profile__image}>
        <img
          src="https://spaarrow-app-bucket.s3.us-east-2.amazonaws.com/images/rfC142xbHssZF4V6rCeWclMGAtmGTnlUopj5OtUS.jpg"
          alt=""
        />
      </div>
    );
  };
  const redirection = () => {
    if (userData?.user?.role?.role === 'buyer') {
      // setTimeout(() => {
        navigate('/clientprofilepage'); // Redirect to the buyer profile
      // }, 100);
    } else {
      // setTimeout(() => {
        navigate('/seller-profile'); // Redirect to the seller profile
      // }, 100);
    }
  };
  return (
    <Navbar expand="lg">
      <Container className="d-flex j-center">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <div className={`${style.hederBtn} ${style.headerLeft}`}>
          <Link to="/">
            <img
              className={style.logo}
              src="/asserts/images/logo/ZNZ logo_1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="headerRight">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${style.hederBtn} me-auto`}>
              {headerData.map((item) => {
                return (
                  <>
                    {item.type === "client" && userData?.user?.role?.role === "buyer" ? (
                      <NavLink className="button navButton" to={item.link}>
                        {item.name}
                      </NavLink>
                    ) : item.type === "notLoggedIn" && !userData?.token ? (
                      <NavLink className="button navButton" to="/login">
                        Sign In
                      </NavLink>
                    ) : item.type === "default" ? (
                      <NavLink to={item.link}>{item.name}</NavLink>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </Nav>

            {userData?.token && (
              <NavDropdown
                className="custom-nav-dropdown mx-lg-5"
                title={profileImage()}
              >
                <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={redirection}>
                  <Link
                    to=""
                  // onClick={redirection}
                  >
                    Profile
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
