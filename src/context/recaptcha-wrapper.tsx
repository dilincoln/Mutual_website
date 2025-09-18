import Script from "next/script";

declare global {
  const grecaptcha: {
    enterprise: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  };
}
interface Props {
  action: string;
}

export function RecaptchaWrapper({ action }: Props) {
  const executeRecaptcha = () => {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.enterprise.ready(async () => {
        try {
          const token = await grecaptcha.enterprise.execute(
            "6Lc0380rAAAAAKsAAG6EuAL_NGTlGXBF9MWbpS8x",
            { action }
          );
          const tokenInput = document.getElementById(
            "recaptcha-token"
          ) as HTMLInputElement;
          if (tokenInput) tokenInput.value = token;
        } catch (e) {
          console.error("Recaptcha error", e);
        }
      });
    }
  };

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/enterprise.js?render=6Lc0380rAAAAAKsAAG6EuAL_NGTlGXBF9MWbpS8x"
        strategy="afterInteractive"
        onLoad={executeRecaptcha}
      />
      <input type="hidden" name="recaptchaToken" id="recaptcha-token" />
    </>
  );
}