document.addEventListener('DOMContentLoaded', function() {
    displayComments();

    document.getElementById('commentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        addComment();
        this.reset();
    });
});

function addComment() {
    var comment = document.getElementById("inputComment").value;
    var rating = document.getElementById("inputRating").value;
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ comment: comment, rating: rating });
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComments();
}

function displayComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var commentsSection = document.getElementById("commentsSection");
    commentsSection.innerHTML = '';

    comments.forEach(function(item) {
        var commentDiv = document.createElement('div');
        commentDiv.textContent = `Comentário: ${item.comment} - Avaliação: ${item.rating}`;
        commentDiv.style.border = "1px solid #ccc";
        commentDiv.style.padding = "10px";
        commentDiv.style.margin = "5px 0";
        commentDiv.style.borderRadius = "5px";
        commentsSection.appendChild(commentDiv);
    });
}

window.onload = function() {
    const logo = document.querySelector('.left img');
    logo.classList.add('jump');

    logo.addEventListener('animationend', () => {
        logo.classList.remove('jump');
    });
};

