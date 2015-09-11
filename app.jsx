import React from 'react';
import FlightForm from './flight-form';

let app = (
  <section>
    <h1>Flight Builder</h1>
    <FlightForm/>
  </section>
);

React.render(app, document.getElementById('app'));
