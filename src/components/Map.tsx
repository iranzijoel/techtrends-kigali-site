
import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden">
        <iframe 
          src="https://www.openstreetmap.org/export/embed.html?bbox=30.02741778402741%2C-1.9840599071571754%2C30.0956%2C-1.9040599071571754&amp;layer=mapnik&amp;marker=-1.9444%2C30.0616"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TechTrends Ltd Location Map"
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center text-sm">
        <p>
          <strong>TechTrends Ltd</strong><br />
          KK 15 Ave, Kigali City, Rwanda<br />
          <a 
            href="https://www.openstreetmap.org/?mlat=-1.9444&mlon=30.0616&zoom=15#map=15/-1.9444/30.0616" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-techblue hover:text-techblue-light underline"
          >
            Get Directions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Map;
