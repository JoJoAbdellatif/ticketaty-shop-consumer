const axios = require('axios');
const pendingURL = 'https://ticketaty-shop.vercel.app/pendingMatch'
const reservationURL = 'https://ticketaty-shop.vercel.app/reserveMatch'
const cancellURL = 'https://ticketaty-shop.vercel.app/cancellMatch'


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

const processMasterlist = async (message) => {
  console.log('[processMasterlist]', message)
  return Promise.resolve('[processMasterlist]')
};

module.exports = {
  processPendingTicket,
  processReservedTicket,
  processCancelledTicket,
};