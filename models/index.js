const User = require('./User');
const Comment = require ('./Comment')
const Entry = require('./Entry');


User.hasMany(Entry, {
   foreignKey: 'user_id',
   onDelete: 'CASCADE'
 });
 
Entry.belongsTo(User, {
   foreignKey: 'user_id'
 });

 Comment.belongsTo(Entry, {
  foreignKey: 'entry_id'
 }); 
 
 Comment.belongsTo(User, {
  foreignKey: 'user_id'
 });

 Entry.hasMany(Comment, {
  foreignKey: 'entry_id'
 });

 User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
 })
 
 module.exports = { User, Entry, Comment };
 