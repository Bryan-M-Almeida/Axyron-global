import { ChevronDown } from "lucide-react";
import { useState } from "react";
const Faq = () => {
  const [estado, setEstado] = useState(false);

  const faqs = [
    {
      id: 1,
      pergunta: "Quais são as principais certificações da equipe?",
      resposta:
        "Nossa equipe possui certificações internacionais como IRATA (Níveis 1, 2 e 3), GWO (Global Wind Organisation), HUET e CBSP para operações offshore.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
              Faq
            </span>
            <h2 className="text-4xl font-brand font-black text-slate-900 mb-6 leading-tight">
              Dúvidas frequentes
            </h2>
            <p className="text-slate-600 mb-8">
              Confira as perguntas mais comuns sobre nossas operações, segurança
              e contratação.
            </p>
            <div className="p-6 bg-blue-600 rounded-2xl text-white">
              <h4 className="font-bold mb-2">Não encontrou sua resposta?</h4>
              <p className="text-sm text-blue-100 mb-4">
                Nossa equipe comercial está pronta para tirar suas dúvidas em
                tempo real.
              </p>
              <a
                href="#contact"
                className="font-bold text-white border-b border-white hover:opacity-80 transition-opacity"
              >
                Contate-nos agora
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border-slate-100 overflow-hidden"
                >
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => setEstado(!estado)}
                  >
                    <span className="font-bold text-slate-800 pr-8">
                      {item.pergunta}
                    </span>
                    <ChevronDown size={24} className={`${estado === false ? "rotate-0" : "rotate-180"} transition-transform duration-300`}/>
                  </button>

                  <div
                    className={`p-6 pt-0 text-slate-600 border-t border-slate-50 leading-relaxed ${estado === false ? "hidden" : "block"}`}
                  >
                    {item.resposta}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
