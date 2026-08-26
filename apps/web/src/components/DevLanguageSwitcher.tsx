import { SUPPORTED_LOCALES, type Locale } from "@t3tools/shared/i18n";

import { useI18n } from "../hooks/useI18n";

const LABELS: Record<Locale, string> = {
  en: "EN",
  "zh-CN": "中文",
};

/**
 * Dev-only language switcher for manually verifying locale changes. Mounted in
 * AppRoot behind `import.meta.env.DEV`, so it never ships in production builds.
 */
export function DevLanguageSwitcher() {
  const i18n = useI18n();
  return (
    <div className="fixed bottom-3 right-3 z-[100] flex items-center gap-1 rounded-lg border bg-background/90 p-1 text-xs shadow-lg">
      {SUPPORTED_LOCALES.map((locale) => {
        const active = i18n.locale === locale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => i18n.setLocale(locale)}
            className={`rounded-md px-2 py-1 transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {LABELS[locale]}
          </button>
        );
      })}
    </div>
  );
}
