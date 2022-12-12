import {EncodeObject, GeneratedType} from "@shareledgerjs/signing";
import {Coin} from "@shareledgerjs/types/cosmos/base/v1beta1/coin";
import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission
} from "@shareledgerjs/types/cosmos/distribution/v1beta1/tx";

import {BaseClient} from "../../baseclient";

export function createDistributionTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool]
  ];
}

export function createDistributionActions(): Record<string, string> {
  return {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": "distribution_set-withdraw-address",
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": "distribution_withdraw-delegator-reward",
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": "distribution_withdraw-validator-commission",
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": "distribution_fund-community-pool"
  };
}

export interface MsgSetWithdrawAddressEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
  readonly value: Partial<MsgSetWithdrawAddress>;
}

export function isMsgSetWithdrawAddressEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSetWithdrawAddressEncodeObject {
  return (encodeObject as MsgSetWithdrawAddressEncodeObject).typeUrl === "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
}

export interface MsgWithdrawDelegatorRewardEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
  readonly value: Partial<MsgWithdrawDelegatorReward>;
}

export function isMsgWithdrawDelegatorRewardEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgWithdrawDelegatorRewardEncodeObject {
  return (encodeObject as MsgWithdrawDelegatorRewardEncodeObject).typeUrl === "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
}

export interface MsgWithdrawValidatorCommissionEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
  readonly value: Partial<MsgWithdrawValidatorCommission>;
}

export function isMsgWithdrawValidatorCommissionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgWithdrawValidatorCommissionEncodeObject {
  return (
    (encodeObject as MsgWithdrawValidatorCommissionEncodeObject).typeUrl === "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission"
  );
}

export interface MsgFundCommunityPoolEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
  readonly value: Partial<MsgFundCommunityPool>;
}

export function isMsgFundCommunityPoolEncodeObject(encodeObject: EncodeObject): encodeObject is MsgFundCommunityPoolEncodeObject {
  return (encodeObject as MsgFundCommunityPoolEncodeObject).typeUrl === "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
}

export interface DistributionTxExtensionMethods {
  setWithdrawAddress(delegatorAddress: string, withdrawAdress: string): MsgSetWithdrawAddressEncodeObject;
  withdrawRewards(delegatorAddress: string, validatorAddress: string): MsgWithdrawDelegatorRewardEncodeObject;
  withdrawCommissions(validatorAddress: string): MsgWithdrawValidatorCommissionEncodeObject;
  fundCommunityPool(depositor: string, amount: Coin[]): MsgFundCommunityPoolEncodeObject;
}

export interface DistributionTxExtension {
  readonly distribution: DistributionTxExtensionMethods;
}

export function DistributionTxExtension<T extends {new (...args: any[]): BaseClient & DistributionTxExtension}>(constructor: T): T {
  return class extends constructor {
    override get distribution() {
      return {
        ...super["distribution"],
        setWithdrawAddress: (delegatorAddress: string, withdrawAddress: string): MsgSetWithdrawAddressEncodeObject => {
          return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: MsgSetWithdrawAddress.fromPartial({
              delegatorAddress,
              withdrawAddress
            })
          };
        },
        withdrawRewards: (delegatorAddress: string, validatorAddress: string): MsgWithdrawDelegatorRewardEncodeObject => {
          return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: MsgWithdrawDelegatorReward.fromPartial({
              delegatorAddress,
              validatorAddress
            })
          };
        },
        withdrawCommissions: (validatorAddress: string): MsgWithdrawValidatorCommissionEncodeObject => {
          return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: MsgWithdrawValidatorCommission.fromPartial({
              validatorAddress
            })
          };
        },
        fundCommunityPool: (depositor: string, amount: Coin[]): MsgFundCommunityPoolEncodeObject => {
          return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: MsgFundCommunityPool.fromPartial({
              depositor,
              amount: [...amount]
            })
          };
        }
      };
    }
  };
}
