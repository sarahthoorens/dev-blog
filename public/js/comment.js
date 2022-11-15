async function commentFormHandler(event) {
   event.preventDefault();
 
  const comment_content = document.querySelector('textarea[name="comment-content"]').value;
  const entry_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
 
   if (comment_content) {
       const response = await fetch('/api/comment', {
         method: 'POST',
         body: JSON.stringify({
           entry_id,
           comment_content,
         }), 
         headers: {
           'Content-Type': 'application/json'
         }
       });
     
       if (response.ok) {
         document.location.reload();
       } else {
         alert(response.statusText);
       }
     }
 }
 
 document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);