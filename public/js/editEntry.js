async function editButtonHandler(event) {
   event.preventDefault();
   const title = document.querySelector('input[name="entry-title"]').value;
   const content = document.querySelector('textarea[name="entry-content"]').value;
   console.log(content)
   const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

   const response = await fetch(`/api/entry/${id}`, {
       method: 'PUT',
       body: JSON.stringify({
        title: title,
        content: content,
       }),
       headers: {
           'Content-Type': 'application/json'
       }
     });
     
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
      alert('Failed to edit blog entry');
     }
 }

 const deleteButtonHandler = async function() {
  await fetch(`/api/entry/${id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

 
 document.querySelector('.edit-entry-form').addEventListener('submit', editButtonHandler);
 document.querySelector('.delete-entry-btn').addEventListener('submit', deleteButtonHandler)