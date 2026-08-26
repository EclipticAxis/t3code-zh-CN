import { isElectron } from "~/env";

import { i18n, type I18n, type MessageKey } from "@t3tools/shared/i18n";

type Translate = I18n["t"];

export type SettingsPath =
  | "/settings/general"
  | "/settings/appearance"
  | "/settings/keybindings"
  | "/settings/providers"
  | "/settings/integrations"
  | "/settings/source-control"
  | "/settings/connections"
  | "/settings/archived";

export interface SettingsSearchItem {
  readonly id: string;
  // i18n message key; resolved with a translate function at render time so
  // panels, search results, and the nav labels stay on a single catalog.
  readonly title: MessageKey;
  readonly to: SettingsPath;
  readonly targetId?: string;
  // Its row only renders in the desktop app, so a browser result would land on
  // an anchor that isn't there.
  readonly desktopOnly?: boolean;
}

/**
 * Section labels in sidebar order. The sidebar nav and the search-result
 * subtitles both render from this record, so each label exists once.
 * Values are i18n keys resolved via `settingsSectionLabel`.
 */
export const SETTINGS_SECTION_LABELS: Readonly<Record<SettingsPath, MessageKey>> = {
  "/settings/general": "settings.section.general",
  "/settings/appearance": "settings.section.appearance",
  "/settings/keybindings": "settings.section.keybindings",
  "/settings/providers": "settings.section.providers",
  "/settings/integrations": "settings.section.integrations",
  "/settings/source-control": "settings.section.sourceControl",
  "/settings/connections": "settings.section.connections",
  "/settings/archived": "settings.section.archive",
};

/** Resolve a settings section label for the current locale. */
export function settingsSectionLabel(path: SettingsPath, translate: Translate = i18n.t): string {
  return translate(SETTINGS_SECTION_LABELS[path]);
}

/**
 * Every searchable setting, in result order. This catalog is the single
 * source of truth for anchor ids and visible titles: panels render both via
 * `searchableSetting`, so a retitle (or, later, a translation pass) happens
 * here once instead of separately in the panel and the index.
 */
