export interface JokeOfTheDay {
  success: string;
  contents: {
    jokes: [
      {
        author: string;
        title: string;
        joke: string;
        tags: [string];
        id: string;
        image: string;
        length: 0;
        date: string;
      }
    ];
  };
}
export interface jokeObject {
  title: string;
  lang: string;
  length: string;
  clean: string;
  racial: string;
  date: string;
  id: string;
  text: string;
}
