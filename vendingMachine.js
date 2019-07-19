function vendingMachine() {
  // products in the machine
  var inventory = {
    coke: {
      id: 1,
      quantity: 5,
      cost: .50
    },
    sprite: {
      id: 2,
      quantity: 5,
      cost: .50
    },
    drPepper: {
      id: 3,
      quantity: 5,
      cost: .50
    }
  }

  // display current inventory (foo.toFixed(2) displays 2nd decimal point for money values)
  document.getElementById("inventory").innerHTML = `

  <div id="drink-cards">

  <div id="coke-card">
  <h4 id ="coke-title">Coca-Cola</h4>
  <p id="cokeQuantity">${inventory.coke.quantity} in the machine</p>
  <p>Price: $${inventory.coke.cost.toFixed(2)}</p>
  <button id="cokeBuy">Purchase</button>
  </div>

  <div id="sprite-card">
  <h4 id="sprite-title">Sprite</h4>
  <p id="spriteQuantity">${inventory.sprite.quantity} in the machine</p>
  <p>Price: $${inventory.sprite.cost.toFixed(2)}</p>
  <button id="spriteBuy">Purchase</button>
  </div>

  <div id ="drPepper-card">
  <h4 id = "drPepper-title">Dr. Pepper</h4>
  <p id="drPepperQuantity">${inventory.drPepper.quantity} in the machine</p>
  <p>Price: $${inventory.drPepper.cost.toFixed(2)}</p>
  <button id="drPepperBuy">Purchase</button>
  </div>

  </div>
  `

  // #justcokethings 
  document.getElementById("cokeBuy").addEventListener("click", buyCoke)
  function buyCoke() {
        // checks to make sure 50 cents has been entered
    if (money < .50) {
      alert("Please insert $ .50")
    }
    // checks to make sure coke is in stock
    else if (inventory.coke.quantity == 0) {
      alert("Sorry, we are all sold out of Coke")
    }
        // 50 cents will allow a user to purchase a drink
    else {
    // alert when purchase button is clicked
    alert("Thank you for your purchase, your change is $" + (money - .50).toFixed(2) + ", Enjoy your Coke!")
    // subtracts 1 from the coke inventory
    document.getElementById("cokeQuantity").innerHTML = (inventory.coke.quantity -= 1) + " in the machine"
    // reset the money in the machine
    money = 0
    // display new amount of money
    document.getElementById("credit").innerHTML = "Current credit is: $" + money.toFixed(2) 
    }
  }

  // #justspritethings
  document.getElementById("spriteBuy").addEventListener("click", buySprite)
  function buySprite() {
    // checks to make sure 50 cents has been entered
    if (money < .50){
      alert("Please insert $ .50")
    }
    // checks to make sure sprite is in stock
    else if (inventory.sprite.quantity == 0) {
      alert("Sorry, we are all sold out of Sprite")
    }
    // 50 cents will allow a user to purchase a drink
    else {
     // alert when purchase button is clicked
     alert("Thank you for your purchase, your change is $" + (money - .50).toFixed(2) + ", Enjoy your Sprite!")
     // subtracts 1 from the sprite inventory
     document.getElementById("spriteQuantity").innerHTML = (inventory.sprite.quantity -= 1) + " in the machine"
     // reset the money in the machine
     money = 0
     // display new amount of money
     document.getElementById("credit").innerHTML = "Current credit is: $" + money.toFixed(2) 
    }
  }

// #justdrpepperthings
  document.getElementById("drPepperBuy").addEventListener("click", buyDrPepper)
  function buyDrPepper() {
    if (money < .50) {
      alert("Please insert $ .50")
    }
    // checks to make sure drPepper is in stock
    else if (inventory.drPepper.quantity == 0) {
      alert("Sorry, we are all sold out of Dr. Pepper")
    }
        // 50 cents will allow a user to purchase a drink
    else {
       // alert when purchase button is clicked
       alert("Thank you for your purchase, your change is $" + (money - .50).toFixed(2) + ", Enjoy your Dr. Pepper!")
       // subtracts 1 from the Dr. Pepper inventory
       document.getElementById("drPepperQuantity").innerHTML = (inventory.drPepper.quantity -= 1) + " in the machine"
       // reset the money in the machine
       money = 0
       // display new amount of money
       document.getElementById("credit").innerHTML = "Current credit is: $" + money.toFixed(2) 
    }
  }



    // initial starting money
    var money = 0
    document.getElementById("credit").innerHTML = "Current credit is: $" + money.toFixed(2)
    // runs the 'addQuarter function when the button is clicked
    document.getElementById("quarterBtn").addEventListener("click", addQuarter)
    
    function addQuarter() {
      // adds a value of .25
      money += .25
      // shows us how much money we have in the machine
      document.getElementById("credit").innerHTML = "Current credit is: $" + money.toFixed(2) 
    }
}
vendingMachine()