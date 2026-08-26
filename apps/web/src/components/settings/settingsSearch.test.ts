import { describe, expect, it } from "vite-plus/test";

import { createI18n } from "@t3tools/shared/i18n";

import {
  searchableSetting,
  searchSettings,
  SETTINGS_SEARCH_ITEMS,
  type SettingsSearchItem,
} from "./settingsSearch";

// Titles in the catalog are i18n keys; tests resolve them with the English
// locale so assertions stay deterministic English strings.
const en = createI18n({ locale: "en" });

const ITEMS: ReadonlyArray<SettingsSearchItem> = [
  {
    id: "word-wrap",
    title: "settings.option.wordWrap",
    to: "/settings/general",
  },
  {
    id: "color-scheme",
    title: "settings.option.colorScheme",
    to: "/settings/connections",
  },
  {
    id: "providers",
    title: "settings.option.providers",
    to: "/settings/providers",
  },
  {
    id: "provider-update-checks",
    title: "settings.option.providerUpdateChecks",
    to: "/settings/general",
  },
  {
    id: "archive",
    title: "settings.option.archivedThreads",
    to: "/settings/archived",
  },
];

describe("searchSettings", () => {
  it("matches only setting titles", () => {
    expect(searchSettings("word", ITEMS, en.t).map((item) => item.id)).toEqual(["word-wrap"]);
    expect(searchSettings("scheme", ITEMS, en.t).map((item) => item.id)).toEqual(["color-scheme"]);
    expect(searchSettings("connections", ITEMS, en.t)).toEqual([]);
    expect(searchSettings("claude", ITEMS, en.t)).toEqual([]);
  });

  it("matches normalized title substrings", () => {
    expect(searchSettings("  WORD   WRAP  ", ITEMS, en.t).map((item) => item.id)).toEqual([
      "word-wrap",
    ]);
    expect(searchSettings("glass", undefined, en.t).map((item) => item.id)).toEqual([
      "setting-glass-opacity",
    ]);
    expect(searchSettings("xyzzy", undefined, en.t)).toEqual([]);
  });

  it("keeps catalog order for multiple title matches", () => {
    expect(searchSettings("confirmation", undefined, en.t).map((item) => item.id)).toEqual([
      "archive-confirmation",
      "delete-confirmation",
    ]);
  });

  it("returns no results for an empty query", () => {
    expect(searchSettings("   ", ITEMS)).toEqual([]);
  });

  it("hides desktop-only settings from browser search", () => {
    expect(SETTINGS_SEARCH_ITEMS.some((item) => item.id === "quit-confirmation")).toBe(true);
    expect(searchSettings("hold to quit", undefined, en.t)).toEqual([]);
  });

  it("keeps catalog result ids unique", () => {
    const ids = SETTINGS_SEARCH_ITEMS.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("serves anchor props to panels from the catalog", () => {
    expect(searchableSetting("word-wrap", en.t)).toEqual({ id: "word-wrap", title: "Word wrap" });
    expect(searchableSetting("archive", en.t)).toEqual({
      id: "archive",
      title: "Archived threads",
    });
  });

  it("routes appearance settings to their current section", () => {
    expect(searchSettings("theme", undefined, en.t)[0]).toMatchObject({
      id: "theme",
      to: "/settings/appearance",
    });
    expect(searchSettings("word wrap", undefined, en.t)[0]).toMatchObject({
      id: "word-wrap",
      to: "/settings/appearance",
    });
    expect(searchSettings("environment identification", undefined, en.t)[0]).toMatchObject({
      id: "environment-identification",
      to: "/settings/appearance",
      targetId: "appearance",
    });
  });
});
