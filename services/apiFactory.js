import { AxiosHost } from './axiosGlobal';

// Get All Banks
export const getBanks = (payload) =>{
  const url =`/banks`
  return AxiosHost.get(url,payload)
}

// Resolve Bank Account
export const resolveBankAccount = (payload) =>{
  const url =`/resolveAccount`
  return AxiosHost.post(url,payload)
}