import { BaseRepository } from "../../database/repository/base.repository";
import BlockEntity from "../entities/block.entity";

export class BlockRepository extends BaseRepository<BlockEntity> {}

export const blockRepo = new BlockRepository(BlockEntity);
