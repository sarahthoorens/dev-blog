async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#entry_title').value;
  const content = document.querySelector('#entry_content').value;
  const author_name = document.querySelector('#author_name').value;
  // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
  
  // Send fetch request to add a new dish
  const response = await fetch(`/api/entryRoutes`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
      author_name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add new blog entry');
  }
}

document.querySelector('.new-entry-form').addEventListener('submit', newFormHandler);
  