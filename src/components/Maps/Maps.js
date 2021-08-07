import React from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = ()=> {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        }
      };
    return(
        <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDpoyFr2fdi3iiCa_OwqKrO66d0c8LLRQg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={14}
        center={defaultProps.center}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>

    )
}
//AIzaSyDpoyFr2fdi3iiCa_OwqKrO66d0c8LLRQg
//AIzaSyAaE11irSIFGbvMiIzIB6ToTTyc6lewl90
export default Maps;