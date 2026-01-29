import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, Map, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [nomeInput, setNomeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [empresaInput, setEmpresaInput] = useState("");
  const [assuntoInput, setAssuntoInput] = useState("");
  const [mensagemInput, setMensagem] = useState("");
  const numero = "5521966476613";

  const handleClick = () => {
    const mensagem = `Esses são os meus dados:

Nome Completo: ${nomeInput}
Email: ${emailInput}
Empresa: ${empresaInput}
Assunto: ${assuntoInput}

Mensagem:
${mensagemInput}
`;

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 lef-0 w-full h-full opacity-5 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)"></path>
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              ></path>
            </pattern>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">
              contato
            </span>
            <h2 className="text-4xl md:text-5xl font-brand font-black mb-8">
              Vamos Energizar seu Projeto?
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Estamos prontos para atender demandas em todo o território
              nacional e internacional. Entre em contato para orçamentos ou
              parcerias técnicas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-1">
                    Telefone
                  </p>
                  <p className="text-sm font-bold">+55 22 99853-4631</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-1">
                    Whatsapp
                  </p>
                  <p className="text-sm font-bold">+55 21 96647-6613</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-1">
                    E-mail
                  </p>
                  <p className="text-sm font-bold">contato@axyronglobal.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Map size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-1">
                    Escritório
                  </p>
                  <p className="text-sm font-bold">
                    Rua coronel Luiz pereira dos santos, 80 <br /> Sala 101,
                    centro - Tanguá, RJ. <br /> CEP 24890-000
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-slate-400 text-sm mb-4 uppercase font-bold tracking-widest">
                Siga-nos
              </p>
              <div className="flex gap-4 ">
                <a
                  href=""
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl hover:bg-blue-600 transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href=""
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl hover:bg-blue-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href=""
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl hover:bg-blue-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Envie uma mensagem
              </h3>
              <form className="space-y-6" onSubmit={handleClick}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-slate-700 text-sm font-bold mb-2"
                    >
                      Nome completo
                    </label>
                    <input
                      onChange={(e) => setNomeInput(e.target.value)}
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                      placeholder="Seu nome"
                      id="name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmailInput(e.target.value)}
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                      placeholder="Seu@email.com"
                      id="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-slate-700 text-sm font-bold mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    onChange={(e) => setEmpresaInput(e.target.value)}
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                    placeholder="Nome da sua empresa"
                    id="empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-slate-700 text-sm font-bold mb-2"
                  >
                    Assunto *
                  </label>
                  <select
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                    id="assunto"
                    onChange={(e) => setAssuntoInput(e.target.value)}
                    required
                  >
                    <option value="" selected disabled>
                      Selecione
                    </option>
                    <option value="Orçamento para eólica">
                      Orçamento para eólica
                    </option>
                    <option value="Manutenção Offshore">
                      Manutenção Offshore
                    </option>
                    <option value="Trabalhe Conosco">Trabalhe Conosco</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-slate-700 text-sm font-bold mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    required
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900"
                    placeholder="Como podemos ajudar?"
                    id="mensagem"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg uppercase cursor-pointer"
                >
                  Enviar solicitação
                </button>
              </form>
            </div>
            <h3 className="text-center mt-8 font-bold uppercase text-blue-400">
              Onde estamos?
            </h3>
            <div className="mt-8 rounded-3xl overflow-hidden h-64 grayscale shadow-lg relative border-4 border-slate-800 hover:grayscale-0 transition duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29438.727287111928!2d-42.742219615480465!3d-22.7341537745825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRua%20coronel%20Luiz%20pereira%20dos%20santos%2C%2080%20-%20centro%20-%20Tangu%C3%A1%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1769601545910!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
