import { BlockChainService, blockchainService } from "../service/block.service";

class BlockchainController {
  protected blockchainService: BlockChainService;
  constructor(service: BlockChainService) {
    this.blockchainService = service;
  }
}
export const blockchainController = new BlockchainController(blockchainService);
