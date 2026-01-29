import { useState } from "react";
import projetos from "../../Data/projects.json";
const Portfolio = () => {
  const [setorAtivo, setSetorAtivo] = useState("Todos");

  const projetosFiltrados =
    setorAtivo === "Todos"
      ? projetos
      : projetos.filter((projeto) => projeto.setor.includes(setorAtivo));

  const setores = ["Todos", "Eólico", "Petróleo e gás", "Siderúrgica"];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <span className="uppercase text-blue-600 font-bold tracking-widest text-sm mb-4 block">
              Portfólio
            </span>
            <h2 className="text-slate-900 leading-tight font-brand text-3xl md:text-4xl font-black">
              Projetos em destaque
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {setores.map((setor) => (
              <button
                key={setor}
                onClick={() => setSetorAtivo(setor)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer
        ${
          setorAtivo === setor
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-white text-slate-600 hover:bg-slate-100"
        }
      `}
              >
                {setor}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetosFiltrados.map((projeto) => (
            <div
              key={projeto.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl grayscale hover:grayscale-0 transition duration-700"
              title={projeto.titulo}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                <span className="text-slate-100 uppercase font-bold tracking-widest text-xs mb-2">
                  {projeto.setor.join(" • ")}
                </span>

                <h4 className="text-3xl font-black text-white mb-2">
                  {projeto.titulo}
                </h4>

                <div className="flex items-center gap-6 text-white/90 text-sm">
                  <span>{projeto.empresa}</span>
                  <span>{projeto.local}</span>
                  <span>{projeto.ano}</span>
                </div>
              </div>

              {/* Conteúdo padrão */}
              <div className="p-8 group-hover:hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      {projeto.titulo}
                    </h4>
                    <p className="text-slate-500 text-sm">
                      {projeto.empresa} – {projeto.local}
                    </p>
                  </div>

                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">
                    {projeto.ano}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
