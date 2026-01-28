import { Eye } from "lucide-react";

const Gallery = () => {
  const fotos = [
    {
      id: 1,
      link: "",
      tittle: "",
      desc: "",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            Galeria
          </span>
          <h2 className="text-4xl font-brand font-black text-slate-900">
            Operações em campo
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {fotos.map((foto) => (
            <div
              key={foto.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl group relative"
            >
              <img
                src={foto.link}
                alt={foto.desc}
                title={foto.tittle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Eye size={35} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
