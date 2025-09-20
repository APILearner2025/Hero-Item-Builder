document.addEventListener("DOMContentLoaded", async () => {
  try {
    const token = await getAccessToken();
    const query = ``; // put your GraphQL query here
    const variables = {};
    const data = await fetchGraphQL(query, variables, token);
    console.log("GraphQL response:", data);
  } catch (err) {
    console.error("Error:", err);
  }
});
