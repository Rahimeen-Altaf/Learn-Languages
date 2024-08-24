/// <reference types="vite/client" />

type LangType = "ja" | "hi" | "es" | "fr" | "ur";

type WordType = {
  word: string;
  meaning: string;
  options: string[];
};

interface StateType {
  words: WordType[];
  loading: boolean;
  result: string[];
  error?: string;
}

type FetchedDataType = {
  translations: {
    text: string;
  }[];
};
