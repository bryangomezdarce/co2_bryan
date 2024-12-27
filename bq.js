import { BigQuery } from "@google-cloud/bigquery";
const bigquery = new BigQuery();

async function getUser(username) {
  const query = `
        SELECT *
        FROM \`smg-walmart-gt-prd-mg.CO2.users\`
        WHERE username = @username
        `;
  const options = {
    query: query,
    params: { username: username },
  };
  const [rows] = await bigquery.query(options);
  return rows[0];
}

export default { getUser };