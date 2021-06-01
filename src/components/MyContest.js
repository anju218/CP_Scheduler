import axios from "axios";
import React, { useState, useEffect } from "react";
import localforage from "localforage";

var myContests_db = [];

export default function MyContest() {
	const [contests, setcontests] = useState([]);
	useEffect(function () {
		axios
			.get("https://www.kontests.net/api/v1/all")
			.then((response) => setcontests(response.data))
			.then(console.log("error"));
	});

	{
		return (
			<div>
				{contests.map((contest) => (
					<div class="card text-center">
						<div class="card-header">{contest.name}</div>
						<div class="card-body">
							<h5 class="card-title">
								Start:{getDate(contest.start_time)}
							</h5>
							<a href=" {contest.url}" class="btn btn-primary">
								Go to Contest
							</a>
						</div>
					</div>
				))}
			</div>
		);
	}
}

function getDate(d) {
	var date = new Date(d);
	return date.toLocaleString("en-US");
}

async function contests_in_24_hours() {
	await getmyContests();
	var in_24_hours = [];
	for (var contest of myContests_db) {
		if (contest.in_24_hours <= "YES") in_24_hours.push(contest);
	}
	return in_24_hours;
}

//================================ DB functions =================================

async function setmyContests() {
	console.log("In setmyContests");
	await localforage.setItem("myContests", myContests_db);
}

async function getmyContests() {
	console.log("In getmyContests");
	localforage.getItem("myContests", function (err, value) {
		if (err) throw err;
		myContests_db = value;
	});
}
