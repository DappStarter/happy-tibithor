require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture struggle cruise meadow company half knee metal gather'; 
let testAccounts = [
"0x0c98aa8e422a896b6261114ee860da3050cf2fd794daf58add2ebfa14f8a36ea",
"0x247cc364b8c882a4bd200e2f44e752d622632bfc3550e51d6124ff69012c07f3",
"0x7250df27f8e3da0657e78256da9ea5787c59f351ee9c7fa61b57ea867f630007",
"0x302ea2fb2e425a8634b1e0c7b19a9ed84ef748097a8b1e22d9e74323be7ff8e6",
"0xe791caf7d2ebd51dde974ffd6f36f748f8bd5e0b5f80aa4360d2155c59b685c4",
"0x18ffb8a48c07261b51e332e756fc4737296bbf0e3fd9a1abcd306a31c210f887",
"0xe0b30ed07b1d28c42d0d9345429d6740374b2626a19068d882c15a71330551e0",
"0x7ff61c1415064b203d33eb8aa27c5357cc596f6f45ac26695878ab8c1373aa14",
"0x9e63edc90cb50caf52478b5a10d884920215275e8f6acb4661eb0675738bbee4",
"0x66c67d688c5d87e2f0ae11a07ece396a4bdc361440ee6891987d97deff8dcd55"
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
            version: '^0.5.11'
        }
    }
};
