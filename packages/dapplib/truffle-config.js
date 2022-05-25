require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strike dash soccer evil hunt phone orange gasp'; 
let testAccounts = [
"0x78aea5b242d3f8e3d4bd4c20d21f2e36ee39cddf9a01d394426e43478096b1dc",
"0x6da06173b78c1757131ba7d1f0ca207e909dbf32ef3b9f62b57a9d6206cbdbc4",
"0xafe409e2833fad9913ee781772a96f345324fe800f55c70daa20bf8f6dce4692",
"0xda7e3c5a2186a0d6eca317966aa7063b2a86deeba915fcd5d22fb6afb014a0ef",
"0xc339f5fa4d84b4103c7ac5608b228a50d26c598713a384287368cc039a8135fe",
"0x92c63fbea9cc8c7a1bfe0eaf504a6358786d1dbae6b64c148af05e352ac27c62",
"0x5b80693e56d035e8e26a414f18429153125b87c813fb217559632690ef7bd845",
"0x86679787a8bce5d97da4f4856ca719d08998b7251488d205785285c1ae5713f9",
"0x48bd832cfde5e1f9fca5b5265df2760d78ef31f07dd6864cf7975c85764e601c",
"0x910e854c843ed549fe3e17c19f30e87acb1950b3f1b4973b08b4959fcce0d058"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

