import React, { useState } from 'react';
import { FormControl, Typography, Select, InputLabel, Grid } from '@material-ui/core';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const Lists = () => {
    const classes = useStyles();
    const [type, setType] = useState("restaurants");
    const [ratings, setRatings] = useState('');
    const places = [
        { name: 'riverwier' },
        { name: 'riverwier' },
        { name: 'riverwier' },
        { name: 'riverwier' },
        { name: 'riverwier' },
        { name: 'riverwier' },
        { name: 'riverwier' },
        { name: 'riverwier' },
        { name: 'riverwier' },
    ];
    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Find Best Hotel and Restaurant Near to you...
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Select Place</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">
                        Restaurants
                    </MenuItem>
                    <MenuItem value="hotels">
                        Hotels
                    </MenuItem>
                    <MenuItem value="attractions">
                        Attractions
                    </MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
            <InputLabel>Select By Ratings</InputLabel>
                <Select value={ratings} onChange={(e) => setRatings(e.target.value)}>
                    <MenuItem value={0}>
                        All
                    </MenuItem>
                    <MenuItem value={3}>
                        3
                    </MenuItem>
                    <MenuItem value={4}>
                        4
                    </MenuItem>
                    <MenuItem value={4.5}>
                        4.5
                    </MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.lists}>
                {
                    places.map((p, ind)=>{
                        return(
                            <Grid item key={ind} xs={12} >
                                <PlaceDetails place={p}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}
export default Lists;