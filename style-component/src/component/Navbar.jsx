import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo>MyWebsite</Logo>

      <NavLinks>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavLinks>

      <Button>Login</Button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #1e293b;
  box-sizing: border-box;
`;

const Logo = styled.h2`
  color: white;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #38bdf8;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background-color: #38bdf8;
  cursor: pointer;

  &:hover {
    background-color: #0ea5e9;
  }
`;