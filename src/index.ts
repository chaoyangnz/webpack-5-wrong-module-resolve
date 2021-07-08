import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getBasicClient } from 'box-node-sdk';

export async function query() {
  const response = await axios.get('https://chao.yang.to')
  return response.data
}

export function getBoxClient(token: string) {
  return getBasicClient(token)
}
