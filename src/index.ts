// import { Event, Context } from "@netlify/functions";

export const handlerHome = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: "Ok" }),
  };
};
