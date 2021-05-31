import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {InputLabel,Input,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { blueGrey } from '@material-ui/core/colors';
import './Subscribe.css'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    kickstart: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { codechef, codeforces, hackerearth,hackerrank,atcoder,kickstart } = state;
  

  return (
    <div className="form">
    <h2 className="title">SUBSCRIBE</h2>
      <FormControl component="fieldset" className={classes.formControl}>
        <div className="subs">
        <FormGroup>
          <FormControlLabel className="list-group-item"
            control={<Checkbox checked={codechef} onChange={handleChange} name="codechef" />}
            label="CodeChef"
          />
          <FormControlLabel className="list-group-item"
            control={<Checkbox checked={codeforces} onChange={handleChange} name="codeforces" />}
            label="CodeForces"
            background={blueGrey}
          />
          <FormControlLabel className="list-group-item"
            control={<Checkbox checked={hackerearth} onChange={handleChange} name="hackerearth" />}
            label="HackerEarth"
            background={blueGrey}
          />
          <FormControlLabel className="list-group-item"
            control={<Checkbox checked={hackerrank} onChange={handleChange} name="hackerrank" />}
            label="HackerRank"
            background={blueGrey}
          />
          <FormControlLabel className="list-group-item"
            control={<Checkbox checked={atcoder} onChange={handleChange} name="atcoder" />}
            label="AtCoder"
            background={blueGrey}
          />
          <FormControlLabel className="list-group-item"
            control={<Checkbox checked={kickstart} onChange={handleChange} name="kickstart" />}
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