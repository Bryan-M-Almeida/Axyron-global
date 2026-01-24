const Carrossel = () => {
  const clientes = [
    {
      nome: "Vestas",
      logo: "https://cdn.worldvectorlogo.com/logos/vestas-1.svg",
    },
    {
      nome: "Muehlhan",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Muehlhan_logo.svg/2560px-Muehlhan_logo.svg.png",
    },
    {
      nome: "Flex Wind",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjO52NK3aoDk1nkGlSI8URYMUiM-i51EXGcw&s",
    },
    {
      nome: "Petrobras",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Logo_petrobras.gif",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest">
          Confiam no nosso trabalho
        </h3>
      </div>

      <div className="relative flex">
        <div className="flex gap-12 items-center animate-scroll whitespace-nowrap px-4">
          {clientes.map((cliente) => (
            <div
              key={cliente.nome}
              className="flex items-center gap-3 px-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={cliente.logo}
                alt={cliente.nome}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-slate-400">
                {cliente.nome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carrossel;
