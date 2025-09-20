async function getAccessToken() {
  const tokenUrl = "https://pred.gg/api/oauth2/token";
  const clientId = "yc1bxmxwqiw01igf23nbavobwy6lvhe6";
  const clientSecret = "ommpwilb29mfylrtjeldpqqfc11zbhqs";

  const basicAuth = "Basic " + btoa(`${clientId}:${clientSecret}`);

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: basicAuth,
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }).toString(),
  });

  if (!response.ok) {
    console.error(await response.text());
    throw new Error("Failed to fetch access token");
  }

  const data = await response.json();
  return data.access_token;
}
