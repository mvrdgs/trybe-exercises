name = input("Digite um nome: ")

for row in range(len(name)):
    print(name[0:(len(name) - row)])
