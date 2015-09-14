import React from 'react';
import FlightForm from './components/flight_form';
import FlightOrderButton from './components/flight_order_button';

let app = (
  <div>
    <header>
      <h1>Flight Builder</h1>
      <h2>Build The Ideal Flight Of Beers</h2>
    </header>
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
