import React, {   } from 'react';

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    
} from 'react-google-maps'

import MapStyles from './MapStyles'

const Map = () => {



    return (
        <GoogleMap
            defaultCenter={{  lat: 36.85215, lng: 10.20786 }}
            defaultZoom={10}
            defaultOptions={{ styles: MapStyles }}
        >
        <Marker
                position={{
                lat: 36.85215,
                lng: 10.20786 
                            }}
                               
                                    icon={{
                                        url: 'loca.png',
                                        scaledSize: new window.google.maps.Size(25, 25)
                                    }}
                                />
        </GoogleMap>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
