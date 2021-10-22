const linksSocialMidia = {
    github: "tonaldop",
    youtube: "",
    facebook: "",
    instagram: "tonaldop",
    twitter: "",
}


function changeSocialMidiaLinks() {
    // document.getElementById('userName').textContent = "Olivia"
    // javascrip entende qualquer nome seguido de um ponto(.) está selecionando uma id. Ex. userName.textConte
    // userName.textContent = 'Marcelo'
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${linksSocialMidia[social]}`

    }
}

changeSocialMidiaLinks()

function getGithubProfileInfo() {
    const url = `https://api.github.com/users/${linksSocialMidia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // alert(data.bio)
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGithubProfileInfo()
// window.alert('Tonaldo Pereira')