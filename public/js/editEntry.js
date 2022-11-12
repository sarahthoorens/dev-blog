async function editButtonHandler(event) {
   event.preventDefault();
 
   const title = document.querySelector('#entry-title').value;
   const content = document.querySelector('#entry-content').value;
   const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

   const response = await fetch(`/api/entry/${id}`, {
       method: 'PUT',
       body: JSON.stringify({
           title,
           post_content
       }),
       headers: {
           'Content-Type': 'application/json'
       }
     });
     
     if (response.ok) {
       document.location.replace('/dashboard/');
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

 
 document.querySelector('#.edit-entry-form').addEventListener('submit', editButtonHandler);
 document.querySelector('#delete-button').addEventListener('click', deleteButtonHandler)