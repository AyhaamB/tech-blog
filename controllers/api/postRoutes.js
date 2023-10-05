const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();

    // Return the posts as JSON
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Extract the updated data from the request body
    const { title, body } = req.body;

    // Use the update method to update the post with the specified ID
    const [rowsUpdated] = await Post.update(
      {
        title, // Update the title
        body,  // Update the body
      },
      {
        where: {
          id: req.params.id, // Specify the condition for updating
        },
      }
    );

    // Check if any rows were updated
    if (rowsUpdated === 0) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    // Fetch the updated post data separately
    const updatedPost = await Post.findByPk(req.params.id);

    // Respond with the updated post data
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
