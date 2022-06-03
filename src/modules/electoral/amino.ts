/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {
  MsgEnrollAccountOperators,
  MsgEnrollDocIssuers,
  MsgEnrollIdSigners,
  MsgEnrollLoaders,
  MsgEnrollVoter,
  MsgEnrollApprovers,
  MsgEnrollRelayers,
  MsgEnrollSwapManagers,
  MsgRevokeAccountOperators,
  MsgRevokeDocIssuers,
  MsgRevokeIdSigners,
  MsgRevokeLoaders,
  MsgRevokeVoter,
  MsgRevokeApprovers,
  MsgRevokeRelayers,
  MsgRevokeSwapManagers
} from "../../codec/shareledger/electoral/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export interface AminoMsgValue {
  readonly creator: string;
  readonly addresses: string[];
}

export interface AminoMsgEnrollAccountOperators extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "electoral/EnrollAccountOperators";
  readonly value: AminoMsgValue;
}

export function isAminoMsgEnrollAccountOperators(msg: AminoMsg): msg is AminoMsgEnrollAccountOperators {
  // NOTE: Type string and names diverge here!
  return msg.type === "electoral/EnrollAccountOperators";
}

export interface MsgEnrollAccountOperatorsEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollAccountOperators";
  readonly value: Partial<MsgEnrollAccountOperators>;
}

export function isMsgEnrollAccountOperatorsEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollAccountOperatorsEncodeObject {
  return (encodeObject as MsgEnrollAccountOperatorsEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollAccountOperators";
}

export interface AminoMsgRevokeAccountOperators extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "electoral/RevokeAccountOperators";
  readonly value: AminoMsgValue;
}

export function isAminoMsgRevokeAccountOperators(msg: AminoMsg): msg is AminoMsgRevokeAccountOperators {
  // NOTE: Type string and names diverge here!
  return msg.type === "electoral/RevokeAccountOperators";
}

export interface MsgRevokeAccountOperatorsEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeAccountOperators";
  readonly value: Partial<MsgRevokeAccountOperators>;
}

export function isMsgRevokeAccountOperatorsEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeAccountOperatorsEncodeObject {
  return (encodeObject as MsgRevokeAccountOperatorsEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeAccountOperators";
}

export interface AminoMsgEnrollDocIssuers extends AminoMsg {
  readonly type: "electoral/EnrollDocIssuers";
  readonly value: AminoMsgValue;
}

export function isAminoMsgEnrollDocIssuers(msg: AminoMsg): msg is AminoMsgEnrollDocIssuers {
  return msg.type === "electoral/EnrollDocIssuers";
}

export interface MsgEnrollDocIssuersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollDocIssuers";
  readonly value: Partial<MsgEnrollDocIssuers>;
}

export function isMsgEnrollDocIssuersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollDocIssuersEncodeObject {
  return (encodeObject as MsgEnrollDocIssuersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollDocIssuers";
}

export interface AminoMsgRevokeDocIssuers extends AminoMsg {
  readonly type: "electoral/RevokeDocIssuers";
  readonly value: AminoMsgValue;
}

export function isAminoMsgRevokeDocIssuers(msg: AminoMsg): msg is AminoMsgRevokeDocIssuers {
  return msg.type === "electoral/RevokeDocIssuers";
}

export interface MsgRevokeDocIssuersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeDocIssuers";
  readonly value: Partial<MsgRevokeDocIssuers>;
}

export function isMsgRevokeDocIssuersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeDocIssuersEncodeObject {
  return (encodeObject as MsgRevokeDocIssuersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeDocIssuers";
}

export interface AminoMsgEnrollIdSigners extends AminoMsg {
  readonly type: "electoral/EnrollIdSigners";
  readonly value: AminoMsgValue;
}

export function isAminoMsgEnrollIdSigners(msg: AminoMsg): msg is AminoMsgEnrollIdSigners {
  return msg.type === "electoral/EnrollIdSigners";
}

export interface MsgEnrollIdSignersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollIdSigners";
  readonly value: Partial<MsgEnrollIdSigners>;
}

export function isMsgEnrollIdSignersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollIdSignersEncodeObject {
  return (encodeObject as MsgEnrollIdSignersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollIdSigners";
}

export interface AminoMsgRevokeIdSigners extends AminoMsg {
  readonly type: "electoral/RevokeIdSigners";
  readonly value: AminoMsgValue;
}

export function isAminoMsgRevokeIdSigners(msg: AminoMsg): msg is AminoMsgRevokeIdSigners {
  return msg.type === "electoral/RevokeIdSigners";
}

export interface MsgRevokeIdSignersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeIdSigners";
  readonly value: Partial<MsgRevokeIdSigners>;
}

export function isMsgRevokeIdSignersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeIdSignersEncodeObject {
  return (encodeObject as MsgRevokeIdSignersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeIdSigners";
}

export interface AminoMsgEnrollLoaders extends AminoMsg {
  readonly type: "electoral/EnrollLoaders";
  readonly value: AminoMsgValue;
}

export function isAminoMsgEnrollLoaders(msg: AminoMsg): msg is AminoMsgEnrollLoaders {
  return msg.type === "electoral/EnrollLoaders";
}

export interface MsgEnrollLoadersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollLoaders";
  readonly value: Partial<MsgEnrollLoaders>;
}

export function isMsgEnrollLoadersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollLoadersEncodeObject {
  return (encodeObject as MsgEnrollLoadersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollLoaders";
}

export interface AminoMsgRevokeLoaders extends AminoMsg {
  readonly type: "electoral/RevokeLoaders";
  readonly value: AminoMsgValue;
}

export function isAminoMsgRevokeLoaders(msg: AminoMsg): msg is AminoMsgRevokeLoaders {
  return msg.type === "electoral/RevokeLoaders";
}

export interface MsgRevokeLoadersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeLoaders";
  readonly value: Partial<MsgRevokeLoaders>;
}

export function isMsgRevokeLoadersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeLoadersEncodeObject {
  return (encodeObject as MsgRevokeLoadersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeLoaders";
}

export interface AminoMsgEnrollVoter extends AminoMsg {
  readonly type: "electoral/EnrollVoter";
  readonly value: {
    readonly address: string;
    readonly creator: string;
  };
}

export function isAminoMsgEnrollVoter(msg: AminoMsg): msg is AminoMsgEnrollVoter {
  return msg.type === "electoral/EnrollVoter";
}

export interface MsgEnrollVoterEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollVoter";
  readonly value: Partial<MsgEnrollVoter>;
}

export function isMsgEnrollVoterEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollVoterEncodeObject {
  return (encodeObject as MsgEnrollVoterEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollVoter";
}

export interface AminoMsgRevokeVoter extends AminoMsg {
  readonly type: "electoral/RevokeVoter";
  readonly value: {
    readonly address: string;
    readonly creator: string;
  };
}

export function isAminoMsgRevokeVoter(msg: AminoMsg): msg is AminoMsgRevokeVoter {
  return msg.type === "electoral/RevokeVoter";
}

export interface MsgRevokeVoterEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeVoter";
  readonly value: Partial<MsgRevokeVoter>;
}

export function isMsgRevokeVoterEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeVoterEncodeObject {
  return (encodeObject as MsgRevokeVoterEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeVoter";
}

export interface AminoMsgEnrollRelayers extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "electoral/EnrollRelayers";
  readonly value: AminoMsgValue;
}

export function isAminoMsgEnrollRelayers(msg: AminoMsg): msg is AminoMsgEnrollRelayers {
  // NOTE: Type string and names diverge here!
  return msg.type === "electoral/EnrollRelayers";
}

export interface MsgEnrollRelayersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollRelayers";
  readonly value: Partial<MsgEnrollRelayers>;
}

export function isMsgEnrollRelayersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollRelayersEncodeObject {
  return (encodeObject as MsgEnrollRelayersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollRelayers";
}

export interface AminoMsgRevokeRelayers extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "electoral/RevokeRelayers";
  readonly value: AminoMsgValue;
}

export function isAminoMsgRevokeRelayers(msg: AminoMsg): msg is AminoMsgRevokeRelayers {
  // NOTE: Type string and names diverge here!
  return msg.type === "electoral/RevokeRelayers";
}

export interface MsgRevokeRelayersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeRelayers";
  readonly value: Partial<MsgRevokeRelayers>;
}

export function isMsgRevokeRelayersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeRelayersEncodeObject {
  return (encodeObject as MsgRevokeRelayersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeRelayers";
}

export interface AminoMsgEnrollApprovers extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "electoral/EnrollApprovers";
  readonly value: AminoMsgValue;
}

export function isAminoMsgEnrollApprovers(msg: AminoMsg): msg is AminoMsgEnrollApprovers {
  // NOTE: Type string and names diverge here!
  return msg.type === "electoral/EnrollApprovers";
}

