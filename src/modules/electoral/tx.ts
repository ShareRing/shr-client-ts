import {BaseClient} from "../../baseclient";
import {
  MsgEnrollAccountOperators,
  MsgEnrollApprovers,
  MsgEnrollDocIssuers,
  MsgEnrollIdSigners,
  MsgEnrollLoaders,
  MsgEnrollRelayers,
  MsgEnrollSwapManagers,
  MsgEnrollVoter,
  MsgRevokeAccountOperators,
  MsgRevokeApprovers,
  MsgRevokeDocIssuers,
  MsgRevokeIdSigners,
  MsgRevokeLoaders,
  MsgRevokeRelayers,
  MsgRevokeSwapManagers,
  MsgRevokeVoter
} from "../../codec/shareledger/electoral/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export function createElectoralTypes(): ReadonlyArray<[string, GeneratedType]> {
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

export function createElectoralActions(): Record<string, string> {
  return {
    "/shareledger.electoral.MsgEnrollAccountOperators": "electoral_enroll-account-operators",
    "/shareledger.electoral.MsgRevokeAccountOperators": "electoral_revoke-account-operators",
    "/shareledger.electoral.MsgEnrollDocIssuers": "electoral_enroll-doc-issuers",
    "/shareledger.electoral.MsgRevokeDocIssuers": "electoral_revoke-doc-issuers",
    "/shareledger.electoral.MsgEnrollIdSigners": "electoral_enroll-id-signers",
    "/shareledger.electoral.MsgRevokeIdSigners": "electoral_revoke-id-signers",
    "/shareledger.electoral.MsgEnrollLoaders": "electoral_enroll-loaders",
    "/shareledger.electoral.MsgRevokeLoaders": "electoral_revoke-loaders",
    "/shareledger.electoral.MsgEnrollVoter": "electoral_enroll-voter",
    "/shareledger.electoral.MsgRevokeVoter": "electoral_revoke-voter",
    "/shareledger.electoral.MsgEnrollApprovers": "electoral_enroll-approvers",
    "/shareledger.electoral.MsgRevokeApprovers": "electoral_revoke-approvers",
    "/shareledger.electoral.MsgEnrollRelayers": "electoral_enroll-relayers",
    "/shareledger.electoral.MsgRevokeRelayers": "electoral_revoke-relayers",
    "/shareledger.electoral.MsgEnrollSwapManagers": "electoral_enroll-swap-managers",
    "/shareledger.electoral.MsgRevokeSwapManagers": "electoral_revoke-swap-managers"
  };
}

export interface MsgEnrollAccountOperatorsEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollAccountOperators";
  readonly value: Partial<MsgEnrollAccountOperators>;
}

export function isMsgEnrollAccountOperatorsEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollAccountOperatorsEncodeObject {
  return (encodeObject as MsgEnrollAccountOperatorsEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollAccountOperators";
}

export interface MsgRevokeAccountOperatorsEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeAccountOperators";
  readonly value: Partial<MsgRevokeAccountOperators>;
}

export function isMsgRevokeAccountOperatorsEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeAccountOperatorsEncodeObject {
  return (encodeObject as MsgRevokeAccountOperatorsEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeAccountOperators";
}

export interface MsgEnrollDocIssuersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollDocIssuers";
  readonly value: Partial<MsgEnrollDocIssuers>;
}

export function isMsgEnrollDocIssuersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollDocIssuersEncodeObject {
  return (encodeObject as MsgEnrollDocIssuersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollDocIssuers";
}

export interface MsgRevokeDocIssuersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeDocIssuers";
  readonly value: Partial<MsgRevokeDocIssuers>;
}

export function isMsgRevokeDocIssuersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeDocIssuersEncodeObject {
  return (encodeObject as MsgRevokeDocIssuersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeDocIssuers";
}

export interface MsgEnrollIdSignersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollIdSigners";
  readonly value: Partial<MsgEnrollIdSigners>;
}

export function isMsgEnrollIdSignersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollIdSignersEncodeObject {
  return (encodeObject as MsgEnrollIdSignersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollIdSigners";
}

export interface MsgRevokeIdSignersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeIdSigners";
  readonly value: Partial<MsgRevokeIdSigners>;
}

export function isMsgRevokeIdSignersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeIdSignersEncodeObject {
  return (encodeObject as MsgRevokeIdSignersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeIdSigners";
}

export interface MsgEnrollLoadersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollLoaders";
  readonly value: Partial<MsgEnrollLoaders>;
}

export function isMsgEnrollLoadersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollLoadersEncodeObject {
  return (encodeObject as MsgEnrollLoadersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollLoaders";
}

export interface MsgRevokeLoadersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeLoaders";
  readonly value: Partial<MsgRevokeLoaders>;
}

export function isMsgRevokeLoadersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeLoadersEncodeObject {
  return (encodeObject as MsgRevokeLoadersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeLoaders";
}

export interface MsgEnrollVoterEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollVoter";
  readonly value: Partial<MsgEnrollVoter>;
}

export function isMsgEnrollVoterEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollVoterEncodeObject {
  return (encodeObject as MsgEnrollVoterEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollVoter";
}

export interface MsgRevokeVoterEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeVoter";
  readonly value: Partial<MsgRevokeVoter>;
}

export function isMsgRevokeVoterEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeVoterEncodeObject {
  return (encodeObject as MsgRevokeVoterEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeVoter";
}

export interface MsgEnrollRelayersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollRelayers";
  readonly value: Partial<MsgEnrollRelayers>;
}

export function isMsgEnrollRelayersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollRelayersEncodeObject {
  return (encodeObject as MsgEnrollRelayersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollRelayers";
}

export interface MsgRevokeRelayersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeRelayers";
  readonly value: Partial<MsgRevokeRelayers>;
}

export function isMsgRevokeRelayersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeRelayersEncodeObject {
  return (encodeObject as MsgRevokeRelayersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeRelayers";
}

export interface MsgEnrollApproversEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollApprovers";
  readonly value: Partial<MsgEnrollApprovers>;
}

export function isMsgEnrollApproversEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollApproversEncodeObject {
  return (encodeObject as MsgEnrollApproversEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollApprovers";
}

export interface MsgRevokeApproversEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeApprovers";
  readonly value: Partial<MsgRevokeApprovers>;
}

export function isMsgRevokeApproversEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeApproversEncodeObject {
  return (encodeObject as MsgRevokeApproversEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeApprovers";
}

export interface MsgEnrollSwapManagersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgEnrollSwapManagers";
  readonly value: Partial<MsgEnrollSwapManagers>;
}

export function isMsgEnrollSwapManagersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEnrollSwapManagersEncodeObject {
  return (encodeObject as MsgEnrollSwapManagersEncodeObject).typeUrl === "/shareledger.electoral.MsgEnrollSwapManagers";
}

export interface MsgRevokeSwapManagersEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.electoral.MsgRevokeSwapManagers";
  readonly value: Partial<MsgRevokeSwapManagers>;
}

export function isMsgRevokeSwapManagersEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeSwapManagersEncodeObject {
  return (encodeObject as MsgRevokeSwapManagersEncodeObject).typeUrl === "/shareledger.electoral.MsgRevokeSwapManagers";
}

