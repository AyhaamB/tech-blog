
document.querySelector('#edit-btn').addEventListener('click', async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id);
  
      const title = document.querySelector('.edit-title').value.trim();
      const body = document.querySelector('.edit-body').value.trim();
  
      if (title && body) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, body }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          console.log('something went wrong');
          alert('Failed to update post');
        }
      }
    }
  });
  