reprovedStudents = []
with open("conteudo_3.txt", mode="r") as file:
    for line in file:
        content = line.split(" ")
        if int(content[1]) < 6:
            reprovedStudents.append(content[0] + '\n')


with open("reproveds.txt", mode="w") as reproveds:
    reproveds.writelines(reprovedStudents)
