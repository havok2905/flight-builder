import React from 'react';
import FlightForm from './components/flight_form';
import FlightOrderButton from './components/flight_order_button';

let app = (
  <section>
    <h1>Flight Builder</h1>
    <FlightForm/>
    <FlightOrderButton/>
  </section>
);

React.render(app, document.getElementById('app'));
