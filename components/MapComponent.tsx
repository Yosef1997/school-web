'use client'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useMemo, useState } from 'react'

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  })
  const [markers] = useState([{ lat: 1.736933, lng: 98.780518 }])

  const center = useMemo(() => ({ lat: 1.736933, lng: 98.780518 }), [])

  const mapStyles = {
    height: '516px',
    width: '100%',
  }

  const options = {
    disableDefaultUI: false,
    zoomControl: true,
  }

  if (!isLoaded) return <p>Map Script is loading ...</p>

  return (
    <div className='p-4 md:p-16 lg:p-40'>
      <GoogleMap
        zoom={18}
        center={center}
        mapContainerStyle={mapStyles}
        options={options}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
    </div>
  )
}
export default MapComponent
