import React, { Component } from 'react';
import { GoogleMap, LoadScript,InfoWindow,Marker} from '@react-google-maps/api';



const containerStyle = {
  width: "60%",
  height: "70%",
  margin:'0 auto',
 
 
};


const center = {
  lat: 21.286000,
  lng: -157.840000,
};
const position= {
  lat: 21.286000,
  lng: -157.840000, 
};



//zoom은 확대임. 크기가 클수록 클로즈업함
class Map extends Component {
   
   
  render() {

    
    return (
     
      <LoadScript
        googleMapsApiKey="process.env.REACT_APP_Google_Api_Key"
      >
      
        <GoogleMap
         
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        > 
        <Marker position={position} draggable={true} >
            {/* <InfoWindow
            onUnmount={onLoad}
            position={{Marker}}
            >
               
                <div style={divStyle}>
                    <h1>Features</h1>
                </div>
            </InfoWindow>     */}
            
        </Marker>
        </GoogleMap>
      </LoadScript>
    )
  }
}


export default Map;