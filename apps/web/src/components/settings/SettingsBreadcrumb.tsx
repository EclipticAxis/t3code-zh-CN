import {
  WorkspaceBreadcrumb,
  WorkspaceBreadcrumbItem,
  WorkspaceBreadcrumbSeparator,
} from "../WorkspaceBreadcrumb";
import { useI18n } from "../../hooks/useI18n";
import { settingsSectionLabel, type SettingsPath } from "./settingsSearch";

function settingsBreadcrumbLabel(
  pathname: string,
  t: ReturnType<typeof useI18n>["t"],
): string | null {
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
  if (normalizedPathname === "/settings/diagnostics") {
    return t("settings.breadcrumb.diagnostics");
  }
  if (normalizedPathname in SETTINGS_SECTION_PATHS) {
    const path = normalizedPathname as SettingsPath;
    return settingsSectionLabel(path, t);
  }
  return null;
}

const SETTINGS_SECTION_PATHS: Readonly<Record<string, true>> = {
  "/settings/general": true,
  "/settings/appearance": true,
  "/settings/keybindings": true,
  "/settings/providers": true,
  "/settings/integrations": true,
  "/settings/source-control": true,
  "/settings/connections": true,
  "/settings/archived": true,
};

export function SettingsBreadcrumb({ pathname }: { pathname: string }) {
  const { t } = useI18n();
  const sectionLabel = settingsBreadcrumbLabel(pathname, t);

  return (
    <WorkspaceBreadcrumb ariaLabel="Settings breadcrumb">
      {sectionLabel ? (
        <>
          <WorkspaceBreadcrumbItem>{t("settings.breadcrumb.root")}</WorkspaceBreadcrumbItem>
          <WorkspaceBreadcrumbSeparator />
        </>
      ) : null}
      <WorkspaceBreadcrumbItem current className="truncate">
        {sectionLabel ?? t("settings.breadcrumb.root")}
      </WorkspaceBreadcrumbItem>
    </WorkspaceBreadcrumb>
  );
}
