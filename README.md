# Parking API

## Autor 
Luis Alberto Alcántara Cabrales - A01634185

## Descripción
API para el manejo de un estacionamiento inteligente. Incluye dos endpoints para el manejo de los lugares de estacionamiento y para el cobro de la estancia en el estacionamiento según el tiempo que el usuario haya permanecido en el lugar. 

* **GET /api/v1/parking?car_type=1** - Regresa el lugar de estacionamiento según el tipo de carro y la disponibilidad. El parámetro car_type puede ser 0, 1 o 2, donde 0 representa a los vehículos pequeños (espacios pequeños), 1 a los vehículos grandes (espacios grandes) y 2 para discapacitados (espacios para discapacitados). Si no hay lugares disponibles para el tipo de carro, regresa un mensaje de error. Si hay lugares disponibles, regresa el lugar de estacionamiento, los lugares están guardados en una lista donde los índices son los lugares y el valor booleano es la disponibilidad del lugar. Para los vehículos pequeños, los lugares disponibles son los índices pares, para los vehículos grandes, los lugares disponibles son los índices impares y para los discapacitados, los lugares disponibles son los índices múltiples de 10.
* **GET /api/v1/parking/price?minutes=120** - Regresa el precio a pagar por el tiempo de estancia en el estacionamiento. El parámetro minutes es el tiempo de estancia en el estacionamiento en minutos. Si el tiempo de estancia es menor o igual a 59 minutos, el precio es de $0. Si el tiempo de estancia es mayor a 59 minutos, el precio es de $15 por cada hora. 

## Instalación
Primero se debe instalar NodeJS y NPM. Para instalar Node JS y NPM en Windows, se debe descargar el instalador de la página oficial de Node JS: https://nodejs.org/en. Para instalar Node JS y NPM en Linux, se debe ejecutar el siguiente comando en la terminal: 
```
sudo apt install nodejs npm
```
Para instalar Node JS y NPM en Mac, se debe ejecutar el siguiente comando en la terminal: 
```
brew install node
```
Para verificar que Node JS y NPM se hayan instalado correctamente, se debe ejecutar el siguiente comando en la terminal: 
```
node -v
npm -v
```
Para correr el proyecto, primero se debe instalar Express. Para instalar Express, se debe ejecutar el siguiente comando en la terminal: 
```
npm install express
```
Y para instalar las dependencias adicionales, se debe ejecutar el siguiente comando en la terminal: 
```
npm install
```

## Ejecución
Para correr el proyecto, se debe ejecutar el siguiente comando en la terminal: 
```
npm start
```
