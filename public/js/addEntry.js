async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="entry-title"]').value;
  const content = document.querySelector('textarea[name="entry-content"]').value;
  
  const response = await fetch(`/api/entry`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      content: content,
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

document.querySelector('.add-entry-form').addEventListener('submit', newFormHandler);
  