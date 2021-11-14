import Web3 from 'web3'

/**
 * init web3
 * @returns new Web3
 */
export function getWeb3() {
  const provider = new Web3.providers.HttpProvider('https://http-mainnet.hecochain.com')
  return new Web3(provider)
}

/**
 * format Token
 * @returns token
 */
export function toChecksumAddress(token) {
  return Web3.utils.toChecksumAddress(token)
}

/**
 * check Token
 * @returns token
 */
export function checkAddressChecksum(token) {
  return Web3.utils.checkAddressChecksum(token)
}

/**
 * get contract
 * @returns contract
 */
export function getContract(contractJson, token, web3) {
  return getContractByABI(contractJson.abi, token, web3)
}

/**
 * get contract
 * @returns contract
 */
export function getContractByABI(contractABI, token, web3) {
  if (!token) {
    return new web3.eth.Contract(contractABI)
  } else {
    return new web3.eth.Contract(contractABI, toChecksumAddress(token))
  }
}

/**
 * Wei To Ether
 * @returns etherValue
 */
export function weiToEther(amount, web3) {
  return web3.utils.fromWei(amount, 'ether')
}

/**
 * Ether To Wei
 * @returns weiValue
 */
export function etherToWei(amount, web3) {
  return web3.utils.toWei(amount.toString(), 'ether')
}
