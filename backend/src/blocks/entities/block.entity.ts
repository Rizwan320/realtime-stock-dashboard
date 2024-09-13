const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const BlockEntity = sequelize.define("Block", {
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  extraData: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gasLimit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gasUsed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hash: {
    type: DataTypes.STRING,
    allowNull: true,
    primaryKey: true,
  },
  logsBloom: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  miner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nonce: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  parentHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiptsRoot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sha3Uncles: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stateRoot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalDifficulty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transactions: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  transactionsRoot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uncles: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default BlockEntity;
