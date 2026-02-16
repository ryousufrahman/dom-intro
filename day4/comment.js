document.getElementById('submit-button').addEventListener('click', function(){
   const comment =  document.getElementById('comment-feild');
   let text = comment.value;
   const commentPostBox = document.getElementById('comment-post-box');
   const commentElement =document.createElement('p')
   commentElement.innerText=text;
    commentPostBox.appendChild(commentElement);
    commentElement.classList.add('comment')

    comment.value ='';
   

})