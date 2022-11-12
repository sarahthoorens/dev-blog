async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#entry_title').value;
  const content = document.querySelector('#entry_content').value;
  
  const response = await fetch(`/api/entry`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the entry is added, the dashboard template with all entries will be rerendered
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add new blog entry');
  }
}

document.querySelector('.new-entry-form').addEventListener('submit', newFormHandler);
  