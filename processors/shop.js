const axios = require('axios');
const pendingURL = 'https://ticketaty-shop.vercel.app/pendingMatch'
const reservationURL = 'https://ticketaty-shop.vercel.app/reserveMatch'
const cancellURL = 'https://ticketaty-shop.vercel.app/cancellMatch'
const analyticsURL = 'https://ticketaty-shop.vercel.app/analytics/'
const addMatchURL = 'https://ticketaty-shop.vercel.app/addMatch'

const processPendingTicket = async (message) => {
  const pending =  await axios.patch(pendingURL,message.body)
  const analytics = await axios.patch(analyticsURL +'pending')

  console.log('[processPendingTicket]', message)
  return Promise.resolve('[processPendingTicket]')
};

const processReservedTicket = async (message) => {
  const resrvation =  await axios.patch(reservationURL,message.body)
  const analytics = await axios.patch(analyticsURL +'reserved')

  console.log('[processReservedTicket]', message)
  return Promise.resolve('[processReservedTicket]')
};

const processCancelledTicket = async (message) => {
  const cancell =  await axios.patch(cancellURL,message.body)
  const analytics = await axios.patch(analyticsURL +'canceled')

  console.log('[processCancelledTicket]', message)
  return Promise.resolve('[processCancelledTicket]')
};

const processMasterlist = async (message) => {
  const addMatch =  await axios.post(addMatchURL,message.body)
  console.log('[processMasterlist]', message)
  return Promise.resolve('[processMasterlist]')
};

module.exports = {
  processPendingTicket,
  processReservedTicket,
  processCancelledTicket,
  processMasterlist
};