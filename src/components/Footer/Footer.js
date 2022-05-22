import "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer" style={{ alignSelf: "flex-end" }}>
      <div className="footer-heading">Made with ❤️ by Omkar Jadhav</div>
      <ul className="socials">
        <li>
          <a href="https://github.com/bLAckBLAZER">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/omkarmj/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/omjadhav85/">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
