import React, { Component } from "react";
import ReactDOM from "react-dom";
import { InputLabel, Input, Button, Icon, SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { blueGrey } from "@material-ui/core/colors";
import "./Subscribe.css";
import localforage from "localforage";
import IconButton from '@material-ui/core/IconButton';
import codechefIcon from '@iconify-icons/simple-icons/codechef'

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	formControl: {
		margin: theme.spacing(3),
	},
}));

export default function Subscribe() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		codechef: true,
		codeforces: true,
		hackerearth: true,
		hackerrank: true,
		atcoder: true,
		kickstart: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const {
		codechef,
		codeforces,
		hackerearth,
		hackerrank,
		atcoder,
		kickstart,
	} = state;

	return (
		<div className="form">
			<h2 className="title">SUBSCRIBE</h2>
			<FormControl component="fieldset" className={classes.formControl}>
				<div className="subs">
					<FormGroup>
						<div>
						<FormControlLabel
							className="list-group-item" 
							control={
								<Checkbox
									checked={codechef}
									onChange={handleChange}
									name="codechef"		
								/>
								
							}
							
							label="CodeChef"
						/>
						</div>
						<FormControlLabel
							className="list-group-item"
							control={
								
								<Checkbox
									checked={codeforces}
									onChange={handleChange}
									name="codeforces"
								/>
							}
							label="CodeForces"
							background={blueGrey}
						/>
						<FormControlLabel
							className="list-group-item"
							control={
								<Checkbox
									checked={hackerearth}
									onChange={handleChange}
									name="hackerearth"
								/>
							}
							label="HackerEarth"
							background={blueGrey}
						/>
						<FormControlLabel
							className="list-group-item"
							control={
								<Checkbox
									checked={hackerrank}
									onChange={handleChange}
									name="hackerrank"
								/>
							}
							label="HackerRank"
							background={blueGrey}
						/>
						<FormControlLabel
							className="list-group-item"
							control={
								<Checkbox
									checked={atcoder}
									onChange={handleChange}
									name="atcoder"
								/>
							}
							label="AtCoder"
							background={blueGrey}
						/>
						<FormControlLabel
							className="list-group-item"
							control={
								<Checkbox
									checked={kickstart}
									onChange={handleChange}
									name="kickstart"
								/>
							}
							label="KickStart"
							background={blueGrey}
						/>
					</FormGroup>
					{/* <div className="form-group">
            <Button className="btn btn-success">
               Save Changes
            </Button>
        </div> */}
				</div>
			</FormControl>
		</div>
	);
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Checkbox from '@material-ui/core/Checkbox';
// import Avatar from '@material-ui/core/Avatar';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function Subscribe() {

//   const classes = useStyles();
// 	const [state, setState] = React.useState({
// 		codechef: true,
// 		codeforces: true,
// 		hackerearth: true,
// 		hackerrank: true,
// 		atcoder: true,
// 		kickstart: true,
// 	});

// 	const handleChange = (event) => {
// 		setState({ ...state, [event.target.name]: event.target.checked });
// 	};

// 	const {
// 		codechef,
// 		codeforces,
// 		hackerearth,
// 		hackerrank,
// 		atcoder,
// 		kickstart,
// 	} = state;
// //   const [checked, setChecked] = React.useState([1]);

// //   const handleChange = (value) => () => {
// //     const currentIndex = state.indexOf(value);
// //     const newChecked = [...state];

// //     if (currentIndex === -1) {
// //       newChecked.push(value);
// //     } else {
// //       newChecked.splice(currentIndex, 1);
// //     }

// //     setState(newChecked);
// //   };

//   	return (
    	

//       <div>
// 		<List dense className={classes.root}>  
// 		  <ListItem button>
// 			<ListItemAvatar>
// 				<Avatar
// 					alt={`Codechef`}
// 					src={`img/codechef.jpg`}
// 				/>
// 					</ListItemAvatar>
// 					<ListItemText  primary={`CodeChef`} />
// 					<ListItemSecondaryAction>
// 					<Checkbox
// 						checked={codechef}
// 						onChange={handleChange(codechef)}
// 					/>
// 					</ListItemSecondaryAction>
// 			</ListItem>	
// 			<ListItem button>
// 			<ListItemAvatar>
// 				<Avatar
// 					alt={`CodeForces`}
// 					src={`img/codeforces.jpg`}
// 				/>
// 					</ListItemAvatar>
// 					<ListItemText  primary={`CodeForces`} />
// 					<ListItemSecondaryAction>
// 					<Checkbox
// 						checked={codeforces}
// 						onChange={handleChange}
// 					/>
// 					</ListItemSecondaryAction>
// 			</ListItem>	
// 			<ListItem button>
// 			<ListItemAvatar>
// 				<Avatar
// 					alt={`HackerRank`}
// 					src={`img/hackerrank.png`}
// 				/>
// 					</ListItemAvatar>
// 					<ListItemText  primary={`HackerRank`} />
// 					<ListItemSecondaryAction>
// 					<Checkbox
// 						checked={hackerrank}
// 						onChange={handleChange}
// 					/>
// 					</ListItemSecondaryAction>
// 			</ListItem>
// 			<ListItem button>	
// 			<ListItemAvatar>
// 				<Avatar
// 					alt={`HackerEarth`}
// 					src={`img/hackerearth.png`}
// 				/>
// 					</ListItemAvatar>
// 					<ListItemText  primary={`HackerEarth`} />
// 					<ListItemSecondaryAction>
// 					<Checkbox
// 						checked={hackerearth}
// 						onChange={handleChange}
// 					/>
// 					</ListItemSecondaryAction>
// 			</ListItem>	
// 			<ListItem button>
// 			<ListItemAvatar>
// 				<Avatar
// 					alt={`Atcoder`}
// 					src={`img/icon32.png`}
// 				/>
// 					</ListItemAvatar>
// 					<ListItemText  primary={`AtCoder`} />
// 					<ListItemSecondaryAction>
// 					<Checkbox
// 						checked={atcoder}
// 						onChange={handleChange}
// 					/>
// 					</ListItemSecondaryAction>
// 			</ListItem>	
// 			<ListItem button>
// 			<ListItemAvatar>
// 				<Avatar
// 					alt={`KickStart`}
// 					src={`img/google_play.png`}
// 				/>
// 					</ListItemAvatar>
// 					<ListItemText  primary={`KickStart`} />
// 					<ListItemSecondaryAction>
// 					<Checkbox
// 						checked={kickstart}
// 						onChange={handleChange}
// 					/>
// 					</ListItemSecondaryAction>
// 			</ListItem>	
			
	
	
	

//     	</List>
// 	</div>
// 	)
// }
