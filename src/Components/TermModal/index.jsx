import { useEffect } from "react";

import { FaGithub } from "react-icons/fa6";

const TermsModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur" onClick={onClose}>
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-slate-900 p-6 text-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 text-slate-400 hover:text-white"
          aria-label="Fechar termos de uso"
        >
          ✕
        </button>

        <h1 className="mb-4 text-2xl font-semibold text-white">
          Termos de Uso – Axyron Global
        </h1>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Ao acessar este site, o usuário declara que leu, compreendeu e
            aceita integralmente os presentes Termos de Uso e a Política de
            Privacidade aplicável.
          </p>

          <h2 className="text-lg font-semibold text-white">
            Identificação da Operação
          </h2>
          <p>
            Axyron Global é um grupo técnico-operacional em processo de formação
            empresarial, sediado no Brasil (Rio de Janeiro), atualmente operando
            sob o CNPJ 47.242.176/0001-13, registrado em nome de Alan Cícero de
            Almeida (MEI), com atuação nacional e internacional.
          </p>

          <h2 className="text-lg font-semibold text-white">
            Finalidade do Site
          </h2>
          <p>
            Este site possui caráter exclusivamente institucional e informativo,
            não constituindo oferta pública, proposta comercial vinculante,
            garantia técnica ou certificação.
          </p>

          <h2 className="text-lg font-semibold text-white">
            Conformidade Normativa
          </h2>
          <p>
            As atividades da Axyron Global observam normas técnicas e
            regulatórias nacionais e internacionais, incluindo ISO, IEC 61400,
            DNV, API, ASME, ASTM, ABNT e normas locais aplicáveis, conforme
            escopo contratual e legislação vigente.
          </p>

          <h2 className="text-lg font-semibold text-white">
            Saúde, Segurança e Meio Ambiente
          </h2>
          <p>
            As informações aqui apresentadas não substituem análises de risco,
            procedimentos operacionais, autorizações legais ou requisitos
            específicos de clientes e órgãos reguladores.
          </p>

          <h2 className="text-lg font-semibold text-white">
            Limitação de Responsabilidade
          </h2>
          <p>
            A Axyron Global não se responsabiliza por decisões técnicas,
            operacionais ou comerciais tomadas com base exclusiva nas
            informações deste site.
          </p>

          <h2 className="text-lg font-semibold text-white">
            Proteção de Dados
          </h2>
          <p>
            O tratamento de dados pessoais segue a LGPD (Brasil) e o GDPR (União
            Europeia), quando aplicável.
          </p>

          <h2 className="text-lg font-semibold text-white">
            Legislação Aplicável
          </h2>
          <p>
            Estes Termos são regidos pelas leis da República Federativa do
            Brasil, sem prejuízo da aplicação de legislações internacionais
            conforme o local de execução dos serviços.
          </p>

          <a
            className="pt-4 text-xs text-slate-400 flex items-center gap-2 justify-center hover:text-white transition-color duration-300"
            rel="noopener noreferrer"
            href="https://github.com/Bryan-M-Almeida"
            target="_blank"
          >
            Desenvolvimento e infraestrutura tecnológica: Bryan Maciel de
            Almeida – TI Axyron Global.
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
