var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
    networks: {
        ropsten: {
            network_id: 3,
            provider: function() {
                return new HDWalletProvider(
                    "XXXXXXXX",
                    "https://ropsten.infura.io/XXXXXXXX"
                );
            },
            gas: 4700000,
            gasPrice: 45000000000
        },
        development: {
            network_id: "*",
            port: 8545,
            host: "localhost",
            gas: 4700000,
            gasPrice: 15000000000
        },
        live: {
            network_id: 1,
            provider: function() {
                return new HDWalletProvider(
                    "XXXXXXXX",
                    "https://mainnet.infura.io/XXXXXXXX"
                );
            },
            gas: 4700000,
            gasPrice: 15000000000
        }
    },
    rpc: {
        host: "localhost",
        port: 8545
    }
};
