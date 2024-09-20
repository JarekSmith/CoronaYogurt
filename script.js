// Client ID and API Key from Google Cloud
const CLIENT_ID = '236413033644-1h7sh3i3b8cuodr7rctn3sm3ldm63q8e.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBi6xu6JW9eIbETa3e4VLIYxrKu30Map4Q';

// Discovery doc URL
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

// Authorization scopes required by the API
const SCOPES = 'https://www.googleapies.com/auth/calendar.readonly https://www.googleapies.com/auth/calendar.events.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;

const CALENDAR_ID = '330cc876873512068a03eb9b14175964f3667de7ee0f660e773641212a93ccbd@group.calendar.google.com'; // Calendar ID of the Corona Yogurt calendar

// Callback after api.js is loaded
function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    await listUpcomingEvents();
}

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
    });
    gisInited = true;
}

async function listUpcomingEvents() {
    let response;
    try {
        const request = {
            'calendarId': CALENDAR_ID,
            'timeMin' : (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime',
        };
        response = await gapi.client.calendar.events.list(request);
    } catch (err) {
        document.getElementById('eventsList').innerText = err.message;
        return;
    }

    const events = response.result.items;
    if (!events || events.length == 0) {
        NoEvents();
        return;
    }
    // Flatten to string to display
    const output = events.reduce(
        (str, event) => `${str}</li><li><strong>${event.summary}</strong> (${event.start.dateTime || event.start.date})</li>`, '<li>');
        document.getElementById('eventsList').innerHTML = `<ul>${output}</ul>`;
        document.getElementById('eventsList').innerHTML = document.getElementById('eventsList').innerHTML.replace("<li></li>", "");
}

function NoEvents() {
    let monthP = document.getElementById("eventsList");
    const d = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = months[d.getMonth()]
    monthP.innerHTML = `No scheduled events for the month of <strong>${currentMonth}</strong>`
}