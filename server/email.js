const util = require("util");
const readline = require("readline");
const { google } = require("googleapis");
const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");
const { GCP_KEY_PATH } = require("./constants");

const secretsClient = new SecretManagerServiceClient({
    projectId: "karen-sell-watches",
    keyFilename: GCP_KEY_PATH,
});

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

/**
 * Fetch tokens from secret manager and call the internal send email function
 */
async function sendEmail(payload) {
    await _sendEmail({ auth: await authorize(), payload });
}

/**
 * Use the gmail API to send an email
 */
async function _sendEmail({ auth, payload }) {
    const gmail = google.gmail({ version: "v1", auth });
    const raw = constructEmail(payload);
    const resp = await gmail.users.messages.send({
        auth,
        userId: "me",
        resource: { raw },
    });
    return resp;
}

/**
 * convert message headers and body to the mime format google wants
 */
function constructEmail({ to, from, subject, body }) {
    var str = [
        'Content-Type: text/plain; charset="UTF-8"\n',
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        "to: ",
        to,
        "\n",
        "subject: ",
        subject,
        "\n\n",
        body,
    ].join("");

    return Buffer.from(str)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}

/**
 * Create an OAuth2 client with credentials loaded from secret manager, which has both the clientId and clientSecret as well as access/refresh tokens
 */
async function authorize() {
    const [version] = await secretsClient.accessSecretVersion({
        name: "projects/karen-sell-watches/secrets/auth-tokens/versions/latest",
    });
    const creds = JSON.parse(version.payload.data.toString());

    const oAuth2Client = new google.auth.OAuth2(
        creds.client.id,
        creds.client.secret,
        "http://localhost:4000/oauth/callback"
    );

    oAuth2Client.setCredentials(creds.bearer);
    return oAuth2Client;
}

// The function below should no longer be required, but keeping around in case we need to build better handling
// const asyncGetNewToken = util.promisify(getNewToken);
// /**
//  * Get and store new token after prompting for user authorization, and then
//  * execute the given callback with the authorized OAuth2 client.
//  * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
//  */
// function getNewToken(oAuth2Client) {
//   const authUrl = oAuth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: SCOPES,
//   });
//   console.log("Authorize this app by visiting this url:", authUrl);
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.question("Enter the code from that page here: ", (code) => {
//     rl.close();
//     oAuth2Client.getToken(code, (err, token) => {
//       if (err) return console.error("Error retrieving access token", err);
//       oAuth2Client.setCredentials(token);
//     });
//   });
// }

module.exports = { sendEmail };
