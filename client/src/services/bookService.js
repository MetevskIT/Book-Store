const baseUrl = 'http://localhost:5000'
async function getLastThenBooks() {
    return fetch(`${baseUrl}/book/getLastThen`)
    .then(res => res.json())
}


async function getCategories() {

    const request = await fetch(`${baseUrl}/book/getGenres`);
    const result = await request.json();

    return result;
}

async function getBooksByCategories(id) {

    const request = await fetch(`${baseUrl}/book/getBooksByGenre/${id}`);
    const result = await request.json();

    return result;
}

async function getBookDetails(id) {

    const request = await fetch(`${baseUrl}/book/details/${id}`);
    const result = await request.json();

    return result;
}

async function createBook(title, price, description, genre,imageUrl,token) {

    const request = await fetch(`${baseUrl}/admin/createBook`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            "x-authorization": token,
        },
        body: JSON.stringify({ title, price, description, genre, imageUrl })
    });
    const result = await request.json();

    return result;
}




module.exports={
    getLastThenBooks,
    getCategories,
    getBooksByCategories,
    getBookDetails,
    createBook
}