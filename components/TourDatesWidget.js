import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TourDatesWidget = () => {
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    // Fetch tour dates from the Bandsintown API
    const fetchTourDates = async () => {
      try {
        const response = await axios.get(
          'https://rest.bandsintown.com/v4/events',
          {
            params: {
              artist_id: 'your_artist_id', // Replace with your artist ID
              app_id: 'your_app_id', // Replace with your Bandsintown App ID
            },
          }
        );
        setTourDates(response.data);
      } catch (error) {
        console.error('Error fetching tour dates:', error);
      }
    };

    fetchTourDates();
  }, []);

  return (
    <div>
      {tourDates.map((event) => (
        <div key={event.id} className="tour-date">
          <div className="date">{event.datetime}</div>
          <div className="city">{event.venue.city}</div>
          <div className="venue">{event.venue.name}</div>
          <a href={event.url} className="ticket-link" target="_blank" rel="noopener noreferrer">
            Get Tickets
          </a>
        </div>
      ))}
    </div>
  );
};

export default TourDatesWidget;
