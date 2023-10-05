document.querySelector('#comment-btn').addEventListener('click', async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id, 'button clicked');
  
      const text = document.querySelector('.comment-input').value.trim();
  
      if (text) {
        const response = await fetch(`/api/comment/`, {
          method: 'POST',
          body: JSON.stringify({ text: text, post_id: id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace(`/posts/${id}`);
          console.log('it worked')
        } else {
          console.log('something went wrong');
          alert('Failed to update post');
        }
      }
    }
  });