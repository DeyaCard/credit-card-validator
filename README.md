Describe: creditCardValidator()

Test: "It ignores non numbers since they cannot be in credit cards."
Code: creditCardValidator(A)
Expected Output: "This card number in not valid" 

Test: "If you don't enter anything, the card will not be vaild."
Code: creditCardValidator()
Expected Output: "This card number is not valid"

Test: "If an entry is longer that 16 numbers, the card will not be valid."
Code: creditCardValidator(41020808604356201)
Expected Output: "This card number is not valid"

Test: "If an entry is shorter than 14 numbers, the card will not be valid."
Code: creditCardValidator(4102080860435)
Expected Output: "This card number is not valid"

Test: "It will move right to left, doubling every other number.
Code: creditCardValidator(1,2,3,4,5)
Expected Output: 2,2,6,4,10

Test: "If the result of the doubled digit is a double digit number, add together each digit of the double digit number."
Code: creditCardValidator(7)
Expected Output: 5

Test: "Sum all of the digits in the new transformed set of numbers."
Code: creditCardValidator(1,2,3,4,5)
Expected Output: 24

Test: "If the resulting number ends in a zero, the card is valid."
Code: creditCardValidator(4102080860435620)
Expected Output: "This card number is valid."




