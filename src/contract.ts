import { BigInt } from "@graphprotocol/graph-ts";
import { Borrow, SupplyERC721, Supply } from "../generated/Contract/Contract";
import {
  BorrowEntity,
  SupplyEntity,
  SupplyERC721Entity,
} from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleBorrow(event: Borrow): void {
  const ID = `${event.transaction.hash.toHex()}-${event.transactionLogIndex.toString()}`;

  if (!!BorrowEntity.load(ID)) {
    log.warning("Entity({}) exists!", [ID]);
  }

  let entity = new BorrowEntity(ID);
  entity.reserve = event.params.reserve;
  entity.user = event.params.user;
  entity.amount = event.params.amount;
  entity.onBehalfOf = event.params.onBehalfOf;
  entity.block = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleSupplyERC721(event: SupplyERC721): void {
  const ID = `${event.transaction.hash.toHex()}-${event.transactionLogIndex.toString()}`;

  if (!!SupplyERC721Entity.load(ID)) {
    log.warning("Entity({}) exists!", [ID]);
  }

  let entity = new SupplyERC721Entity(ID);
  entity.reserve = event.params.reserve;
  entity.user = event.params.user;
  entity.tokenId = event.params.tokenData.map<BigInt>((e) => e.tokenId);
  entity.onBehalfOf = event.params.onBehalfOf;
  entity.block = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleSupply(event: Supply): void {
  const ID = `${event.transaction.hash.toHex()}-${event.transactionLogIndex.toString()}`;

  if (!!SupplyEntity.load(ID)) {
    log.warning("Entity({}) exists!", [ID]);
  }

  let entity = new SupplyEntity(ID);
  entity.reserve = event.params.reserve;
  entity.user = event.params.user;
  entity.amount = event.params.amount;
  entity.onBehalfOf = event.params.onBehalfOf;
  entity.block = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}
