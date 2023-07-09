class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    """ def __str__(self): #method gets called when you turn your object into a string
        return f"My name is {self.name}, and I am {self.age} years old." """

    def __repr__(self): #to be unambiguous and if possible should return a string that allows us to recreate the object easily.
        return f"<Person({self.name}, {self.age})>" #to test repr you have to comment out __str__. Can also use bob.__repr__()



#Person() #When you call person, python does the init method for you, these are called magic methods. Acts like Person.__init__()

bob = Person("Bob", 35)

print(bob)

