export const config = {
    binance: { // Put your binance API password and key here.
        APIKEY: 'API Key here',
        APISECRET: 'API Password here'
    },

    coins: [ // All the coins to be compared
        'PAX',
        'TUSD',
        'USDC',
        'USDT',
        'BUSD',
        'GUSD',
        'DAI',
    ],

    startCoin: 'BUSD', // Currency to start with
    startAmount: 100, // Amount to start with in currency above

    tradeFee: 0.1, //Trading Fee as a percent
    minimumProfit: 1, // only trade if we will make this much spread profit percent
    interval: 10, // How often to look at the markets and compare in seconds

    fee: 0.1 // trade fee in USD

}