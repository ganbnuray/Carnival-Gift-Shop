const input = require('sync-input');
let gifts = ["Teddy Bear", "Big Red Ball", "Huge Bear", "Candy", "Stuffed Tiger", "Stuffed Dragon", "Skateboard", "Toy Car", "Basketball", "Scary Mask"];
let prices = [10, 5, 50, 8, 15, 30, 100, 25, 20, 75];
let tickets = 0;
let tester = new Array(10);
function showGifts() {
  console.log("Here's the list of gifts:\n");
  for (i = 0;i < gifts.length; i++){
    if (gifts[i] != undefined){
      console.log(`${i+1}- ${gifts[i]}, Cost: ${prices[i]} tickets`);
    }
  }
};

function allUndefined() {
  for (i=0;i < prices.length;i++){
    if (prices[i] == undefined){
      tester[i] = true;
    }
    else{
      tester[i] = false;
    }
  }
  return tester.includes(false);
}
function greeting() {
  console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
  console.log("Hello friend! Thank you for visiting the carnival!");
};

function showOptions() {
  console.log("\nWhat do you want to do?");
  console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
}
function ending(){
  console.log("Have a nice day!");
}

function program() {
  while (true) {
    showOptions();
    let userChoice = input("");
    
    if (userChoice == "1"){
    let result = allUndefined();
      if (result == false){
        console.log("Wow! There are no gifts to buy.")
      }
      else{
        let giftID = input("Enter the number of the gift you want to get: ");
    if (isNaN(giftID) == true){
      console.log("Please enter a valid number!");
    }
    else if (isNaN(prices[giftID-1]) == true){
      console.log("There is no gift with that number!");
    }
    else{
      if (tickets < prices[giftID-1]){
        console.log("You don't have enough tickets to buy this gift.");
        console.log(`Total tickets: ${tickets}`);
      }
        
      else{
        console.log(`Here you go, one ${gifts[giftID - 1]}!`);
      tickets = tickets - prices[giftID-1];
      console.log(`Total tickets: ${tickets}`);
      gifts[giftID-1] = undefined;
      prices[giftID-1] = undefined;
      }
    }
  }
      }
    
    else if(userChoice == "2"){
    let moreTickets = input("Enter the ticket amount: ");
    if (0 <= moreTickets && moreTickets <= 1000){
      tickets += parseInt(moreTickets);
      console.log(`Total tickets: ${tickets}`);
    }
    else{
      console.log("Please enter a valid number between 0 and 1000.");
    }
    }
      
    else if(userChoice == "3"){
      console.log(`Total tickets: ${tickets}`);
    }
      
    else if(userChoice == "4"){
      showGifts();
      result = allUndefined();
      if (result == false){
        console.log("Wow! There are no gifts to buy.")
      }
    }
      
    else if(userChoice == "5"){
      ending();
      break;
    }
    else{
      console.log("Please enter a valid number!");
    }

  }
}
greeting();
showGifts();
program();
