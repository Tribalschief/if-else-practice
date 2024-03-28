let firstName:string = "Ahmed"
let lastName:string = "Yar Khan"
let full_name;
if (firstName && lastName) {
    full_name = firstName + " " + lastName
    console.log(`Full Name: ${full_name}`);
} else if (firstName) {
    full_name = firstName
    console.log(`First Name: ${full_name}`);
} else if (lastName) {
    full_name = lastName
    console.log(`Last Name: ${full_name}`);
} else {
    console.log('No name provided');
}