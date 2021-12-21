const url = new URL(window.location.href);

const user = url.searchParams.get('user');

console.log(JSON.parse(user));