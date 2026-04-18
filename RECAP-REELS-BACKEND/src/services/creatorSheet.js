const { google } = require("googleapis");
const path = require("path");

let auth;

if (process.env.GOOGLE_SERVICE_ACCOUNT) {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

  auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

} else {
  auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, "../../google-service-account.json"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });
}

const SPREADSHEET_ID = process.env.Creator_SPREADSHEET_ID;

async function appendCreator(data) {
  const authClient = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: authClient });

  const values = [[
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    data.name,
    data.age,
    data.phone,
    data.iphoneModel,
    data.experience
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Creators!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: { values }
  });
}

module.exports = appendCreator;
