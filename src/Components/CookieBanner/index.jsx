import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("axyron_cookie_consent");
    if (!consent) setVisible(true);
  }, []);
  const acceptCookies = () => {
    localStorage.setItem("axyron_cookie_consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("axyron_cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-900 border-t border-slate-700 p-4 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed">
          Utilizamos cookies estritamente necessários e cookies de análise para
          melhorar sua experiência e compreender o uso do site, em conformidade
          com a LGPD e o GDPR.
        </p>

        <div className="flex gap-2">
          <button
            onClick={rejectCookies}
            className="cursor-pointer rounded-lg border border-slate-600 px-4 py-2 text-sm hover:bg-red-600 bg-red-700 tracking-widest font-bold transition-color duration-300"
          >
            Rejeitar
          </button>

          <button
            onClick={acceptCookies}
            className="cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-blue-100 transition-color duration-300"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
