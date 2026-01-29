import {
  CircleCheck,
  BadgeCheck,
  UserCheck2,
  HardHat,
  Fan,
} from "lucide-react";

const Seguranca = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="md:w-1/2 w-full">
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
                <div className="flex items-center justify-around w-full">
                  <BadgeCheck size={25} className="fill-blue-900 text-white" />

                  <div className="flex flex-col items-start justify-center">
                    <span className="uppercase font-bold text-md">
                      Iso 9001
                    </span>
                    <span className="text-xs text-slate-600">
                      gestão de qualidade
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center justify-around w-full">
                  <UserCheck2 size={25} className="text-blue-900" />

                  <div className="flex flex-col items-start justify-center">
                    <span className="font-bold text-md">
                      IRATA internacional
                    </span>
                    <span className="text-xs text-slate-600">
                      Acesso por cordas
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center justify-around w-full">
                  <HardHat size={25} className="text-blue-900" />

                  <div className="flex flex-col items-start justify-center">
                    <span className="uppercase font-bold text-md">
                      Iso 45001
                    </span>
                    <span className="text-xs">Segurança do trabalho</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center justify-around w-full">
                  <Fan size={25} className="fill-blue-900 text-white" />

                  <div className="flex flex-col items-start justify-center">
                    <span className="uppercase font-bold text-md">
                      GWO Standard
                    </span>
                    <span className="text-xs">Treinamento eólico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="container flex gap-2 items-center justify-center">
              <img
                src="https://res.cloudinary.com/dx1rrsnob/image/upload/v1769684295/Foto_3_poxgia.jpg"
                alt="Serviço de Blade Repair na Suécia"
                title="Suécia"
                className="rounded-xl w-1/2 h-1/2 -translate-y-10 hover:-translate-y-15 transition-transform duration-500"
                loading="lazy"
              />
              <img
                src="https://res.cloudinary.com/dx1rrsnob/image/upload/v1769684295/Foto_5_p7wajd.jpg"
                title="Grécia"
                alt="Serviço de Blade repair na Grécia"
                className="rounded-xl w-1/2 h-1/2 -translate-y-7 hover:-translate-y-15 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seguranca;
