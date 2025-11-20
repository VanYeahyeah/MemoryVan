document.getElementById("inscriptionForm")?.addEventListener('submit', async function(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let nom = document.getElementById('nom').value;
    let password = document.getElementById('mdp').value;
    let users = JSON.parse(localStorage.getItem('users'))||{};
    console.log("users="+users);
    if(users[email]){
        alert("un utilisateur avec cet email existe déjà, dommage");
        return;
    }
    // handleForm(e);
    // const hashedPassword = await hashPassword(password);

    users[email]={
        nom:nom,
        password:password,
        scores:[],
        preferences:{}

    }
    localStorage.setItem('users',JSON.stringify(users));
})