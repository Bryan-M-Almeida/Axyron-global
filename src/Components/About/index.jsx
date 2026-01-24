import {
  Target,
  Eye,
  ShieldCheck,
  Leaf,
  Gem,
  Handshake,
  MapPin,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Imagem experiência */}
          <div className="lg:w-1/2 relative">
            <img
              alt="Industrial Team"
              class="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
              src="https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"
            ></img>
            <div className="absolute bg-blue-600 text-white p-8 z-20 rounded-xl shadow-xl bottom-10 left-10 hidden md:block">
              <span className="block text-4xl font-black mb-1">+20</span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Anos de experiência
              </span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
              Nossa história
            </span>
            <h2 className="text-4xl mb:text-5xl font-brand font-black text-slate-900 mb-6 leading-tight">
              Desde 2012, transformando o setor industrial.
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              O <strong>Grupo MAVC</strong> nasceu com a missão de elevar o
              padrão de manutenção industrial no Brasil. Especializados em
              acesso por corda e reparos estruturais, rapidamente nos tornamos
              referência para as maiores empresas do mercado offshore e eólico.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                  <Target size={24} />
                  missão
                </h4>
                <p className="text-slate-600 text-sm">
                  Prover serviços técnicos de excelência em locais de difícil
                  acesso, garantindo a continuidade operacional com segurança
                  máxima.
                </p>
              </div>

              <div>
                <h4 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                  <Eye size={24} />
                  Visão
                </h4>
                <p className="text-slate-600 text-sm">
                  Ser o parceiro estratégico global nº 1 em manutenção preditiva
                  e corretiva para energias limpas até 2030.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg text-center hover:bg-blue-50 transition-colors flex items-center flex-col gap-2">
                <ShieldCheck size={24} className="text-blue-900" />
                <h5 className="font-bold text-slate-900 text-xs uppercase mb-1">
                  Segurança
                </h5>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg text-center hover:bg-blue-50 transition-colors flex items-center flex-col gap-2">
                <Gem size={24} className="text-blue-900" />
                <h5 className="font-bold text-slate-900 text-xs uppercase mb-1">
                  Qualidade
                </h5>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg text-center hover:bg-blue-50 transition-colors flex items-center flex-col gap-2">
                <Leaf
                  size={24}
                  className="text-blue-500 fill-blue-800 stroke-blue-600"
                />
                <h5 className="font-bold text-slate-900 text-xs uppercase text-center break-words break-all">
                  Sustentabilidade
                </h5>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg text-center hover:bg-blue-50 transition-colors flex items-center flex-col gap-2">
                <Handshake size={24} className="text-blue-900" />
                <h5 className="font-bold text-slate-900 text-xs uppercase mb-1 break-all">
                  Comprometimento
                </h5>
              </div>
            </div>

            <div className="w-full bg-slate-50 p-2 mt-3 border-l-3 border-blue-600 flex items-center gap-2">
              <MapPin size={24} className="text-blue-600" />

              <div className="flex flex-col items-start">
                <p className="font-bold text-slate-900">Região de atuação</p>
                <p className="text-slate-600 text-sm">Brasil, Américas e Europa</p>
                <p className="text-slate-400 text-xs mt-1">Sede principal: Unamar, RJ - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
