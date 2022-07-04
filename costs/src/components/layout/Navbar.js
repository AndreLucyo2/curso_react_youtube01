import { Link } from "react-router-dom";
import Container from "./Container";

function Navbar() {
  return (
    <Container customClass="min-height">
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo projeto</Link>
      </div>
    </Container>
  );
}

export default Navbar;
