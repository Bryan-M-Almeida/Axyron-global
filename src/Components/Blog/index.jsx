import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
    {
      id: 1,
      link: "",
      imagem:
        "https://www.einerd.com/wp-content/uploads/2024/08/jujutsu-kaisen-e1724377468589.jpg",
      tittle: "O futuro da energia offshore no Brasil",
      descricao:
        "Análise sobre as novas regulamentações e o potencial da costa brasileira para eólica offshore.",
      data: "12 mai, 2024",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold uppercase block tracking-widest text-sm mb-4">
            Insights
          </span>
          <h2 className="text-4xl mb:text-5xl font-brand font-black text-slate-900 mb-6">
            Últimas do setor
          </h2>
          <p className="text-slate-600 text-lg">
            Acompanhe as tendências tecnológicas e novidades sobre o mercado de
            energia e segurança industrial.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto scroll-smooth pb-4">
          {posts.map((post) => {
            return (
              <article className="group cursor-pointer min-w-[320px] max-w-[320px]">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <img
                    src={post.imagem}
                    alt={post.descricao}
                    title={post.tittle}
                    className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-md tracking-wider">
                      Notícias
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <Calendar size={20} />
                  <span>{post.data}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.tittle}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {post.descricao}
                </p>
                <a
                  href="#"
                  className="font-bold text-sm flex items-center gap-2 text-slate-900 hover:gap-4 transition-all"
                >
                  Ler Artigo Completo
                  <ArrowRight size={25} className="text-blue-600" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
