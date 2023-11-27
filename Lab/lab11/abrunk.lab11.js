function searchBooks() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value;

    // Clear previous search results
    document.getElementById('bookList').innerHTML = '';

    // Make a request to Google Books API
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            if (data.items) {
                data.items.forEach(book => {
                    displayBook(book.volumeInfo);
                });
            } else {
                alert('No books found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred. Please try again.');
        });
}

function displayBook(bookInfo) {
    const bookList = document.getElementById('bookList');

    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';

    const title = document.createElement('h3');
    title.textContent = bookInfo.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${bookInfo.authors ? bookInfo.authors.join(', ') : 'N/A'}`;

    const expandButton = document.createElement('button');
    expandButton.textContent = 'Expand';
    expandButton.addEventListener('click', () => toggleBookDetails(bookItem));

    const details = document.createElement('div');
    details.className = 'book-details';

    details.innerHTML = `
        <p>Author: ${bookInfo.authors ? bookInfo.authors.join(', ') : 'N/A'}</p>
        <p>Published Date: ${bookInfo.publishedDate ? bookInfo.publishedDate : 'N/A'}</p>
        <p>Description: ${bookInfo.description ? bookInfo.description : 'N/A'}</p>
    `;

    bookItem.appendChild(title);
    bookItem.appendChild(author);
    bookItem.appendChild(expandButton);
    bookItem.appendChild(details);

    bookList.appendChild(bookItem);
}

function toggleBookDetails(bookItem) {
    const details = bookItem.querySelector('.book-details');
    details.classList.toggle('expanded');
}


function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


