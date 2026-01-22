import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
            <span>M</span>
            <h1>
                Grupo MAVC
            </h1>
        </div>

        <ul>
          <li>
            <a href="#home">início</a>
          </li>
          <li>
            <a href="#about">empresa</a>
          </li>
          <li>
            <a href="#services">serviços</a>
          </li>
          <li>
            <a href="#projects">portfólio</a>
          </li>
          <li>
            <a href="#team">equipe</a>
          </li>
          <li>
            <a href="#blog">blog</a>
          </li>
          <li>
            <a href="#contact">contato</a>
          </li>
        </ul>

        <div className="contato"><a href="#contact">Orçamento</a></div>
      </nav>
    </header>
  );
};

export default Header;
