import {BaseClient} from "../../baseclient";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate} from "../../codec/cosmos/staking/v1beta1/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export function createStakingTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
    ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
    ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
    ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
    ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate]
  ];
}

export function createStakingActions(): Record<string, string> {
  return {
    "/cosmos.staking.v1beta1.MsgCreateValidator": "staking_create-validator",
    "/cosmos.staking.v1beta1.MsgEditValidator": "staking_edit-validator",
    "/cosmos.staking.v1beta1.MsgDelegate": "staking_delegate",
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": "staking_redelegate",
    "/cosmos.staking.v1beta1.MsgUndelegate": "staking_unbond"
  };
}

export interface MsgCreateValidatorEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator";
  readonly value: Partial<MsgCreateValidator>;
}

export function isMsgCreateValidatorEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateValidatorEncodeObject {
  return (encodeObject as MsgCreateValidatorEncodeObject).typeUrl === "/cosmos.staking.v1beta1.MsgCreateValidator";
}

export interface MsgEditValidatorEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator";
  readonly value: Partial<MsgUndelegate>;
}

export function isMsgEditValidatorEncodeObject(encodeObject: EncodeObject): encodeObject is MsgEditValidatorEncodeObject {
  return (encodeObject as MsgEditValidatorEncodeObject).typeUrl === "/cosmos.staking.v1beta1.MsgEditValidator";
}

export interface MsgDelegateEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.staking.v1beta1.MsgDelegate";
  readonly value: Partial<MsgDelegate>;
}

export function isMsgDelegateEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDelegateEncodeObject {
  return (encodeObject as MsgDelegateEncodeObject).typeUrl === "/cosmos.staking.v1beta1.MsgDelegate";
}

export interface MsgBeginRedelegateEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate";
  readonly value: Partial<MsgBeginRedelegate>;
}

export function isMsgBeginRedelegateEncodeObject(encodeObject: EncodeObject): encodeObject is MsgBeginRedelegateEncodeObject {
  return (encodeObject as MsgBeginRedelegateEncodeObject).typeUrl === "/cosmos.staking.v1beta1.MsgBeginRedelegate";
}

export interface MsgUndelegateEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate";
  readonly value: Partial<MsgUndelegate>;
}

export function isMsgUndelegateEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUndelegateEncodeObject {
  return (encodeObject as MsgUndelegateEncodeObject).typeUrl === "/cosmos.staking.v1beta1.MsgUndelegate";
}

export type StakingTxExtension = {
  get staking(): {
    readonly delegate: (delegatorAddress: string, validatorAddress: string, amount: Coin) => MsgDelegateEncodeObject;
    readonly undelegate: (delegatorAddress: string, validatorAddress: string, amount: Coin) => MsgUndelegateEncodeObject;
    readonly beginRedelegate: (
      delegatorAddress: string,
      validatorSrcAddress: string,
      validatorDstAddress: string,
      amount: Coin
    ) => MsgBeginRedelegateEncodeObject;
  };
};

export function StakingTxExtension<T extends {new (...args: any[]): BaseClient & StakingTxExtension}>(constructor: T): T {
  return class extends constructor {
    get staking() {
      return {
        ...super["staking"],
        delegate: (delegatorAddress: string, validatorAddress: string, amount: Coin): MsgDelegateEncodeObject => {
          return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: MsgDelegate.fromPartial({
              delegatorAddress,
              validatorAddress,
              amount
            })
          };
        },
        undelegate: (delegatorAddress: string, validatorAddress: string, amount: Coin): MsgUndelegateEncodeObject => {
          return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: MsgUndelegate.fromPartial({
              delegatorAddress,
              validatorAddress,
              amount
            })
          };
        },
        beginRedelegate: (
          delegatorAddress: string,
          validatorSrcAddress: string,
          validatorDstAddress: string,
          amount: Coin
        ): MsgBeginRedelegateEncodeObject => {
          return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: MsgBeginRedelegate.fromPartial({
              delegatorAddress,
              validatorSrcAddress,
              validatorDstAddress,
              amount
            })
          };
        }
      };
    }
  };
}
