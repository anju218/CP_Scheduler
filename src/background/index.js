// import localforage from "localforage";

// console.log("IN background");
// var curr_index = {
// 	currrent_index: 8,
// };
// var myContests = [];
// // var platforms = [
// // 	{ code_chef: true },
// // 	{ codeforces: true },
// // 	{ leet_code: true },
// // 	{ at_coder: true },
// // 	{ hacker_earth: true },
// // 	{ kick_start: true },
// // 	{ top_coder: true },
// // ];

// // var platforms = {
// // 	code_chef: true,
// // 	codeforces: true,
// // 	leet_code: true,
// // 	at_coder: true,
// // 	hacker_earth: true,
// // 	kick_start: true,
// // 	top_coder: true,
// // };

// var platforms = [
// 	{
// 		platform: "code_chef",
// 		isSubscribed: true,
// 	},
// 	{
// 		platform: "codeforces",
// 		isSubscribed: true,
// 	},
// 	{
// 		platform: "leet_code",
// 		isSubscribed: true,
// 	},
// 	{
// 		platform: "at_coder",
// 		isSubscribed: true,
// 	},
// 	{
// 		platform: "hacker_earth",
// 		isSubscribed: true,
// 	},
// 	{
// 		platform: "kick_start",
// 		isSubscribed: true,
// 	},
// 	{
// 		platform: "top_coder",
// 		isSubscribed: true,
// 	},
// ];

// localforage.setItem("platforms", platforms);

// async function getAllMyContests() {
// 	for (var i = 0; i < platforms.length; i++) {
// 		if (!platforms[i].isSubscribed) continue;

// 		var contests = await fetchContestDetails(platforms[i].platform);
// 		for (var contest of contests) {
// 			myContests.push(contest);
// 		}
// 	}
// 	console.log(myContests);
// 	await localforage.setItem("myContests", myContests);
// }

// getAllMyContests();

// async function fetchContestDetails(platform) {
// 	const res = await fetch(`https://www.kontests.net/api/v1/${platform}`, {
// 		method: "GET",
// 		headers: {
// 			"Content-type": "application/json; charset=UTF-8",
// 		},
// 	});

// 	if (!res.ok) {
// 		const message = "An error has occured";
// 		throw new Error(message);
// 	}

// 	const contestDetails = await res.json();
// 	return contestDetails;
// }

// // =============================Alarm every 24 hours =======================
// chrome.alarms.create("updateUpcomingContestDetails", {
// 	//options
// 	when: Date.now(),
// 	periodInMinutes: 1440,
// });

// chrome.alarms.onAlarm.addListener((alarm) => {
// 	if (alarm.name === "updateUpcomingContestDetails") {
// 		// console.log("alarm1 running");
// 		getAllMyContests().then(() => {
// 			storemyContestInChromeDB();
// 		});

// 		localforage.getItem("platforms", function (err, result) {
// 			// console.log(result);
// 			if (result.userPlatforms === undefined) {
// 				// console.log("result was undefined");
// 				storePlatformsInChromeDB();
// 			} else {
// 				console.log("It was defined");
// 			}
// 		});
// 	}
// });
