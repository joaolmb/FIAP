
tempo = float(input("Há quantos anos você fuma?"))
valor = float(input("Qual o valor do maço de cigarro?"))
qtd_dia = float(input("Quantos maços de cigarro você fuma por dia?"))

gasto = tempo * 365 * valor * qtd_dia

if gasto < 20000:
    print(f"Com o valor R$ {gasto:.1f}, você poderia ter dado entrada em um carro")

elif 20000 <= gasto <= 50000:
    print(f"Com o valor R$ {gasto:.1f}, você poderia ter comprado um carro popular usado.")

else:
    print(f"Com o valor R$ {gasto:.1f}, você poderia ter comprado um carro zero.")

