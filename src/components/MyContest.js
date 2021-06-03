import axios from "axios";
import React, { useState, useEffect } from "react";
import localforage from "localforage";
import { getAllByPlaceholderText } from "@testing-library/dom";
import "./Subscribe.css";

let myContests_db = [];
let deletedContests = [];

localforage.getItem("myContests", function (err, value) {
	if (err) console.log(err);
	myContests_db = value;
});

export default function MyContest() {
	//let contest=[]
	//contest=contests_in_24_hours(myContests_db)
	//console.log(contest)
	const [mycontest, setmycontest] = useState(() => {
		return myContests_db;
	});
	//setmycontest(contest24 => contest24= myContests_db)
	{
		return (
			<div>
				{mycontest.map((contest) => (
					<div>
						<div class="card text-center">
							<h6 class="card-header">{contest.name}</h6>
							<div class="card-body">
								<h7 class="card-title">
									Start:{getDate(contest.start_time)}
								</h7>
								<button
									type="button"
									class="btn btn-primary btn-sm"
								>
									Go to Contest
								</button>
								<button
									type="button"
									class="btn btn-primary btn-sm"
								>
									<i class="bi bi-trash-fill"></i>
								</button>
								<button
									type="button"
									class="btn btn-primary btn-sm"
								>
									<i class="bi bi-calendar-event"></i>
								</button>
								<button
									type="button"
									class="btn btn-primary btn-sm"
								>
									<i class="bi bi-alarm-fill"></i>
								</button>
							</div>
						</div>

						<br></br>
					</div>
				))}
			</div>
		);
	}
}

// 1. Add it to deleted and push it to storage
// 2. delete the element from myContests and push new myContests to the storage
function deleteContest(contest) {
	deletedContests.push(contest);
	setDeletedContests();
	for (var i = 0; i < myContests_db.length; i++)
		if (contest.name === myContests_db[i].name) myContests_db.splice(i, 1);
	setmyContests();
}

// Call this function to open new url (Go to Contest)
function openLink(uri) {
	chrome.tabs.create({ active: true, url: uri });
}

function contests_in_24_hours(myContests_db) {
	//await getmyContests();
	var in_24_hours = [];
	for (var contest of myContests_db) {
		if (contest.in_24_hours === "Yes") in_24_hours.push(contest);
	}
	return in_24_hours;
}

// Function sets an alarm and it opens a new tab 1 min before contest start_time
// NOT WORKING
// function setAlarm(contest) {
// 	chrome.runtime.sendMessage({
// 		msg: "Create Alarm",
// 		data: {
// 			url: contest.url,
// 			time: contest.start_time,
// 		},
// 	});
// }

//================================ DB functions =================================

async function setmyContests() {
	console.log("In setmyContests");
	await localforage.setItem("myContests", myContests_db);
}

async function setDeletedContests() {
	console.log("In setDeletedContests");
	await localforage.setItem("deletedContests", deletedContests);
}

// ============================ Helper =================================
function getDate(d) {
	var date_temp = new Date(d);
	var date = date_temp.toLocaleString("en-US");
	var datearray = date.split("/");
	var newdate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
	return newdate;
}
