async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#entry_title').value;
  const content = document.querySelector('#entry_content').value;

  
  // Send fetch request to add a new entry
  const response = await fetch(`/api/entries`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add new blog entry');
  }
}

document.querySelector('.new-entry-form').addEventListener('submit', newFormHandler);
  