
import React, { useEffect, useRef, useState } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsAPI = () => {
      // Check if the script is already loaded
      if (!document.querySelector('script[src*="maps.googleapis.com/maps/api"]')) {
        const googleMapsScript = document.createElement('script');
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        googleMapsScript.async = true;
        googleMapsScript.defer = true;
        
        // Define the callback function in the global scope
        window.initMap = () => {
          setMapLoaded(true);
        };
        
        document.head.appendChild(googleMapsScript);
        
        return () => {
          // Clean up
          delete window.initMap;
        };
      } else {
        setMapLoaded(true);
      }
    };
    
    loadGoogleMapsAPI();
  }, []);
  
  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      try {
        // Kigali, Rwanda coordinates - approximately
        const kigaliLocation = { lat: -1.9444, lng: 30.0616 };
        
        // Create map
        const map = new google.maps.Map(mapRef.current, {
          center: kigaliLocation,
          zoom: 15,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#7c93a3" }, { lightness: "-10" }]
            },
            {
              featureType: "administrative.country",
              elementType: "geometry",
              stylers: [{ visibility: "on" }]
            },
            {
              featureType: "administrative.country",
              elementType: "geometry.stroke",
              stylers: [{ color: "#a0a4a5" }]
            },
            {
              featureType: "administrative.province",
              elementType: "geometry.stroke",
              stylers: [{ color: "#62838e" }]
            },
            {
              featureType: "landscape",
              elementType: "geometry.fill",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [{ color: "#e0e0e0" }]
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#c9ebc7" }, { visibility: "on" }]
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#cfcfcf" }]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{ color: "#e7e9ed" }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [{ color: "#a3c7df" }]
            }
          ]
        });
        
        // Create marker for TechTrends location
        const marker = new google.maps.Marker({
          position: kigaliLocation,
          map: map,
          title: "TechTrends Ltd",
          animation: google.maps.Animation.DROP,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#0A4D68",
            fillOpacity: 0.8,
            strokeColor: "white",
            strokeWeight: 2
          }
        });
        
        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 200px; text-align: center;">
              <strong style="font-size: 14px; color: #0A4D68;">TechTrends Ltd</strong>
              <p style="margin: 5px 0; font-size: 12px;">
                KK 15 Ave, Kigali City<br>
                Rwanda
              </p>
              <a href="https://maps.google.com/maps?q=-1.9444,30.0616" 
                 style="color: #F97316; font-size: 12px;" 
                 target="_blank">Get Directions</a>
            </div>
          `
        });
        
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
        
        // Open info window by default
        infoWindow.open(map, marker);
        
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    }
  }, [mapLoaded]);
  
  return (
    <div className="w-full h-full">
      <div 
        ref={mapRef} 
        className="w-full h-[400px] rounded-lg shadow-md"
      >
        {!mapLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">Loading map...</p>
          </div>
        )}
      </div>
      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center text-sm">
        <p className="text-red-500 mb-2">
          Note: To display the actual map, please replace "YOUR_API_KEY" with a valid Google Maps API key.
        </p>
        <p>
          For development purposes, you can visit{" "}
          <a 
            href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-techblue hover:text-techblue-light underline"
          >
            Google Maps Platform
          </a> 
          {" "}to obtain an API key.
        </p>
      </div>
    </div>
  );
};

// Add TypeScript global declaration for the Google Maps callback
declare global {
  interface Window {
    initMap: () => void;
  }
}

export default Map;
