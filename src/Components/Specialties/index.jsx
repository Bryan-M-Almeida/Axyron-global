import services from "../../Data/services.json";
import {
  Wind,
  ChevronRight,
  Ship,
  HardHat,
  Paintbrush,
  Wrench,
  Fuel,
  Fan,
  Factory,
  Settings,
  Brush,
} from "lucide-react";

import { FaOilWell, FaIndustry } from "react-icons/fa6";
const iconMap = {
  wind: Wind,
  ship: Ship,
  hardhat: HardHat,
  paintbrush: Paintbrush,
  wrench: Wrench,
  fuel: Fuel,
  factory: Factory,
  settings: Settings,
  oil: FaOilWell,
  industry: FaIndustry,
  brush: Brush,
  fan: Fan,
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-black uppercase text-blue-400 tracking-widest text-sm mb-4 block">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-5xl font-brand font-black mb-6">
            Nossas soluções industriais
          </h2>
          <p>
            Combinamos tecnologia de ponta, pessoal altamente qualificado e
            gestão de riscos para entregar resultados consistentes em cada
            projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.id}
                className="p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {Icon && <Icon size={32} />}
                </div>

                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                  {item.setor}
                </span>

                <h3 className="text-2xl font-bold mb-4">{item.service}</h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {item.descricao}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold inline-flex items-center gap-2 group-hover:text-blue-400 transition-colors"
                >
                  Saiba mais
                  <ChevronRight size={24} className="text-xs" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between my-10 bg-blue-600 rounded-xl p-10 flex-col gap-4 md:flex-row">
          <div className="flex flex-col items-start">
            <h3 className="font-black text-xl">
              Precisa de um serviço customizado?
            </h3>
            <p className="text-sm text-blue-100/80">
              Nossa engenharia está pronta para desenvolver soluções específicas
              para o seu desafio.
            </p>
          </div>

          <a
            href=""
            className="bg-white hover:bg-blue-50 font-bold uppercase z-10 relative shadow-lg transition-all text-blue-900 py-4 px-10 rounded-xl"
          >
            Solicitar consultoria
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
