import React, { useEffect } from "react"
import LogoIMG from "../../images/logo.svg"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const StyledNavbar = styled.nav`
  &&& {
    background-color: ${({ theme }) => theme.colors.darkerGrey};
    box-shadow: 0 2px 3px #00000050;
    position: sticky;
    top: 0;
    left: 0;
    @media screen and (max-width: 1023px) {
      .navbar-burger {
        color: ${({ theme }) => theme.colors.primary};

        span {
          height: 3px;
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
          text-shadow: ${({ theme }) => theme.textShadow};
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
    text-shadow: ${({ theme }) => theme.textShadow};
    position: relative;

    :after {
      content: "";
      display: block;
      width: 80%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      bottom: 12px;
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

    @media screen and (min-width: 1100px) {
      font-size: 1.1rem;
    }
  }
`

const StyledLogo = styled.img`
  display: block;
  height: 40px;
  padding-left: 0.75rem;
  margin: auto;

  ${({ theme }) => theme.media.mobile} {
    height: 30px;
  }
`

const LogoLink = styled(Link)`
  display: flex;
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
      <div className="navbar-brand">
        <LogoLink to="/">
          <StyledLogo src={LogoIMG} alt="" />
        </LogoLink>

        <a
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
            className={`${pathname === "/projekty" && "active"}`}
          >
            Projekty
          </NavbarLink>

          <NavbarLink
            to="/technologie"
            className={`${pathname === "/technologie" && "active"}`}
          >
            Technologie
          </NavbarLink>

          <NavbarLink
            to="/kontakt"
            className={`${pathname === "/kontakt" && "active"}`}
          >
            Kontakt
          </NavbarLink>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