export interface MsgEnrollApproversEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollApprovers";
  readonly value: Partial<MsgEnrollApprovers>;
}

export function isMsgEnrollApproversEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollApproversEncodeObject {
  return (encodeObject as MsgEnrollApproversEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollApprovers";
}

export interface AminoMsgRevokeApprovers extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "electoral/RevokeApprovers";
  readonly value: AminoMsgValue;
}

export function isAminoMsgRevokeApprovers(msg: AminoMsg): msg is AminoMsgRevokeApprovers {
  // NOTE: Type string and names diverge here!
  return msg.type === "electoral/RevokeApprovers";
}

export interface MsgRevokeApproversEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeApprovers";
  readonly value: Partial<MsgRevokeApprovers>;
}

export function isMsgRevokeApproversEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeApproversEncodeObject {
  return (encodeObject as MsgRevokeApproversEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeApprovers";
}

export interface AminoMsgEnrollSwapManagers extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "electoral/EnrollSwapManagers";
  readonly value: AminoMsgValue;
}

export function isAminoMsgEnrollSwapManagers(msg: AminoMsg): msg is AminoMsgEnrollSwapManagers {
  // NOTE: Type string and names diverge here!
  return msg.type === "electoral/EnrollSwapManagers";
}

export interface MsgEnrollSwapManagersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollSwapManagers";
  readonly value: Partial<MsgEnrollSwapManagers>;
}

export function isMsgEnrollSwapManagersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollSwapManagersEncodeObject {
  return (encodeObject as MsgEnrollSwapManagersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollSwapManagers";
}

export interface AminoMsgRevokeSwapManagers extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "electoral/RevokeSwapManagers";
  readonly value: AminoMsgValue;
}

export function isAminoMsgRevokeSwapManagers(msg: AminoMsg): msg is AminoMsgRevokeSwapManagers {
  // NOTE: Type string and names diverge here!
  return msg.type === "electoral/RevokeSwapManagers";
}

export interface MsgRevokeSwapManagersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeSwapManagers";
  readonly value: Partial<MsgRevokeSwapManagers>;
}

export function isMsgRevokeSwapManagersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeSwapManagersEncodeObject {
  return (encodeObject as MsgRevokeSwapManagersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeSwapManagers";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/shareledger.electoral.MsgEnrollAccountOperators": {
      aminoType: "electoral/EnrollAccountOperators",
      toAmino: ({addresses, creator}: MsgEnrollAccountOperators): AminoMsgEnrollAccountOperators["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgEnrollAccountOperators["value"]): MsgEnrollAccountOperators => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgRevokeAccountOperators": {
      aminoType: "electoral/RevokeAccountOperators",
      toAmino: ({addresses, creator}: MsgRevokeAccountOperators): AminoMsgRevokeAccountOperators["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgRevokeAccountOperators["value"]): MsgRevokeAccountOperators => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgEnrollDocIssuers": {
      aminoType: "electoral/EnrollDocIssuers",
      toAmino: ({addresses, creator}: MsgEnrollDocIssuers): AminoMsgEnrollDocIssuers["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgEnrollDocIssuers["value"]): MsgEnrollDocIssuers => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgRevokeDocIssuers": {
      aminoType: "electoral/RevokeDocIssuers",
      toAmino: ({addresses, creator}: MsgRevokeDocIssuers): AminoMsgRevokeDocIssuers["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgRevokeDocIssuers["value"]): MsgRevokeDocIssuers => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgEnrollIdSigners": {
      aminoType: "electoral/EnrollIdSigners",
      toAmino: ({addresses, creator}: MsgEnrollIdSigners): AminoMsgEnrollIdSigners["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgEnrollIdSigners["value"]): MsgEnrollIdSigners => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgRevokeIdSigners": {
      aminoType: "electoral/RevokeIdSigners",
      toAmino: ({addresses, creator}: MsgRevokeIdSigners): AminoMsgRevokeIdSigners["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgRevokeIdSigners["value"]): MsgRevokeIdSigners => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgEnrollLoaders": {
      aminoType: "electoral/EnrollLoaders",
      toAmino: ({addresses, creator}: MsgEnrollLoaders): AminoMsgEnrollLoaders["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgEnrollLoaders["value"]): MsgEnrollLoaders => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgRevokeLoaders": {
      aminoType: "electoral/RevokeLoaders",
      toAmino: ({addresses, creator}: MsgRevokeLoaders): AminoMsgRevokeLoaders["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgRevokeLoaders["value"]): MsgRevokeLoaders => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgEnrollVoter": {
      aminoType: "electoral/EnrollVoter",
      toAmino: ({address, creator}: MsgEnrollVoter): AminoMsgEnrollVoter["value"] => ({
        address,
        creator
      }),
      fromAmino: ({address, creator}: AminoMsgEnrollVoter["value"]): MsgEnrollVoter => ({
        address,
        creator
      })
    },
    "/shareledger.electoral.MsgRevokeVoter": {
      aminoType: "electoral/RevokeVoter",
      toAmino: ({address, creator}: MsgRevokeVoter): AminoMsgRevokeVoter["value"] => ({
        address,
        creator
      }),
      fromAmino: ({address, creator}: AminoMsgRevokeVoter["value"]): MsgRevokeVoter => ({
        address,
        creator
      })
    },
    "/shareledger.electoral.MsgEnrollRelayers": {
      aminoType: "electoral/EnrollRelayers",
      toAmino: ({addresses, creator}: MsgEnrollRelayers): AminoMsgEnrollRelayers["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgEnrollRelayers["value"]): MsgEnrollRelayers => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgRevokeRelayers": {
      aminoType: "electoral/RevokeRelayers",
      toAmino: ({addresses, creator}: MsgRevokeRelayers): AminoMsgRevokeRelayers["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgRevokeRelayers["value"]): MsgRevokeRelayers => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgEnrollApprovers": {
      aminoType: "electoral/EnrollApprovers",
      toAmino: ({addresses, creator}: MsgEnrollApprovers): AminoMsgEnrollApprovers["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgEnrollApprovers["value"]): MsgEnrollApprovers => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgRevokeApprovers": {
      aminoType: "electoral/RevokeApprovers",
      toAmino: ({addresses, creator}: MsgRevokeApprovers): AminoMsgRevokeApprovers["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgRevokeApprovers["value"]): MsgRevokeApprovers => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgEnrollSwapManagers": {
      aminoType: "electoral/EnrollSwapManagers",
      toAmino: ({addresses, creator}: MsgEnrollSwapManagers): AminoMsgEnrollSwapManagers["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgEnrollSwapManagers["value"]): MsgEnrollSwapManagers => ({
        addresses: [...addresses],
        creator
      })
    },
    "/shareledger.electoral.MsgRevokeSwapManagers": {
      aminoType: "electoral/RevokeSwapManagers",
      toAmino: ({addresses, creator}: MsgRevokeSwapManagers): AminoMsgRevokeSwapManagers["value"] => ({
        addresses: [...addresses],
        creator
      }),
      fromAmino: ({addresses, creator}: AminoMsgRevokeSwapManagers["value"]): MsgRevokeSwapManagers => ({
        addresses: [...addresses],
        creator
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.electoral.MsgEnrollAccountOperators", MsgEnrollAccountOperators],
    ["/shareledger.electoral.MsgRevokeAccountOperators", MsgRevokeAccountOperators],
    ["/shareledger.electoral.MsgEnrollDocIssuers", MsgEnrollDocIssuers],
    ["/shareledger.electoral.MsgRevokeDocIssuers", MsgRevokeDocIssuers],
    ["/shareledger.electoral.MsgEnrollIdSigners", MsgEnrollIdSigners],
    ["/shareledger.electoral.MsgRevokeIdSigners", MsgRevokeIdSigners],
    ["/shareledger.electoral.MsgEnrollLoaders", MsgEnrollLoaders],
    ["/shareledger.electoral.MsgRevokeLoaders", MsgRevokeLoaders],
    ["/shareledger.electoral.MsgEnrollVoter", MsgEnrollVoter],
    ["/shareledger.electoral.MsgRevokeVoter", MsgRevokeVoter],
    ["/shareledger.electoral.MsgEnrollRelayers", MsgEnrollRelayers],
    ["/shareledger.electoral.MsgRevokeRelayers", MsgRevokeRelayers],
    ["/shareledger.electoral.MsgEnrollApprovers", MsgEnrollApprovers],
    ["/shareledger.electoral.MsgRevokeApprovers", MsgRevokeApprovers],
    ["/shareledger.electoral.MsgEnrollSwapManagers", MsgEnrollSwapManagers],
    ["/shareledger.electoral.MsgRevokeSwapManagers", MsgRevokeSwapManagers]
  ];
}
