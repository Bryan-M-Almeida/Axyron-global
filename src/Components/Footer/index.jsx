import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-white pt-10 pb-10">
      <div className="flex flex-col items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div className="font-black text-md bg-blue-600 rounded-md px-2 py-1">
                  A
                </div>
                <span className="font-brand font-black">Axyron Global</span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Energizando o Futuro com Segurança e Excelência. Especialistas
                em manutenção industrial e soluções de engenharia para o futuro
                energético global.
              </p>

              <div className="flex gap-4 text-slate-400">
                <a href="#">
                  <FaInstagram size={20} />
                </a>

                <a href="#">
                  <FaWhatsapp size={20} />
                </a>

                <a href="#">
                  <FaLinkedin size={20} />
                </a>

                <a href="#">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            <div className="">
              <h4 className="font-bold mb-6 text-sm text-blue-500 uppercase tracking-widest">
                Links rápidos
              </h4>

              <ul className="space-y-4 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Nossos serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfólio de obras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Equipe técnica
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog e Notícias
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-start">
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-blue-500">
                Serviços
              </h4>

              <ul className="space-y-4 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Eólica/Offshore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Manutenção de pás
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Inspeções END Offshore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Acesso por cordas IRATA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tratamento anticorrosivo
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-start">
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-blue-500">
                Suporte
              </h4>

              <ul className="space-y-4 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Certificações
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Relatório de HSE
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Central de Atendimento
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 px-5 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-5 text-slate-500 text-xs">
          <a href="#" className="hover:text-white">
            &copy; 2026 Axyron Global. Todos os direitos reservados.
          </a>

          <a href="#" className="hover:text-white">
            Termos de uso
          </a>

          <a href="#" className="hover:text-white">
            Cookies
          </a>

          <a href="#" className="hover:text-white">
            Desenvolvido por <strong>Axyron Tech</strong>
          </a>

          <a href="#" className="hover:text-white">
            CNPJ <strong>47.242.176/0001-13</strong>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