export type ElectoralTxExtension = {
  get electoral(): {
    readonly enrollAccountOperators: (addresses: string[], creator: string) => MsgEnrollAccountOperatorsEncodeObject;
    readonly revokeAccountOperators: (addresses: string[], creator: string) => MsgRevokeAccountOperatorsEncodeObject;
    readonly enrollDocIssuers: (addresses: string[], creator: string) => MsgEnrollDocIssuersEncodeObject;
    readonly revokeDocIssuers: (addresses: string[], creator: string) => MsgRevokeDocIssuersEncodeObject;
    readonly enrollLoaders: (addresses: string[], creator: string) => MsgEnrollLoadersEncodeObject;
    readonly revokeLoaders: (addresses: string[], creator: string) => MsgRevokeLoadersEncodeObject;
    readonly enrollVoter: (address: string, creator: string) => MsgEnrollVoterEncodeObject;
    readonly revokeVoter: (address: string, creator: string) => MsgRevokeVoterEncodeObject;
    readonly enrollIdSigners: (addresses: string[], creator: string) => MsgEnrollIdSignersEncodeObject;
    readonly revokeIdSigners: (addresses: string[], creator: string) => MsgRevokeIdSignersEncodeObject;
    readonly enrollRelayers: (addresses: string[], creator: string) => MsgEnrollRelayersEncodeObject;
    readonly revokeRelayers: (addresses: string[], creator: string) => MsgRevokeRelayersEncodeObject;
    readonly enrollApprovers: (addresses: string[], creator: string) => MsgEnrollApproversEncodeObject;
    readonly revokeApprovers: (addresses: string[], creator: string) => MsgRevokeApproversEncodeObject;
    readonly enrollSwapManagers: (addresses: string[], creator: string) => MsgEnrollSwapManagersEncodeObject;
    readonly revokeSwapManagers: (addresses: string[], creator: string) => MsgRevokeSwapManagersEncodeObject;
  };
};

export function ElectoralTxExtension<T extends {new (...args: any[]): BaseClient & ElectoralTxExtension}>(constructor: T): T {
  return class extends constructor {
    get electoral() {
      return {
        ...super["electoral"],
        enrollAccountOperators: (addresses: string[], creator: string): MsgEnrollAccountOperatorsEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollAccountOperators",
            value: MsgEnrollAccountOperators.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeAccountOperators: (addresses: string[], creator: string): MsgRevokeAccountOperatorsEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeAccountOperators",
            value: MsgRevokeAccountOperators.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollDocIssuers: (addresses: string[], creator: string): MsgEnrollDocIssuersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollDocIssuers",
            value: MsgEnrollDocIssuers.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeDocIssuers: (addresses: string[], creator: string): MsgRevokeDocIssuersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeDocIssuers",
            value: MsgRevokeDocIssuers.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollLoaders: (addresses: string[], creator: string): MsgEnrollLoadersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollLoaders",
            value: MsgEnrollLoaders.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeLoaders: (addresses: string[], creator: string): MsgRevokeLoadersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeLoaders",
            value: MsgRevokeLoaders.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollIdSigners: (addresses: string[], creator: string): MsgEnrollIdSignersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollIdSigners",
            value: MsgEnrollIdSigners.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeIdSigners: (addresses: string[], creator: string): MsgRevokeIdSignersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeIdSigners",
            value: MsgRevokeIdSigners.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollVoter: (address: string, creator: string): MsgEnrollVoterEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollVoter",
            value: MsgEnrollVoter.fromPartial({
              address,
              creator
            })
          };
        },
        revokeVoter: (address: string, creator: string): MsgRevokeVoterEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeVoter",
            value: MsgRevokeVoter.fromPartial({
              address,
              creator
            })
          };
        },
        enrollApprovers: (addresses: string[], creator: string): MsgEnrollApproversEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollApprovers",
            value: MsgEnrollApprovers.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeApprovers: (addresses: string[], creator: string): MsgRevokeApproversEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeApprovers",
            value: MsgRevokeApprovers.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollRelayers: (addresses: string[], creator: string): MsgEnrollRelayersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollRelayers",
            value: MsgEnrollRelayers.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeRelayers: (addresses: string[], creator: string): MsgRevokeRelayersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeRelayers",
            value: MsgRevokeRelayers.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollSwapManagers: (addresses: string[], creator: string): MsgEnrollSwapManagersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollSwapManagers",
            value: MsgEnrollSwapManagers.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeSwapManagers: (addresses: string[], creator: string): MsgRevokeSwapManagersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeSwapManagers",
            value: MsgRevokeSwapManagers.fromPartial({
              addresses,
              creator
            })
          };
        }
      };
    }
  };
}
