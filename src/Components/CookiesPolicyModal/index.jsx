import { useEffect } from "react";

const CookiesPolicyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const esc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", esc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-slate-900 p-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white"
        >
          ✕
        </button>

        <h1 className="mb-4 text-2xl font-semibold text-white">
          Política de Cookies – Axyron Global
        </h1>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Esta Política de Cookies explica como a Axyron Global utiliza
            cookies e tecnologias similares em seu site, em conformidade com a
            LGPD, GDPR e demais legislações aplicáveis.
          </p>

          <h2 className="text-lg font-semibold text-white">
            1. O que são cookies
          </h2>
          <p>
            Cookies são pequenos arquivos armazenados no dispositivo do usuário
            que permitem o correto funcionamento do site e a coleta de dados
            estatísticos anônimos.
          </p>

          <h2 className="text-lg font-semibold text-white">
            2. Tipos de cookies utilizados
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Cookies estritamente necessários:</strong> garantem o
              funcionamento básico do site.
            </li>
            <li>
              <strong>Cookies de desempenho e análise:</strong> coletam dados
              estatísticos anonimizados sobre uso e navegação.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-white">
            3. Cookies de terceiros
          </h2>
          <p>
            O site pode utilizar serviços de terceiros (ex.: ferramentas de
            análise) que aplicam seus próprios cookies, sujeitos às políticas
            desses provedores.
          </p>

          <h2 className="text-lg font-semibold text-white">
            4. Gerenciamento de cookies
          </h2>
          <p>
            O usuário pode aceitar ou rejeitar cookies por meio do banner
            exibido ou configurar seu navegador para bloquear cookies.
          </p>

          <h2 className="text-lg font-semibold text-white">5. Atualizações</h2>
          <p>
            Esta Política pode ser atualizada a qualquer momento para refletir
            mudanças legais ou operacionais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyModal;
