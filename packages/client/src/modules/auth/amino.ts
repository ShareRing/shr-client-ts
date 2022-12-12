import {AminoConverter} from "@shareledgerjs/amino";

export function createAuthAminoConverters(): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {};
}
