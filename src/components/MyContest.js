import axios from "axios";
import React, { useState, useEffect } from "react";
import localforage from "localforage";

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
								Start:{contest.start_time}
							</h5>
							<a href="{contest.url}" class="btn btn-primary">
								Go to Contest
							</a>
						</div>
					</div>
				))}
			</div>
		);
	}
}
