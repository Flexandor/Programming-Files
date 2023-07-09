""" student = {"name": "Rolf", "grades": (89, 90, 93, 78, 90)}

def average(sequence):
    return sum(sequence) / len(sequence)

print(average(student["grades"])) #want to be able to use print(student.average())

 """

class Student:
    def __init__(self): #This is the init method. It is a method because it is in a class.
        self.name = "Rolf" 
        self.grades = (90, 90, 93, 78, 90)

    def average_grades(self):
        return sum(self.grades) / len(self.grades)

student = Student()
print(student.name)
print(student.grades)
print(student.average_grades())
print("------------------------------------------------------------------------")

class StudentDifferent:
    def __init__(self, name, grades): #This is the init method. It is a method because it is in a class.
        self.name = name #Can do name above, or not.
        self.grades = grades

    def average_grades(self):
        return sum(self.grades) / len(self.grades)

student = StudentDifferent("Bob", (100, 100, 93, 78, 90))
print(student.name)
print(student.grades)
print(student.average_grades())
