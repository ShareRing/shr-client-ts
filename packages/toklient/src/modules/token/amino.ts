import {AminoConverter} from "@shareledgerjs/amino";

export function createTokenAminoConverters(): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {};
}
