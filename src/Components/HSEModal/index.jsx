import { useEffect } from "react";

const HSEModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-slate-900 p-6 text-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white"
          aria-label="Fechar HSE"
        >
          ✕
        </button>

        <h1 className="mb-4 text-2xl font-semibold text-white">
          Declaração de Compromisso com Saúde, Segurança e Meio Ambiente (HSE)
        </h1>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            A Axyron Global reafirma seu compromisso com a proteção da vida,
            integridade física das pessoas, preservação do meio ambiente e
            operação segura em todas as atividades realizadas em ambientes
            industriais, offshore, energéticos e de alto risco.
          </p>

          <h2 className="text-lg font-semibold text-white">
            1. Política de Saúde e Segurança
          </h2>
          <p>
            A Axyron Global adota como princípio fundamental a prevenção de
            acidentes, incidentes e condições inseguras, priorizando a vida
            acima de qualquer prazo, custo ou produção.
          </p>

          <p>
            Nenhuma atividade é considerada urgente ou crítica a ponto de
            justificar a execução sem condições adequadas de segurança.
          </p>

          <h2 className="text-lg font-semibold text-white">
            2. Conformidade Legal e Normativa
          </h2>
          <p>As atividades são planejadas e executadas em conformidade com:</p>

          <ul className="list-disc space-y-1 pl-6">
            <li>Legislação brasileira aplicável (NRs, normas ambientais)</li>
            <li>Requisitos legais do país de operação</li>
            <li>Normas ISO 45001, ISO 14001 (quando aplicável)</li>
            <li>IEC 61400 (Blade Repair)</li>
            <li>DNV, API, ASME, ABNT e normas de fabricantes (OEM)</li>
          </ul>

          <p>
            A aplicabilidade de normas depende do escopo contratado e das
            exigências legais e contratuais.
          </p>

          <h2 className="text-lg font-semibold text-white">
            3. Análise de Risco e Planejamento
          </h2>
          <p>Todas as atividades devem ser precedidas de:</p>

          <ul className="list-disc space-y-1 pl-6">
            <li>Análise Preliminar de Risco (APR / JSA)</li>
            <li>Procedimentos operacionais específicos</li>
            <li>Permissões de trabalho e autorizações necessárias</li>
          </ul>

          <h2 className="text-lg font-semibold text-white">4. Meio Ambiente</h2>
          <p>
            A Axyron Global compromete-se a minimizar impactos ambientais,
            promovendo o uso consciente de recursos, correta gestão de resíduos
            e cumprimento das licenças ambientais aplicáveis.
          </p>

          <h2 className="text-lg font-semibold text-white">
            5. Capacitação e Experiência Técnica
          </h2>
          <p>
            A equipe técnica principal é composta por profissionais com ampla
            experiência em ambientes industriais e energéticos, incluindo
            atuação contínua em Blade Repair desde 2019.
          </p>

          <p>
            A liderança técnica é exercida por Alan Cícero de Almeida, técnico
            reconhecido no setor, com mais de 20 anos de experiência industrial
            e histórico de premiação por boas práticas de segurança no trabalho.
          </p>

          <h2 className="text-lg font-semibold text-white">
            6. Autoridade para Interrupção de Atividades
          </h2>
          <p>
            Qualquer membro da equipe ou colaborador tem autoridade para
            interromper atividades ao identificar condições inseguras, sem
            qualquer tipo de penalização.
          </p>

          <h2 className="text-lg font-semibold text-white">
            7. Melhoria Contínua
          </h2>
          <p>
            A Axyron Global compromete-se com a melhoria contínua de seus
            processos, procedimentos e cultura de segurança, alinhada às boas
            práticas internacionais de HSE.
          </p>

          <p className="pt-4 text-xs text-slate-400">
            Documento institucional. Não substitui planos de HSE específicos,
            contratos ou exigências legais de cada projeto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HSEModal;