export const SETTINGS_SEARCH_ITEMS = [
  {
    id: "color-scheme",
    title: "settings.option.colorScheme",
    to: "/settings/appearance",
    // The scheme tiles sit at the top of the Appearance section.
    targetId: "appearance",
  },
  {
    id: "theme",
    title: "settings.option.themes",
    to: "/settings/appearance",
    // Theme cards live directly under the scheme tiles; the section is the
    // stable scroll destination for both.
    targetId: "appearance",
  },
  {
    // Prefixed because the slider control already owns the `appearance-contrast` id.
    id: "setting-appearance-contrast",
    title: "settings.option.contrast",
    to: "/settings/appearance",
  },
  {
    // Prefixed because the slider control already owns the `glass-opacity` id.
    id: "setting-glass-opacity",
    title: "settings.option.glassOpacity",
    to: "/settings/appearance",
  },
  {
    id: "environment-identification",
    title: "settings.option.environmentIdentification",
    to: "/settings/appearance",
    // The setting is stage-dependent, so its parent section is the stable destination.
    targetId: "appearance",
  },
  {
    id: "interface-font",
    title: "settings.option.interfaceFont",
    to: "/settings/appearance",
  },
  {
    id: "prompt-font",
    title: "settings.option.promptFont",
    to: "/settings/appearance",
  },
  {
    id: "code-font",
    title: "settings.option.codeFont",
    to: "/settings/appearance",
  },
  {
    id: "terminal-font",
    title: "settings.option.terminalFont",
    to: "/settings/appearance",
  },
  {
    id: "font-smoothing",
    title: "settings.option.fontSmoothing",
    to: "/settings/appearance",
  },
  {
    id: "word-wrap",
    title: "settings.option.wordWrap",
    to: "/settings/appearance",
  },
  {
    id: "project-grouping",
    title: "settings.option.projectGrouping",
    to: "/settings/general",
  },
  {
    id: "auto-settle-inactive-threads",
    title: "settings.option.autoSettleInactiveThreads",
    to: "/settings/general",
  },
  {
    id: "auto-settle-merged-threads",
    title: "settings.option.autoSettleMergedThreads",
    to: "/settings/general",
  },
  {
    id: "time-format",
    title: "settings.option.timeFormat",
    to: "/settings/general",
  },
  {
    id: "hide-whitespace-changes",
    title: "settings.option.hideWhitespaceChanges",
    to: "/settings/general",
  },
  {
    id: "skills-in-slash-menu",
    title: "settings.option.skillsInSlashMenu",
    to: "/settings/general",
  },
  {
    id: "provider-update-checks",
    title: "settings.option.providerUpdateChecks",
    to: "/settings/general",
  },
  {
    id: "new-threads",
    title: "settings.option.newThreads",
    to: "/settings/general",
  },
  {
    id: "start-from-origin",
    title: "settings.option.startFromOrigin",
    to: "/settings/general",
    targetId: "new-threads",
  },
  {
    id: "add-project-starts-in",
    title: "settings.option.addProjectStartsIn",
    to: "/settings/general",
  },
  {
    id: "archive-confirmation",
    title: "settings.option.archiveConfirmation",
    to: "/settings/general",
  },
  {
    id: "delete-confirmation",
    title: "settings.option.deleteConfirmation",
    to: "/settings/general",
  },
  {
    id: "quit-confirmation",
    title: "settings.option.quitConfirmation",
    to: "/settings/general",
    desktopOnly: true,
  },
  {
    id: "text-generation-model",
    title: "settings.option.textGenerationModel",
    to: "/settings/general",
  },
  {
    id: "diagnostics",
    title: "settings.option.diagnostics",
    to: "/settings/general",
  },
  {
    id: "legacy-plan-mode",
    title: "settings.option.legacyPlanMode",
    to: "/settings/general",
  },
  {
    id: "legacy-token-streaming",
    title: "settings.option.legacyTokenStreaming",
    to: "/settings/general",
  },
  {
    id: "legacy-sidebar",
    title: "settings.option.legacySidebar",
    to: "/settings/general",
  },
  {
    id: "keybindings",
    title: "settings.option.keybindings",
    to: "/settings/keybindings",
  },
  {
    id: "providers",
    title: "settings.option.providers",
    to: "/settings/providers",
  },
  {
    id: "agent-browser-access",
    title: "settings.option.agentBrowserAccess",
    to: "/settings/integrations",
    targetId: "browser",
  },
  {
    id: "browser-default-viewport",
    title: "settings.option.browserDefaultViewport",
    to: "/settings/integrations",
    targetId: "browser",
  },
  {
    id: "browser-default-zoom",
    title: "settings.option.browserDefaultZoom",
    to: "/settings/integrations",
    targetId: "browser",
  },
  {
    id: "browser-default-appearance",
    title: "settings.option.browserDefaultAppearance",
    to: "/settings/integrations",
    targetId: "browser",
  },
  {
    id: "browser-auto-show-floating-preview",
    title: "settings.option.browserAutoShowFloatingPreview",
    to: "/settings/integrations",
    targetId: "browser",
  },
  {
    id: "source-control",
    title: "settings.option.sourceControl",
    to: "/settings/source-control",
  },
  {
    id: "remote-environments",
    title: "settings.option.remoteEnvironments",
    to: "/settings/connections",
  },
  {
    id: "archive",
    title: "settings.option.archivedThreads",
    to: "/settings/archived",
  },
] as const satisfies ReadonlyArray<SettingsSearchItem>;

export type SettingsSearchItemId = (typeof SETTINGS_SEARCH_ITEMS)[number]["id"];

const SEARCH_ITEMS_BY_ID = Object.fromEntries(
  SETTINGS_SEARCH_ITEMS.map((item) => [item.id, item]),
) as Readonly<Record<SettingsSearchItemId, SettingsSearchItem>>;

/**
 * `id` and `title` props for the element a search item anchors to. Panels
 * spread (or pick from) this instead of restating the strings, so the catalog
 * and the rendered settings cannot drift apart. Titles resolve through the
 * current locale (a translate function can be injected for tests).
 */
export function searchableSetting(
  id: SettingsSearchItemId,
  translate: Translate = i18n.t,
): {
  readonly id: string;
  readonly title: string;
} {
  const { id: anchorId, title } = SEARCH_ITEMS_BY_ID[id];
  return { id: anchorId, title: translate(title) };
}

function normalizeSearchText(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function searchSettings(
  query: string,
  items: ReadonlyArray<SettingsSearchItem> = SETTINGS_SEARCH_ITEMS,
  translate: Translate = i18n.t,
): ReadonlyArray<SettingsSearchItem> {
  const normalizedQuery = normalizeSearchText(query);
  if (normalizedQuery.length === 0) return [];

  return items.filter(
    (item) =>
      (isElectron || item.desktopOnly !== true) &&
      normalizeSearchText(translate(item.title)).includes(normalizedQuery),
  );
}
