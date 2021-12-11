// all Selection ============================

const day_night_text = document.querySelector('.day_night_text')
const day_night_icons = document.querySelector('.fa-moon')
const body = document.querySelector('body')



// all EventListener ===========================



day_night_icons.addEventListener('click', dayNight)


// all function =============================



function dayNight(){
    body.classList.toggle('light_dark')
    
    if(day_night_icons.classList.contains('fa-moon')){
        day_night_icons.classList.replace('fa-moon','fa-sun' )
        day_night_text.innerHTML = 'DARK'
    }else{
        day_night_icons.classList.replace('fa-sun','fa-moon' )
        day_night_text.innerHTML = 'LIGHT'

    }
}


class GetGitHubUserDetails{
    
    constructor(){
        this.profile_image = document.querySelector('.profile_image')
        this.name = document.querySelector('.profilrDetails h2')
        this.userName = document.querySelector('.profilrDetails a')
        this.date = document.querySelector('.date')
        this.bio = document.querySelector('.bio')
        this.ripos = document.querySelector('.demandProfile .repos span')
        this.followers = document.querySelector('.demandProfile .folowers span')
        this.folowing = document.querySelector('.demandProfile .folowing span')
        this.location = document.querySelector('.contact .location small')
        this.twiter = document.querySelector('.contact .twiter small')
        this.userId = document.querySelector('.contact .blogLink small')
        this.github = document.querySelector('.contact .github small')
        this.form  =document.querySelector('form')
        this.searchBtn  =document.querySelector('.searchBtn')
        this.inputValue  = document.querySelector('form input')
        this.profileAndDetails = document.querySelector('.profileAndDetails')
        this.search_any_user = document.querySelector('.search_any_user')
        this.eventhandle()
        
    }

    eventhandle(){
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault()
            this.users()
            this.profileAndDetails.classList.add('active')
            this.search_any_user.style.display = 'none'
        })
    }

     async users(){
         let value = this.inputValue.value
         if(value){
            await fetch(`https://api.github.com/users/${value}`)
            .then((res)=> res.json())
            .then((data)=> this.createNewElement(data))
         }else{
             alert('plese type your UserName')
         }
        
    }


    createNewElement(data){
        this.profile_image.src = data.avatar_url
        this.name.innerHTML = data.name
        this.userName.innerHTML = data.login
        this.date.innerHTML = data.created_at
        this.bio.innerHTML = data.bio
        this.ripos.innerHTML = data.public_repos
        this.followers.innerHTML = data.followers
        this.folowing.innerHTML = data.following
        this.location.innerHTML = data.location
        if(data.twitter_username){
            this.twiter.innerHTML = data.twitter_username
        }else{
            data.twitter_username.innerHTML = 'not Available'
        }
        this.userId.innerHTML = data.id
        if(data.email){
            this.github.innerHTML = data.email
        }else{
            this.github.innerHTML = 'Not Available'
        }
    }

}

let imNewUsers = new  GetGitHubUserDetails()
