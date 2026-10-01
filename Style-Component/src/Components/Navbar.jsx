import styled from "styled-components";

const Navbar = () =>{
    return(
    <Nav>
    <Logo>E-commerce</Logo>

    <NavLinks>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/About">About</NavItem>
        <NavItem href="/Services">Services</NavItem>
        <NavItem href="/Contact">Contact</NavItem>
    </NavLinks>

    <Button>Login</Button>
    </Nav>
    )
};

export default Navbar;


const Nav = styled.nav`
width : 100%;
h eight : 70px ;
display  :flex;
align-items : center;
justify-content : space-between;
padding : 0 40px;
background-color : #1e296b
`

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