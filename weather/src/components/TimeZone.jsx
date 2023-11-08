import React from 'react'
const {DateTime} = require("luxon")

function TimeZone() {
    const localTime = DateTime.now();

    const newYorkTime = localTime.setZone("America/New_York");

    console.log(newYorkTime.toString());
  return (
    <div></div>
  )
}

export default TimeZone