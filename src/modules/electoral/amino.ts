/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {
  MsgEnrollAccountOperators,
  MsgEnrollDocIssuers,
  MsgEnrollIdSigners,
  MsgEnrollLoaders,
  MsgEnrollVoter,
  MsgRevokeAccountOperators,
  MsgRevokeDocIssuers,
  MsgRevokeIdSigners,
  MsgRevokeLoaders,
  MsgRevokeVoter
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
    ["/shareledger.electoral.MsgRevokeVoter", MsgRevokeVoter]
  ];
}
