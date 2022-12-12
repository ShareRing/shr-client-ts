import {AminoConverter} from "@shareledgerjs/amino";

export function createTxAminoConverters(): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {};
}
