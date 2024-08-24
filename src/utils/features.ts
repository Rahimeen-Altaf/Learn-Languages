import axios from "axios";
import { generate } from "random-words";

export const translateWords = async (params: LangType): Promise<WordType[]> => {
  try {
    const words = generate(8).map((i) => ({
      Text: i,
    }));

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          to: params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "x-rapidapi-key":
            "286f79be25msh41c01370740fd37p131780jsnfc1fcf195c5c",
          "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    const recieve: FetchedDataType[] = response.data;

    const arr: WordType[] = recieve.map((i, index) => {
      return {
        word: i.translations[0].text,
        meaning: words[index].Text,
        options: [...generate(3), words[index].Text],
      };
    });

    return arr;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
