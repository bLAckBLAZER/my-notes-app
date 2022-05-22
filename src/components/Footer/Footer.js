import "../../styles/footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer" style={{ alignSelf: "flex-end" }}>
      <div className="footer-heading">Made with ❤️ by Omkar Jadhav</div>
      <ul className="socials">
        <li>
          <a href="https://github.com/bLAckBLAZER">
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/omkarmj/">
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/omjadhav85/">
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
