import { useEffect } from "react";

const CertificationsModal = ({ isOpen, onClose }) => {
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
          aria-label="Fechar certificações"
        >
          ✕
        </button>

        <h1 className="mb-4 text-2xl font-semibold text-white">
          Certificações, Qualificações e Conformidade Técnica
        </h1>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            A Axyron Global atua como um grupo técnico-operacional em processo
            de formação empresarial, estruturado para atender requisitos
            técnicos, normativos e de segurança exigidos por clientes nacionais
            e internacionais nos setores industrial, offshore, óleo e gás e
            energias renováveis.
          </p>

          <h2 className="text-lg font-semibold text-white">
            1. Certificações Corporativas
          </h2>
          <p>
            No momento, a Axyron Global não possui certificações corporativas
            próprias (como ISO ou DNV) em nome da organização, em razão de sua
            estrutura atual em fase de consolidação.
          </p>

          <p>
            A obtenção de certificações corporativas formais faz parte do plano
            estratégico de crescimento da organização.
          </p>

          <h2 className="text-lg font-semibold text-white">
            2. Qualificação da Equipe Técnica
          </h2>
          <p>
            As atividades são executadas por profissionais com ampla experiência
            comprovada em ambientes industriais e energéticos, incluindo:
          </p>

          <ul className="list-disc space-y-1 pl-6">
            <li>Mais de 20 anos de experiência no setor industrial</li>
            <li>Atuação contínua em Blade Repair desde 2019</li>
            <li>Histórico de operações em ambientes onshore e offshore</li>
            <li>Reconhecimento profissional no setor por práticas seguras</li>
          </ul>

          <p>
            A liderança técnica é exercida por Alan Cícero de Almeida,
            profissional reconhecido no setor e premiado por boas práticas de
            segurança no trabalho.
          </p>

          <h2 className="text-lg font-semibold text-white">
            3. Conformidade com Normas Técnicas
          </h2>
          <p>
            A Axyron Global atua em conformidade com normas e padrões técnicos
            reconhecidos internacionalmente, quando exigidos por contrato,
            legislação ou requisitos do cliente, incluindo, mas não se limitando
            a:
          </p>

          <ul className="list-disc space-y-1 pl-6">
            <li>IEC 61400 (Blade Repair e energia eólica)</li>
            <li>DNV (energias renováveis e offshore)</li>
            <li>
              ISO 9001, ISO 14001, ISO 45001 (referência de boas práticas)
            </li>
            <li>API, ASME, ASTM</li>
            <li>ABNT e Normas Regulamentadoras (NRs)</li>
            <li>Normas e procedimentos de fabricantes (OEM)</li>
          </ul>

          <p>
            A aplicabilidade de cada norma depende do escopo do projeto, local
            de execução e exigências contratuais.
          </p>

          <h2 className="text-lg font-semibold text-white">
            4. Certificações Individuais
          </h2>
          <p>
            Certificações individuais, treinamentos e qualificações técnicas dos
            profissionais são apresentadas mediante solicitação formal e de
            acordo com os requisitos específicos de cada projeto ou cliente.
          </p>

          <h2 className="text-lg font-semibold text-white">
            5. Auditorias e Requisitos de Clientes
          </h2>
          <p>
            A Axyron Global está apta a participar de processos de auditoria,
            homologação e qualificação técnica exigidos por clientes, operadores
            e contratantes, conforme escopo e fase do projeto.
          </p>

          <h2 className="text-lg font-semibold text-white">
            6. Atualização das Informações
          </h2>
          <p>
            As informações aqui apresentadas podem ser atualizadas a qualquer
            momento, acompanhando a evolução estrutural, técnica e corporativa
            da Axyron Global.
          </p>

          <p className="pt-4 text-xs text-slate-400">
            Documento institucional. Não constitui certificação formal nem
            substitui documentos técnicos exigidos contratualmente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsModal;
