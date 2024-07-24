export const useTSCSP = (
  scriptSrc = `'self' 'strict-dynamic'`,
  styleSrc = "'self'",
  objectSrc = "'none'",
  connectSrc = [
    "'self'",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ],
  reportOnly = false
) => {
  const addOrUpdateCSPMeta = () => {
    try {
      let metaElement = document.querySelector(
        'meta[http-equiv="Content-Security-Policy"]'
      );
      if (!metaElement) {
        metaElement = document.createElement("meta");
        metaElement.setAttribute("http-equiv", "Content-Security-Policy");
        document.head.appendChild(metaElement);
      }

      const reportUri = reportOnly ? "report-uri /csp-report;" : "";
      metaElement.setAttribute(
        "content",
        `script-src ${scriptSrc}; ${reportUri} style-src ${styleSrc}; object-src ${objectSrc}; connect-src ${connectSrc.join(
          " "
        )};`
      );
    } catch (error) {
      console.error("Error adding CSP meta element:", error);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addOrUpdateCSPMeta);
  } else {
    addOrUpdateCSPMeta();
  }
};
