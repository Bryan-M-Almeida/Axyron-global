import "./hero.scss";
import { ChevronDown, ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filtro">
        <div className="absolute inset-0 bg-blue-950/80 gradient-overlay"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="my-20 inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm mb-6 border border-blue-400/30 backdrop-blur-sm">
            Líder em Soluções Industriais
          </span>
          <h1 className="text-5xl md:text-7xl font-brand font-black text-white mb-6 leading-tight">
            Excelência Operacional
            <br />
            <span className="text-blue-400">Eólico, Óleo & Gás.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            O grupo oferece soluções de alta complexidade técnica em ambientes
            extremos, priorizando a segurança e a integridade dos seus ativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href=""
              className="px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              Nossos Serviços <ArrowRight size={20} />
            </a>

            <a
              href=""
              className="px-10 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20 backdrop-blur-md flex items-center justify-center"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50">
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
