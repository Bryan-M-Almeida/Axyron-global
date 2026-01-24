import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}
      `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2 p-2">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-brand font-black text-xl  ${scrolled ? "bg-blue-900 text-white" : "bg-white text-blue-900"}`}
          >
            M
          </div>
          <span
            className={`text-xl font-brand font-extrabold tracking-tight ${scrolled ? "text-blue-900" : "text-white"}`}
          >
            Grupo MAVC
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
          >
            Início
          </a>
          <a
            href="#about"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
          >
            Empresa
          </a>
          <a
            href="#services"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
          >
            Serviços
          </a>
          <a
            href="#projects"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
          >
            Portfólio
          </a>
          <a
            href="#team"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
          >
            Equipe
          </a>
          <a
            href="#blog"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
          >
            Blog
          </a>
          <a
            href="#contact"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
          >
            Contato
          </a>
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-blue-50 ${scrolled ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-blue-900 hover:bg-blue-50"}`}
          >
            Orçamento
          </a>
        </nav>

        <button className="md:hidden text-2xl">
          <AlignJustify
            size={24}
            className={`${scrolled ? "text-blue-900" : "text-white/90"} cursor-pointer`}
            strokeWidth={3}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
