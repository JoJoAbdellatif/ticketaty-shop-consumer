const axios = require('axios');
const pendingURL = 'http://localhost:3000/pendingMatch'
const reservationURL = 'http://localhost:3000/reserveMatch'
const cancellURL = 'http://localhost:3000/cancellMatch'

const processPendingTicket = async (message) => {
  const pending =  await axios.patch(pendingURL,message.body)
  console.log('[processPendingTicket]', message)
  return Promise.resolve('[processPendingTicket]')
};

const processReservedTicket = async (message) => {
  const resrvation =  await axios.patch(reservationURL,message.body)
  console.log('[processReservedTicket]', message)
  return Promise.resolve('[processReservedTicket]')
};

const processCancelledTicket = async (message) => {
  const cancell =  await axios.patch(cancellURL,message.body)
  console.log('[processCancelledTicket]', message)
  return Promise.resolve('[processCancelledTicket]')
};


module.exports = {
  processPendingTicket,
  processReservedTicket,
  processCancelledTicket
};
