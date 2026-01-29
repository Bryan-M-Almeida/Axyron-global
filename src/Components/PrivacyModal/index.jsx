import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
const PrivacyModal = ({ isOpen, onClose }) => {
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
          aria-label="Fechar política de privacidade"
        >
          ✕
        </button>

        <h1 className="mb-4 text-2xl font-semibold text-white">
          Política de Privacidade – Axyron Global
        </h1>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            A Axyron Global respeita a privacidade e a proteção dos dados
            pessoais de seus usuários, clientes, parceiros e visitantes, em
            conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº
            13.709/2018), Regulamento Geral de Proteção de Dados da União
            Europeia (GDPR) e legislações internacionais aplicáveis.
          </p>

          <h2 className="text-lg font-semibold text-white">
            1. Identificação do Controlador
          </h2>
          <p>
            Axyron Global é um grupo técnico-operacional em processo de
            formação, sediado no Brasil (Rio de Janeiro), atualmente operando
            sob o CNPJ 47.242.176/0001-13, registrado em nome de Alan Cícero de
            Almeida (MEI).
          </p>

          <h2 className="text-lg font-semibold text-white">
            2. Dados Coletados
          </h2>
          <p>Os dados pessoais coletados podem incluir:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Nome</li>
            <li>E-mail</li>
            <li>Empresa</li>
            <li>Telefone</li>
            <li>Mensagem enviada voluntariamente</li>
            <li>Dados técnicos de navegação (IP, navegador, dispositivo)</li>
          </ul>

          <h2 className="text-lg font-semibold text-white">
            3. Finalidade do Tratamento
          </h2>
          <p>Os dados são utilizados exclusivamente para:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Contato comercial e institucional</li>
            <li>Resposta a solicitações e propostas</li>
            <li>Relacionamento profissional</li>
            <li>Melhoria da experiência do usuário</li>
            <li>Cumprimento de obrigações legais</li>
          </ul>

          <h2 className="text-lg font-semibold text-white">4. Base Legal</h2>
          <p>
            O tratamento dos dados ocorre com base no consentimento do titular,
            execução de contrato, interesse legítimo ou cumprimento de obrigação
            legal, conforme previsto na LGPD e GDPR.
          </p>

          <h2 className="text-lg font-semibold text-white">
            5. Compartilhamento de Dados
          </h2>
          <p>
            Os dados poderão ser compartilhados apenas quando necessário com:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Prestadores de serviços técnicos e tecnológicos</li>
            <li>Parceiros comerciais, mediante necessidade operacional</li>
            <li>Autoridades legais, quando exigido por lei</li>
          </ul>

          <h2 className="text-lg font-semibold text-white">
            6. Armazenamento e Segurança
          </h2>
          <p>
            Os dados são armazenados em ambientes seguros, adotando medidas
            técnicas e administrativas razoáveis para proteger contra acesso não
            autorizado, perda ou vazamento.
          </p>

          <h2 className="text-lg font-semibold text-white">
            7. Direitos do Titular
          </h2>
          <p>O titular dos dados pode, a qualquer momento, solicitar:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Acesso aos dados</li>
            <li>Correção ou atualização</li>
            <li>Revogação do consentimento</li>
            <li>Exclusão, quando legalmente aplicável</li>
          </ul>

          <h2 className="text-lg font-semibold text-white">
            8. Cookies e Tecnologias Similares
          </h2>
          <p>
            Este site pode utilizar cookies estritamente necessários e
            ferramentas de análise para fins estatísticos e de melhoria
            contínua. O usuário pode gerenciar cookies diretamente em seu
            navegador.
          </p>

          <h2 className="text-lg font-semibold text-white">
            9. Atuação Internacional
          </h2>
          <p>
            Considerando a atuação global da Axyron Global, dados podem ser
            processados fora do país de origem, sempre respeitando as
            salvaguardas legais e regulatórias aplicáveis.
          </p>

          <h2 className="text-lg font-semibold text-white">
            10. Atualizações desta Política
          </h2>
          <p>
            Esta Política de Privacidade pode ser atualizada a qualquer momento,
            sendo a versão vigente sempre a publicada neste site.
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

export default PrivacyModal;
