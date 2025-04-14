document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentText = document.getElementById('commentText');
    const commentsList = document.getElementById('commentsList');
    
    // Cargar comentarios guardados al iniciar
    loadComments();
    
    // Manejar el envío del formulario
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const commentContent = commentText.value.trim();
        
        if (commentContent) {
            addComment(commentContent);
            commentText.value = '';
            saveComments();
        }
    });
    
    // Función para agregar un nuevo comentario
    function addComment(content) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        
        commentDiv.innerHTML = `
            <div class="comment-header">
                <span class="comment-date">${dateTimeString}</span>
                <button class="delete-btn">Eliminar</button>
            </div>
            <div class="comment-content">${content}</div>
        `;
        
        // Agregar evento al botón de eliminar
        const deleteBtn = commentDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            commentDiv.remove();
            saveComments();
        });
        
        commentsList.prepend(commentDiv);
    }
    
    // Guardar comentarios en localStorage
    function saveComments() {
        const comments = [];
        document.querySelectorAll('.comment').forEach(comment => {
            const date = comment.querySelector('.comment-date').textContent;
            const content = comment.querySelector('.comment-content').textContent;
            comments.push({ date, content });
        });
        localStorage.setItem('bookComments', JSON.stringify(comments));
    }
    
    // Cargar comentarios desde localStorage
    function loadComments() {
        const savedComments = localStorage.getItem('bookComments');
        if (savedComments) {
            JSON.parse(savedComments).forEach(comment => {
                addComment(comment.content);
            });
        }
    }
});