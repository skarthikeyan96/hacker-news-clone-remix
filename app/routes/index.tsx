import { useLoaderData } from "@remix-run/react";
import Card, { CardProps } from "~/components/card";
import Layout from "~/components/layout";

interface CardDataProps extends CardProps{
  url: string
  score: string
  by: string
}


export async function loader() {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
  );

  const storyIdentifiers: any = await response.json();

  let newStories = [];

  if (storyIdentifiers) {
    for (let i = 0; i < 15; i++) {
      const storyResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${storyIdentifiers[i]}.json`
      );
      const story: any = await storyResponse.json();
      newStories.push(story);
    }
  }

  return newStories;
}

export default function Index() {
  const data = useLoaderData();
  return (
    <Layout>
      {data &&
        data.map((d:CardDataProps) => {
          if (d.url) {
            return (
              <a href={d.url} target="_blank" rel="noopener noreferrer" >
                <Card
                  title={d.title}
                  point={d.score}
                  time={d.time}
                  author={d.by}
                />
              </a>
            );
          }
          <Card title={d.title} point={d.score} time={d.time} author={d.by} />;
        })} 
    </Layout>
  );
}
