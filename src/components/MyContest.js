import axios from "axios";
import React, { useState, useEffect } from "react";
import localforage from "localforage";

let myContests_db = [];

localforage.getItem("myContests", function (err, value) {
	if (err) console.log(err);
	myContests_db = value;
});

export default function MyContest() {
	//let contest=[]
	//contest=contests_in_24_hours(myContests_db)
	//console.log(contest)
	const [mycontest,setmycontest]= useState(() => {
		return myContests_db
	}

	)
	//setmycontest(contest24 => contest24= myContests_db)
	{
		return (
			<div>
				{mycontest.map((contest) => (
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

function contests_in_24_hours(myContests_db) {
	//await getmyContests();
	var in_24_hours = [];
	for (var contest of myContests_db) {
		if (contest.in_24_hours === "Yes") in_24_hours.push(contest);
	}
	return in_24_hours;
}

//================================ DB functions =================================

// async function setmyContests() {
// 	console.log("In setmyContests");
// 	await localforage.setItem("myContests", myContests_db);
// }