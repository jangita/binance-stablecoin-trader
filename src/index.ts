import binanceClient from 'binance-client'
import { config } from './config'
const sleep = require('system-sleep');

const client = binanceClient({
    apiKey: config.binance.APIKEY,
    apiSecret: config.binance.APISECRET,
})

async function brain(ticker: any) {
    console.log(ticker)
}

client.ws.ticker('PAXUSDT', brain)
sleep(10000)

