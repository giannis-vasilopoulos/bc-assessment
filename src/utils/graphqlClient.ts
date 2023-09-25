import compress from "graphql-query-compress";

async function graphqlClient(query: string) {
  const compressedQuery = compress(query);
  const res = await fetch("https://graphqlzero.almansi.me/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: compressedQuery
    })
  });
  return res;
}

export default graphqlClient;
