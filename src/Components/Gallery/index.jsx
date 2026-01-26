import { Eye } from "lucide-react";

const Gallery = () => {
  const fotos = [
    {
      id: 1,
      link: "https://wallpapers.com/images/featured/neji-ia0cobehtumhtmwv.jpg",
      tittle: "mato",
      desc: "",
    },
    {
      id: 2,
      link: "https://i.pinimg.com/736x/b6/7d/22/b67d220325853bdc7116f79b38f6e37d.jpg",
      tittle: "mato",
      desc: "",
    },
    {
      id: 3,
      link: "https://i.pinimg.com/1200x/f4/7c/1a/f47c1a980ade22b4106559349f81d088.jpg",
      tittle: "mato",
      desc: "",
    },
    {
      id: 4,
      link: "https://i.redd.it/dcgcrvejc9x41.jpg",
      tittle: "mato",
      desc: "",
    },
    {
      id: 5,
      link: "https://i.pinimg.com/736x/62/ed/b8/62edb8be3295c6c7f51cfa6a5320bd07.jpg",
      tittle: "mato",
      desc: "",
    },
    {
      id: 6,
      link: "https://picsum.photos/seed/gall6/800/600",
      tittle: "mato",
      desc: "",
    },
    {
      id: 7,
      link: "https://i.pinimg.com/736x/10/d8/5e/10d85ed6fd6c4458b7b6b09b84f43d7b.jpg",
      tittle: "mato",
      desc: "",
    },
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
