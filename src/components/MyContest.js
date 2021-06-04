import axios from "axios";
import React, { useState, useEffect } from "react";
import localforage from "localforage";
import { getAllByPlaceholderText } from "@testing-library/dom";
import "./Subscribe.css";

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
					<div>
					<div class="card text-center">
					<h6 class="card-header">{contest.name}</h6>
					<div class="card-body">
					  <h7 class="card-title">Start:{getDate(contest.start_time)}</h7>
					  <button type="button" shape="circle" class="btn btn-primary btn-sm">Go to Contest</button>
					  <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-trash-fill"></i></button>
					  <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-calendar-event"></i></button>
					  <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-alarm-fill"></i></button>
					  
					 
					</div>	
				  </div>
							
							
					<br></br>
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