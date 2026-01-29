import equipe from "../../Data/team.json";

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            Especialistas
          </span>

          <h2 className="text-4xl md:text-5xl capitalize font-brand font-black text-slate-900 mb-6">
            Corpo técnico qualificado
          </h2>

          <p className="text-slate-600 text-lg">
            Nossa equipe é composta por profissionais certificados
            internacionalmente e com vasta experiência em ambientes industriais
            de alta periculosidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {equipe.map((funcionario) => {
            return (
              <div key={funcionario.id} className="text-center group">
                <a
                  href={funcionario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                    <img
                      src={funcionario.imagem}
                      alt={funcionario.nome}
                      title={funcionario.nome}
                      className="w-64 h-64 object-cover rounded-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300 shadow-xl"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">
                    {funcionario.nome}
                  </h4>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                    {funcionario.cargo}
                  </p>
                  <p className="text-slate-600 text-sm mb-6 px-4">
                    {funcionario.descricao}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {funcionario.certificacao.map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded-full"
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-24 p-12 bg-slate-50 rounded-3xl text-center border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Acredita no seu potencial?
          </h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Estamos sempre em busca de novos talentos certificados IRATA e GWO
            para compor nossa força de trabalho.
          </p>

          <a
            href="#contato"
            className="text-blue-600 font-bold border-b-2 border-blue-600 hover:text-blue-800 hover:border-blue-800 transition-all"
          >
            Envie seu currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
