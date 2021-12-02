
const users = [
    {
        name: "Usuário Administrador I",
        email: "admin1@email.com",
        password: "admin"
    },
    {
        name: "Usuário Administrador II",
        email: "admin2@email.com",
        password: "admin"
    },
];

export function login(email, password) {
    for (let user of users) {
        if (user.email === email && user.password === password) { 
            localStorage.setItem("user", JSON.stringify({name: user.name, email: user.email}));
            return user 
        }
    }
    return undefined
}

export function logoff() {
    localStorage.setItem("user", "");
}

export function isLogged() {
    const user = localStorage.getItem("user");
    if (user === null || user === "") { return false; }
    return true;
}

const dao = {
    login,
    logoff,
    isLogged
}

export default dao