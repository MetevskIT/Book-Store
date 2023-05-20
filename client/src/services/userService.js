const baseUrl = 'http://localhost:5000'

async function login(email, password) {
    const request = await fetch(`${baseUrl}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    const result = await request.json();
    return result;
}


async function register(email, password) {
    const request = await fetch(`${baseUrl}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });
    const result = await request.json();
    return result;
}

async function addToCart(id, token) {

    const request = await fetch(`${baseUrl}/user/addToCart/${id}`, {
        method: "GET",
        headers: {
            "x-authorization": token,
        }
    });
    const result = await request.json();

    return result;
}


async function removeFromCart(id, token) {

    const request = await fetch(`${baseUrl}/user/removeFromCart/${id}`, {
        method: "GET",
        headers: {
            "x-authorization": token,
        }
    });
    const result = await request.json();

    return result;
}
async function getBooksFromCart(token) {

    const request = await fetch(`${baseUrl}/user/getBooksFromCart`, {
        method: "GET",
        headers: {
            "x-authorization": token,
        }
    });
    const result = await request.json();

    return result;
}

module.exports = {
    login,
    register,
    addToCart,
    getBooksFromCart,
    removeFromCart,
}