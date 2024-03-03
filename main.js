//                                                                      Assigment solution Task  1 to 45
// Task 2
var personName = "Eric";
console.log("hello ".concat(personName, ",would you like to learn some python today?"));
// Task 11
// let names : string [] = ["Raj","Varoon","Akshay","Salman"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// Task 12
// let names : string [] = ["Raj","Varoon","Akshay","Salman"];
// let message : string = "Do you like to play with code?"
// console.log(names[0] + " " + message )
// console.log(names[1] + " " + message )
// console.log(names[2] + " " + message )
// console.log(names[3] + " " + message )
// Task 13
// let transpotation : string [] = ["Toyota Corolla","Tata Punch", "Bmw","Porsche"];
// transpotation.map((items) => console.log(`I would like to own a ${items}`));
// Task 14
// let guestArr : string [] = ["Maaz","Singh","Sharma","Khan"];
// guestArr.map((items) => (console.log(`Dear ${items},You are invited to the dinner`)));
//  Task 15
// let guestArr : string [] = ["Maaz","Singh","Sharma","Khan"];
// let canNotAttend : string = "Maaz"
// console.log(canNotAttend + " " + "can not attend the dinner.")
// let newGuest : string = "Lata"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//  console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, You are invited to the Dinner.`))
// Task 16
// // part 1
//  let guestArr : string [] = ["Maaz","Singh","Sharma","Khan"];
// let canNotAttend : string = "Maaz"
//  let newGuest : string = "Ramesh"
//  guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// //  console.log(guestArr)
// //  guestArr.map((items) =>
// //  console.log(`Dear ${items}, i found a bigger table so iam inviting more peoples.`));
// //  part 2 Began
// let guestBeg : string = "Barry"
// guestArr.unshift(guestBeg);
// // console.log(guestArr)
// // part  3 Middle
// let middleGuest : string = "Guria"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,3,middleGuest)
// // console.log(guestArr)
// //  part 4 append
// guestArr.push("July")
// console.log(guestArr)
// //  part 5 
// guestArr.map((items) => 
// console.log(`Dear ${items}, you are invited on special people list on the dinner.`));
//  Task 17
// intial list of guests
// let guests : string[] = ["Waleed","Krishna", "raju"]
// Informing that only two people can be invited
// console.log(`Only two people can be invited to the dinner due to limited space.`);
//  Removing guests untill only two names remain
// while (guests.length > 2) {
//      const removedGuest = guests.pop();
//     console.log(`sorry ${removedGuest}, you are no longer invited to the dinner.`);} 
// print invitation to two remaining guests
// guests.forEach((guest) => {
//     console.log(`Dear ${guest}, you are still invited to the dinner.`)});
// Removing the last two names from the list
//  guests.pop();
//  guests.pop();
// //  printing the final list to confrim its empty
// console.log("Final guest List:", guests);
// //  Task 18 
// store the location in the array
// let placesToVisit: string[] = ["Italy","Srilanka", 'Pakistan', 'Bharat', 'Japan'  ];
// //  print the array in its orginal order
// console.log("Orginal oder", placesToVisit);
// //  print the array in alphabetical order without modifying the actual list
// console.log("Alphabetical order:", [...placesToVisit].sort());
// //  Show that the array is still in its orginal order
//  console.log("Orginal order after sorting:", placesToVisit);
// //  print the array in reverse alphabetical order without changing the order of orginal list
// console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse())
// //  Show that the array is still in its orginal order
// console.log("Orginal order after reverse sorting:", placesToVisit);
// //  Reverse the order of the list
//  placesToVisit.reverse();
//  console.log("Reversed order:", placesToVisit);
// //  Reverse the order of the list again to get back to the original order
// placesToVisit.reverse();
// console.log("Back to original order:", placesToVisit);
// //  sort the array in the alphabatical order
// placesToVisit.sort();
// console.log("sort the array in the alphabetical order:", placesToVisit)
// //  sort the array in the reverse alphabetical order
// placesToVisit.sort(( a , b) =>b.localeCompare(a));
// console.log("sorted in reverse alphabetical order:", placesToVisit);
//  Task 19
//  let invitations : string[]= ["waleed","Krishna","Arjun"];
//  let count_invitations : number = invitations.length
//  console.log(`${count_invitations} people will come to the dinner`)
//  Task 20
// let languages: string [] = ["Sindhi","Hindi","English","Pashto", "Urdu","Punjabi","Marathi"]
// console.log("List of languages:");
// console.log(languages);
//  Task 21
// let person: { name: string, fname: string, Age: number,} = {name: "Bhunesh kumar", fname: "Male", Age: 18};
// console.log(person)
//  Task 22
// const days : string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// // console.log(days{7})
// console.log (days[4])
//  Task 23
// let car ="subaru";
// console.log( "is car == `subaru`? perdict true")
// console.log( car == `subaru`)
//  console.log( "is car != `honda city`? predict true")
//  console.log(car  != `honda city`)
// console.log("is car == `Subaru`? predict false")
//  console.log( car == `Subaru`)
// console.log("is car == `SUBARU`? predict false")
// console.log( car == `SUBARU`)
// console.log("is car.length == 6? predict true")
// console.log(car.length == 6)
// console.log("is car.length !== 10? predict true")
// console.log(car.length != 10)
// console.log("is 5>= 10 ? predict false")
// console.log( 5 >= 10)
// console.log("is 3 <=2 ? predict false")
// console.log( 3 <= 2)
// console.log("is 72 >= 83 ? predict false")
// console.log( 72 >= 83)
// console.log(" is car == `subaru` && car.length == 6? predict true")
// console.log(car == `subaru` && car.length ==6)
//  Task 24
// Test for equality & inequality with strings
// let name_1: string = "Radhay"
// let name_2: string = "Miss Radhay"
// let name_3: string = "Miss Radhay kumari"
// if (name_1 == name_3){
//     console.log("names are equal")
// } else{
//     console.log("names are not equal")
// }
// if (name_1 != name_2){
//     console.log("names are equal")
// } 
// if (name_1 != name_3){
//     console.log("names are equal")
//      }
// let age_1 : number = 18
// let age_2 : number = 36
// if (age_1 == 18){
//     console.log("Eligible for Vote")
// }
// if (age_1 != 36){
//     console.log("Eligible for Vote in older category")
// }
// if ( age_1 <= age_2){
//     console.log("younger")
// }
// if ( age_2 >= age_1){
//     console.log("Older")
// }
// if ( age_1 == 18 && age_2 == 36){
//     console.log(" person is eligible for vote")
// }
// if ( age_1 == 18 || age_2 != 36){
//     console.log(" person is not eligible for vote")
// }
// let country: string[] = ["China","Bharat","Nepal","Srilanka","Pakistan"]
// if (country.Includes("China")){
//     console.log("China is in country list")
// }
// if (!country.includes ("America")){
//     console.log("America is not include in array")
// }
// Task 25
// let alien_colour : string = "Green"
//  if (alien_colour == "Green")
//  console.log("you earn 5 points")
// let alien_colour : string = "Red"
// if (alien_colour == "Green")
// console.log("No Output")
//  Task 26
// let alien_colour : string = "Green"
//   if (alien_colour == "Green"){
//   console.log("player just earn 5 points for shooting the alien")
//   } else{
//     console.log("player just earn 10 points")
//   }
//   let alien_colour : string = "Red"
//   if (alien_colour == "Green"){
//   console.log("player just earn 5 points for shooting the alien")
//   } else{
//     console.log("player just earn 10 points")
//   }
//  Task 27
// version 1
// let alien_colour : string ="Red"
//  if (alien_colour == "Red"){
//     console.log ("player just earn 5 points")
//  }else if(
//     alien_colour == "yellow"){
//         console.log("player just earn 10 points")
//     }else {
//         console.log("player just earn 15 points")
//     }
// version 2
//     let alien_colour : string ="Yellow"
//  if (alien_colour == "Red"){
//     console.log ("player just earn 5 points")
//  }else if(
//     alien_colour == "yellow"){
//         console.log("player just earn 10 points")
//     }else {
//         console.log("player just earn 15 points")
//     }
//  Version 3
//     let alien_colour : string ="Blue"
//  if (alien_colour == "Red"){
//     console.log ("player just earn 5 points")
//  }else if(
//     alien_colour == "yellow"){
//         console.log("player just earn 10 points")
//     }else {
//         console.log("player just earn 15 points")
//     }
//  Task 28 ................. 2 4 13 20 65 & older
// let age : number = 15
// if ( age < 2){
//     console.log("you are a baby")
// } else if( age < 4){
//     console.log("you are a toddler")
// }else if ( age < 13 ){
//     console.log("you are a kid")
// }else if( age < 20){
//     console.log("You are a teenager")
// }else if ( age < 65){
//     console.log("you are an Adult")
// } else{
//     console.log("You are Older")
// }
//  Task 29
// let favourites_fruits : string[] = ["kivi","Apples","Mango","peach","berry"]
// if (favourites_fruits.includes("kivi")){
//     console.log("kivi")
// }
// if (favourites_fruits.includes("peach")){
//     console.log("you really like bananas")
// }
// if (favourites_fruits.includes("Apples")){
//     console.log("orange")
// }
// if (favourites_fruits.includes("berry")){
//     console.log("you really like bananas")
// }
// if (favourites_fruits.includes("Mango")){
//     console.log("Mango")
// }
//  Task 30
// let users : string [] = ["admin","Akash","Manzoor","Mohsin","Kumar"]
// for (let user of users){
//     if (user === "admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     } else {
//         console.log (`Hello ${user}, thank you for logging in again`)
//     }
// }
// Task 31
// let users : string [] = ["admin","Akash","Manzoor","Mohsin","Kumar"]
//  if (users.length === 0) { 
//     console.log("we need to find some users!")
//  } else {
//     for ( let user of users){
//         if ( user ==="admin"){
//             console.log("Hello admin, would you like to see a status report?")
//         }else {
//         }
//     }
//  }
//  users = []
//  if (users.length ===0){
//     console.log("we need to find some users!")
//  }
//  Task 32
// let current_users : string [] = ["Admin","Fatima","Azam","Vishal","Duroop","Hassan"]
// let new_users : string [] = ["Vishal","Fatima","Boshan","Kareena","Chadni"]
// let current_users_lower : string [] = current_users.map(user => user.toLowerCase())
// for (let new_user of new_users){
//     if (current_users_lower.includes(new_user.toLowerCase())){
//         console.log(`sorry ${new_user}, that name is taken`)
//     }else {
//         console.log(`yes ${new_user}, is still available in list`)
//     }
// }
//  Task 33
// let numbers : number [] = [1,2,3,4,5,6,7,8,9]
// for (let number of numbers){
// if (number ===1){
//     console.log(`${number}st`)
// } else if (number ===2){
//     console.log (`${number}nd`)
// } else if ( number ===3){
//      console.log(`${number}rd`)
// } else {
//     console.log(`${number}th`)
// }
// }
//  Task 34
// let favourites_pizza : string [] = ["Peperoni","Veg","Cheese"]
// for (let pizza of favourites_pizza){
//     console.log(pizza)
// }
// console.log("\n")
// for (let pizza of favourites_pizza){
//     console.log(` I really like ${pizza} pizza!`)
// }
// console.log(`\n I really love Pizza`)
//  Task 35
// let animals : string [] = ["Cat","Dog","Lion"]
// for (let animal of animals){
//     console.log(animal)
// }
// console.log("\n")
// for (let animal of animals){
//     console.log(`A ${animal} has a tail.`)
// }
// console.log("\nAll of these are great pets! but i love lion more")
//  Task 36
// function makeShirt(size : string, text : string,): void{
//     console.log(`you order a ${size} shirt that says ${text}`)
// }
// makeShirt(`Large`,`"i love typescript"`)
// makeShirt(`Medium`,`"i need a big shirt"`)
//  Task 37
// function makeShirt(size : string = "Large", text : string = "I love typescript"): void{
//     console.log(`You have order a ${size} shirt that says ${text}`)
// }
// makeShirt();
// makeShirt(`Medium`)
// //  Different message
// makeShirt(`Small`,`I like a big shirt to wear`)
//  Task 38
// function describe_city(city : string , country : string = "pakistan"): void {
//     console.log(`${city} is in ${country}`)
// }
// describe_city("karachi")
// describe_city('france','urope')
// describe_city( 'lahore','pakistan')
// describe_city('Delhi','India')
//  Task 39
// function cityCountry(city: string, country : string): string{
//     return `${city}, ${country}`
// }
// let c1 = cityCountry(`Lahore`,`pakistan`)
// let c2 = cityCountry(`Tokyo`,`Japan`)
// let c3 = cityCountry(`Mithi`,`Pakistan`)
// let c4 = cityCountry(`Delhi`,`India`)
// let c5 = cityCountry(`Dhaka`,`Bangladesh`)
// console.log(c1)
// console.log(c2)
// console.log(c3)
// console.log(c4)
// console.log(c5)
//  Task 40
// function makeAlbum (artist : string , title : string): {artist : string; title : string} {
//     const dictionaries = {
//         artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//         title: artist.charAt(0).toUpperCase() + title.slice(1)
//     };
//     return dictionaries;
// }
// let album = makeAlbum("Kumar", "Light")
// console.log(album)
//  album = makeAlbum("Sharma","Dark ")
// console.log(album)
// album = makeAlbum("Rani","red wave")
// console.log(album)
//  album = makeAlbum("Raseela","seenbreeze")
// console.log(album)
//  Task 41
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) { 
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
// }
//   const magician: string[] = ["Zara","Veer","Shakuni","Vidya"];
//   show_magicians(magician)
//  Task 42
//  function make_great(magician: string[]): void{
//      for ( let i = 0; i < magician.length; i++) {
//         magician[i] = magician[i]  +  `the great`
//      }
//  }
//  const magician2 : string[] =["Vikram", "Partap","Safdar"]
//  make_great(magician2)
//  console.log(magician2)
//  Task 43
// function make_great2(magicians: string[]): string[]{
//     const greatMagicians: string[] =[];
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians.push(magicians[i]+ `the great`); 
//     }
//     return greatMagicians;
// }
// const magician3: string[]=["Usman","Umar","Raess"];
// const greatMagicians2: string[] = make_great2(magician3);
// console.log(magician3);
// console.log(greatMagicians2);
//  Task 44
// function sandwich(...items: string[]): void{
//     console.log("sandwich order:")
//     for (let i = 0; i < items.length; i++){
//         console.log(` - ${items[i]}`)
//     }
// }
// console.log("Enjoy your sandwich Kumar Bhunesh!")
// sandwich('Capsicum', 'Tomato', 'Veg')
// sandwich('Chicken' ,'Cheese')
// sandwich('garlic chicken', 'Mayo sauce')
//  Task 45
// type car ={
//     manufacture: string
//     model: string
//     [key: string]: any;
// }
// function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
//     return{
//         manufacture,
//         model,
//         ...optional 
//     }
// }
// const mycar: car = createCar("Toyota","Mehran",{ color: "silver", year: "2024"})
// console.log(mycar)
