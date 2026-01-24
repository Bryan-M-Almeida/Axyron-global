import { CircleCheck, Award } from "lucide-react";

const Seguranca = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-1/2">
            <span className="uppercase text-red-600 font-bold tracking-widest block">
              Segurança em primeiro lugar
            </span>

            <h2 className="font-brand text-4xl md:text-5xl text-slate-900 mb-6 font-black">
              Compromisso com o Zero Acidente
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No setor offshore e eólico, a segurança não é opcional. É a base
              de tudo o que fazemos. Mantemos rigorosos padrões internacionais e
              treinamentos contínuos para garantir que cada colaborador retorne
              para casa com segurança todos os dias.
            </p>

            <ul className="space-y-4 mb-10 text-sm">
              <li className="flex items-center gap-3 text-slate-700">
                <CircleCheck size={20} className="text-white fill-green-500" />
                Equipamentos de proteção (EPI/EPC) de última geração
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CircleCheck size={20} className="text-white fill-green-500" />
                Auditorias semanais de campo e análise de risco (APR)
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CircleCheck size={20} className="text-white fill-green-500" />
                Certificação IRATA para todos os técnicos em altura
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CircleCheck size={20} className="text-white fill-green-500" />
                Seguro de responsabilidade civil para operações críticas
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="">
                  <Award size={24} className="fill-blue-900 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seguranca;
