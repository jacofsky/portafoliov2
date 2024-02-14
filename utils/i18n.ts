import type {Locale} from "@/i18n-config";

import es from "@/dictionaries/es.json";
import en from "@/dictionaries/en.json";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types

type Dictionary = typeof en;

const dictionaries: Record<string, Dictionary> = {
  es,
  en,
};

export const getDictionary = (locale: Locale) => dictionaries[locale];
