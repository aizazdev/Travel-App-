import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import {placeData} from './components/api/api';
import Header from './components/Header/Header';
import Lists from './components/Lists/Lists';
import Maps from './components/Maps/Maps';

const App = ()=> {
  const[places, setPlaces] = useState([]);
  const[coordinates, setCoordinates] = useState({});
  const[bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=> {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {
    placeData(bounds).then((data)=> {
      console.log("data is ", data);
      setPlaces(data);
    });
  }, [bounds, coordinates])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: "100%"}}>
        <Grid item xs={12} md={4}>
          <Lists />
        </Grid>
        <Grid item xs={12} md={8}>
          <Maps 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}            
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
