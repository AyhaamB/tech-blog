const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const body = document.querySelector('#project-desc').value.trim();

  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

// Attach a click event listener to a common ancestor element (e.g., the container of all posts)
document.querySelector('.dash-main').addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Remove the deleted post from the DOM
      const postContainer = event.target.closest('.dashboard-project');
      if (postContainer) {
        postContainer.remove();
      }
    } else {
      alert('Failed to delete post');
    }
  }
});

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

