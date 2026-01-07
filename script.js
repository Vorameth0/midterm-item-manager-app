const userBody = document.getElementById("user-body");
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openDialogBtn");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("userForm");

let users = [
    { username: "admin", fullname: "System Admin", email: "admin@mail.com" }
];

function displayUsers() {
    userBody.innerHTML = "";
    users.forEach(user => {
        userBody.innerHTML += `
            <tr>
                <td>${user.username}</td>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
            </tr>
        `;
    });
}

displayUsers();

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;

    users.push({ username, fullname, email });

    displayUsers();
    form.reset();
    modal.style.display = "none";
});
