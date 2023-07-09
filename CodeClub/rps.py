import random

options = ["rock", "paper", "scissors", "quit"]
quit = False

def choices(computer_choice, user_input):
    print("The computer picked " + computer_choice)
    print("You picked " + user_input)

while not quit:
    print("-----------------------------------------------------")
    print("Pick rock, paper or scissors, or type quit to exit.")
    user_input = input().lower()
    randomint = random.randint(1,3)
    computer_choice = options[randomint - 1]
    
    if user_input == "rock":
        if computer_choice == "scissors":
            choices(computer_choice, user_input)
            print("You won!")
        elif computer_choice == "paper":
            choices(computer_choice, user_input)
            print("You lost!")
        else:
            choices(computer_choice, user_input)
            print("That's a draw!")

    elif user_input == "paper":
        if computer_choice == "rock":
            choices(computer_choice, user_input)
            print("You won!")
        elif computer_choice == "scissors":
            choices(computer_choice, user_input)
            print("You lost!")
        else:
            choices(computer_choice, user_input)
            print("That's a draw!")

    elif user_input == "scissors":
        if computer_choice == "paper":
            choices(computer_choice, user_input)
            print("You won!")
        elif computer_choice == "rock":
            choices(computer_choice, user_input)
            print("You lost!")
        else:
            choices(computer_choice, user_input)
            print("That's a draw!")

    elif user_input == "quit":
        print("Thanks for playing! Goodbye!")
        quit = True
        
    else:
        print("That's not one of the options, try again!")
