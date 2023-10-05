const { Comment } = require('../models');

const commentData = [
  {
    text: 'Basketball',
    post_id: 1,
    user_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
