let age = document.getElementById("enteredAge")
const header = document.getElementById("myH1")
const submitBtn = document.getElementById("submitBt")
const response = document.getElementById("myH3")

submitBtn.onclick = () => {
    if (age.value >= 18 && age.value <= 64){
       response.textContent = "Yup You're Old enough to drink lol"
    }
    else if(age.value >= 65){
        response.textContent = "nah u too old for that shii unc"

    }
    else if (age.value <= 18 && age.value >= 1){
        response.textContent = "Ogbeni go carry your book jor!!!!"
    }
    else if(age.value == 0){
        response.textContent = "nga u were just born"
    }
    else if(age.value <= 0){
        response.textContent = "Bruh"
    }
    
}
