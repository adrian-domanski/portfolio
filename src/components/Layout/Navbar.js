import React, { useEffect } from "react"
import LogoIMG from "../../images/logo.svg"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const StyledNavbar = styled.nav`
  &&& {
    padding: 0 0.75rem;
    background-color: ${({ theme }) => theme.colors.darkerGrey};
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    position: sticky;

    top: 0;
    left: 0;
    @media screen and (max-width: 1023px) {
      .navbar-burger {
        color: ${({ theme }) => theme.colors.primary};

        &.is-active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        span {
          height: 3px;
          width: 20px;
          left: calc(50% - 9px);

          :nth-child(1) {
            top: calc(50% - 7px);
          }

          :nth-child(3) {
            top: calc(50% + 5px);
          }
        }
      }
      .navbar-menu {
        .navbar-item.has-dropdown.is-hoverable,
        .navbar-dropdown {
          padding: 0;
        }
        background-color: #292929;
        text-align: center;
        padding: 0;
        .navbar-item {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 1.2rem;
          padding: 1.2rem 1rem;
          :hover {
            color: ${({ theme }) => theme.colors.primary};
            background-color: unset;
          }
        }
      }
    }
  }
`

const NavbarLink = styled(Link).attrs({ className: "navbar-item" })`
  &&& {
    font-size: 1rem;
    padding: 1.2rem 1rem;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;

    :after {
      content: "";
      display: block;
      width: 80%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      bottom: 15px;
      left: 10%;
      transform: scaleX(0);
      transition: transform 0.1s ease-out;
    }

    &.active:after {
      transform: scaleX(1);
    }

    :hover {
      color: ${({ theme }) => theme.colors.primary};
      background-color: unset;

      :after {
        transform: scaleX(1);
      }
    }

    :focus {
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.darkGrey};
      border: none;
      outline: none;
    }

    @media screen and (min-width: 1100px) {
      font-size: 1.1rem;
    }
  }
`

const StyledLogo = styled.img`
  display: block;
  height: 40px;
  margin: auto;

  @media screen and (max-width: 1023px) {
    height: 30px;
  }
`

const LogoLink = styled(Link)`
  display: flex;
`

const NavbarWrapper = styled.div`
  ${({ theme }) => theme.media.desktop} {
    max-width: ${({ theme }) => theme.pageWideSectionMaxWidth};
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
  }
`

const Navbar = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    )

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)
          el.classList.toggle("is-active")
          $target.classList.toggle("is-active")
        })
      })
    }
  }, [])

  return (
    <StyledNavbar
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <NavbarWrapper>
        <div className="navbar-brand">
          <LogoLink to="/">
            <StyledLogo
              src={LogoIMG}
              alt="Logo, tworzenie stron internetowych Adrian Domański"
            />
          </LogoLink>

          <a
            href="/"
            onClick={e => e.preventDefault()}
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <NavbarLink to="/" className={`${pathname === "/" && "active"}`}>
              Strona Główna
            </NavbarLink>

            <NavbarLink
              to="/projekty"
              className={`${
                (pathname === "/projekty" || pathname === "/projekty/") &&
                "active"
              }`}
            >
              Projekty
            </NavbarLink>

            <NavbarLink
              to="/technologie"
              className={`${
                (pathname === "/technologie" || pathname === "/technologie/") &&
                "active"
              }`}
            >
              Technologie
            </NavbarLink>

            <NavbarLink
              to="/kontakt"
              className={`${
                (pathname === "/kontakt" || pathname === "/kontakt/") &&
                "active"
              }`}
            >
              Kontakt
            </NavbarLink>
          </div>
        </div>
      </NavbarWrapper>
    </StyledNavbar>
  )
}

export default Navbar
