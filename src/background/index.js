import localforage from "localforage";
// https://levelup.gitconnected.com/how-to-use-background-script-to-fetch-data-in-chrome-extension-ef9d7f69625d
console.log("IN background");

var myContests = [];

var platforms = [
	{
		platform: "code_chef",
		isSubscribed: true,
	},
	{
		platform: "codeforces",
		isSubscribed: true,
	},
	{
		platform: "leet_code",
		isSubscribed: true,
	},
	{
		platform: "at_coder",
		isSubscribed: true,
	},
	{
		platform: "hacker_earth",
		isSubscribed: true,
	},
	{
		platform: "kick_start",
		isSubscribed: true,
	},
	{
		platform: "top_coder",
		isSubscribed: true,
	},
];

// Fetch Function
async function fetchAllMyContests() {
	console.log("In fetch all my contests");
	myContests = [];
	for (var i = 0; i < platforms.length; i++) {
		if (!platforms[i].isSubscribed) continue;

		var contests = await fetchContestDetails(platforms[i].platform);
		for (var contest of contests) {
			myContests.push(contest);
		}
	}
}

// =============================Alarms, startup, instaleed functions =======================

// create alarm for fresh on installed/updated, and start fetch data
chrome.runtime.onInstalled.addListener(() => {
	console.log("onInstalled....");
	scheduleRequest();
	startRequest();
});

// fetch and save data when chrome restarted, alarm will continue running when chrome is restarted
chrome.runtime.onStartup.addListener(() => {
	console.log("onStartup....");
	startRequest();
});

// schedule a new fetch every 1440 minutes
function scheduleRequest() {
	console.log("schedule refresh alarm to 1440 minutes...");
	chrome.alarms.create("refresh", { periodInMinutes: 1440 });
}

// fetch data and save to local storage
async function startRequest() {
	console.log("start HTTP Request...");
	// We need to get the array that user has stored previously if not then we use original one
	await getPlatforms();
	await fetchAllMyContests();
	await setmyContests();
	await getmyContests();
}

chrome.alarms.onAlarm.addListener(async (alarm) => {
	if (alarm.name === "refresh") {
		await getPlatforms();
		await fetchAllMyContests();
		await setmyContests();
	}
});

// ========================================= DB ===================================================
async function setmyContests() {
	console.log("In setmyContests");
	await localforage.setItem("myContests", myContests);
}

async function setmyPlatforms() {
	console.log("In setmyPlatforms");
	await localforage.setItem("platforms", myContests);
}

function getmyContests() {
	console.log("In getmyContests");
	localforage.getItem("myContests", function (err, value) {
		if (err) throw err;
		myContests = value;
	});
}
async function getPlatforms() {
	console.log("1. In getPlatforms");
	await localforage.getItem("platforms", function (err, value) {
		if (err || value === null) {
			console.log("Err: No platforms array in DB");
			return;
		}
		myContests = value;
		console.log(value);
	});
}

// ========================================== Helper ==================================================

async function fetchContestDetails(platform) {
	const res = await fetch(`https://www.kontests.net/api/v1/${platform}`, {
		method: "GET",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	if (!res.ok) {
		const message = "An error has occured";
		throw new Error(message);
	}

	const contestDetails = await res.json();
	return contestDetails;
}
