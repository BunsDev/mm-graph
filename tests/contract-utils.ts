import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Borrow, SupplyERC721, Supply } from "../generated/Contract/Contract"

export function createBorrowEvent(
  reserve: Address,
  user: Address,
  onBehalfOf: Address,
  amount: BigInt,
  interestRateMode: i32,
  borrowRate: BigInt,
  referralCode: i32
): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "interestRateMode",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(interestRateMode))
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowRate",
      ethereum.Value.fromUnsignedBigInt(borrowRate)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "referralCode",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(referralCode))
    )
  )

  return borrowEvent
}

export function createSupplyERC721Event(
  reserve: Address,
  user: Address,
  onBehalfOf: Address,
  tokenData: Array<ethereum.Tuple>,
  referralCode: i32
): SupplyERC721 {
  let supplyErc721Event = changetype<SupplyERC721>(newMockEvent())

  supplyErc721Event.parameters = new Array()

  supplyErc721Event.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  supplyErc721Event.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  supplyErc721Event.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  supplyErc721Event.parameters.push(
    new ethereum.EventParam(
      "tokenData",
      ethereum.Value.fromTupleArray(tokenData)
    )
  )
  supplyErc721Event.parameters.push(
    new ethereum.EventParam(
      "referralCode",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(referralCode))
    )
  )

  return supplyErc721Event
}

export function createSupplyEvent(
  reserve: Address,
  user: Address,
  onBehalfOf: Address,
  amount: BigInt,
  referralCode: i32
): Supply {
  let supplyEvent = changetype<Supply>(newMockEvent())

  supplyEvent.parameters = new Array()

  supplyEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  supplyEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  supplyEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  supplyEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  supplyEvent.parameters.push(
    new ethereum.EventParam(
      "referralCode",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(referralCode))
    )
  )

  return supplyEvent
}
