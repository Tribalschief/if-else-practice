let age = 10
let cost  = 0
let message;
if(age > 0 && age < 3){
      cost = 0
      message = `You can have free meal`
} else if(age >= 3 && age < 12){
      cost = 10
      message = `Your can pay ${cost} for meal`
} else if(age >= 12 && age < 65){
      cost = 15
      message = `Your can pay ${cost} for meal`
}