import React from 'react';
import FlightForm from './components/flight_form';
import FlightOrderButton from './components/flight_order_button';

let app = (
  <div>
    <section className='-column'>
      <h3>Build Your Flight Profile</h3>
      <FlightForm/>
    </section>
    <section className='-column'>
      <h3>Generate Your Flight</h3>
      <FlightOrderButton/>
    </section>
  </div>
);

React.render(app, document.getElementById('app'));
