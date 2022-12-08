import {AminoConverter} from "../../amino";

export function createTxAminoConverters(): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {};
}
