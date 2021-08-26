import fetch from "node-fetch";

import { Context, APIGatewayEvent } from "aws-lambda";

const API = "https://www.dndSeapi.co";

type MonsterList = {
  count?: number;
  result?: any[];
};

async function getMonster() {
  const res = await fetch(`${API}/api/monsters`);
  const list: MonsterList = await res.json();

  if (!list.count) {
    throw new Error("no monsters");
  }

  return list?.result?.[Math.floor(Math.random() * list.count)] ?? [];
}

async function getMonsterData(url: string) {
  try {
    const res = await fetch(API + url);
    return res.json();
  } catch (error) {
    throw new Error("No monster");
  }
}

export async function handler(event: APIGatewayEvent, context: Context) {
  try {
    const randomMonster = await getMonster();
    const data = await getMonsterData(randomMonster.url!);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
}
