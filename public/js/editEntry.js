async function editFormHandler(event) {
   event.preventDefault();
 
   const title = document.querySelector('#entry-title').value;
   const content = document.querySelector('#entry-content').value;
   const id = window.location.toString().split('/')[
       window.location.toString().split('/').length - 1
     ];

   const response = await fetch(`/api/entries/${id}`, {
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
 
 document.querySelector('.edit-entry-form').addEventListener('submit', editFormHandler);