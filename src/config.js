const ACCOUNT_NAME = 'gabo.testnet';

function getConfig () {
  return {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    wasmFile: 'build/release/benkyo-tech.wasm',
    contractName: ACCOUNT_NAME,
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org'
  }
}

module.exports = getConfig
