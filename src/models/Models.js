import UserModel from './UserModel.js';
import DeviceTokenModel from './DeviceTokenModel.js';
import sequelize from "./Sequelize.js";
import ClubModel from "./ClubModel.js";
import ClubEventModel from "./ClubEventModel.js";

export const Club = ClubModel
export const ClubEvent = ClubEventModel
export const User = UserModel
export const DeviceToken = DeviceTokenModel


User.hasMany(DeviceToken, { foreignKey: 'userId', onDelete: 'CASCADE' });

Club.hasMany(ClubEvent, { foreignKey: 'clubId', onDelete: 'CASCADE' });
ClubEvent.belongsTo(Club, { foreignKey: 'clubId', onDelete: 'CASCADE' });

// Many-to-many relationship for leaders of a club
User.belongsToMany(Club, { as: 'LedClubs', through: 'ClubLeaders', onDelete: 'CASCADE' });
Club.belongsToMany(User, { as: 'Leaders', through: 'ClubLeaders', onDelete: 'CASCADE' });

// Many-to-many relationship for members of a club (subscribers)
User.belongsToMany(Club, { as: 'SubscribedClubs', through: 'ClubMembers', onDelete: 'CASCADE' });
Club.belongsToMany(User, { as: 'Subscribers', through: 'ClubMembers', onDelete: 'CASCADE' });
