const { Post } = require('../models');

const postData = [
  {
    title: 'Example Post',
    body: 'This is some example text of a fake post on a tech blog website. This post is not a functioning post, please ignore it.',
    date_created: '09/12/23',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
