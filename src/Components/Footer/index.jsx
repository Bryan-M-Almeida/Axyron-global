import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";

import { useState } from "react";

/* Modal */
import TermsModal from "../TermModal";
import PrivacyModal from "../PrivacyModal";
import HSEModal from "../HSEModal";
import CertificationsModal from "../CertificationsModal";
import CookiesPolicyModal from "../CookiesPolicyModal";

const Footer = () => {
  /* Modal */
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openHSE, setOpenHSE] = useState(false);
  const [openCerts, setOpenCerts] = useState(false);
  const [openCookies, setOpenCookies] = useState(false);

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

            <div>
              <h4 className="font-bold mb-6 text-sm text-blue-500 uppercase tracking-widest">
                Links rápidos
              </h4>

              <ul className="space-y-4 text-slate-400 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Nossos serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Portfólio de obras
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-white transition-colors"
                  >
                    Equipe técnica
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:text-white transition-colors"
                  >
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
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Eólica/Offshore
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Manutenção de pás
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Inspeções END Offshore
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Acesso por cordas IRATA
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
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
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenPrivacy(true);
                    }}
                  >
                    Política de Privacidade
                  </a>
                  <PrivacyModal
                    isOpen={openPrivacy}
                    onClose={() => setOpenPrivacy(false)}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenCerts(true);
                    }}
                  >
                    Certificações
                  </a>
                  <CertificationsModal
                    isOpen={openCerts}
                    onClose={() => setOpenCerts(false)}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenHSE(true);
                    }}
                  >
                    Relatório de HSE
                  </a>
                  <HSEModal
                    isOpen={openHSE}
                    onClose={() => setOpenHSE(false)}
                  />
                </li>
                <li>
                  <a
                    href="https://wa.me/5521966476613"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
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

          <a
            href="#"
            className="hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              setOpenTerms(true);
            }}
          >
            Termos de uso
          </a>

          <TermsModal isOpen={openTerms} onClose={() => setOpenTerms(false)} />

          <a
            href="#"
            className="hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              setOpenCookies(true);
            }}
          >
            Cookies
          </a>
          <CookiesPolicyModal
            isOpen={openCookies}
            onClose={() => setOpenCookies(false)}
          />

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
