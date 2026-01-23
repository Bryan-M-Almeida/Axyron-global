import "./header.scss";

const Header = () => {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-transparent py-5">
      <div className="container mx-auto px-6 flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2 p-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-brand font-black text-xl bg-white text-blue-900">
            M
          </div>
          <span className="text-xl font-brand font-extrabold tracking-tight text-white">
            Grupo MAVC
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
          >
            Início
          </a>
          <a
            href="#about"
            className="text-sm font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
          >
            Empresa
          </a>
          <a
            href="#services"
            className="text-sm font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
          >
            Serviços
          </a>
          <a
            href="#projects"
            className="text-sm font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
          >
            Portfólio
          </a>
          <a
            href="#team"
            className="text-sm font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
          >
            Equipe
          </a>
          <a
            href="#blog"
            className="text-sm font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
          >
            Contato
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all bg-white text-blue-900 hover:bg-blue-50"
          >
            Orçamento
          </a>
        </nav>

        <button className="md:hidden text-2xl">
          <a href="#contact">Orçamento</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
