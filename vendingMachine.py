coke = 5
sprite = 5
drPepper = 5

def vendingMachine():
  global coke
  global sprite     
  global drPepper
    
  money = int(input("Please insert 50 cents (in quarters): ")) * .25
  print("inserted: $",money)

  if money < .50:
    money = int(input("Please insert another quarter: ")) * .25 + .25
  if money >= .50:
    selection = input("Please choose a beverage [Coke - 1, Sprite - 2, Dr. Pepper - 3]")
  
    
    if selection == "1" and coke != 0:
      money = money - .50
      coke = coke - 1
      print("There are now", coke, "Coke's left in the machine")
      print("your change is", money)
    
    elif selection == "2" and sprite != 0:
      money = money - .50
      sprite = sprite - 1
      print("There are now", sprite, "Sprite's left in the machine")
      print("your change is", money)
    elif selection == "3" and drPepper != 0:
      money = money - .50
      drPepper = drPepper - 1
      print("There are now", drPepper, "Dr. Pepper's left in the machine")
      print("your change is", money)

    elif selection == "1" or "2" or "3" and coke or sprite or drPepper == 0:
     print("Sorry, that is out of stock, your  $", money, "has been returned")

    else:
      print("That is an invalid input, please select 1-3, $", money, "returned.")

while True:
  vendingMachine()