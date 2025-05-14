import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MinhaEmpresa. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
