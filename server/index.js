/* 
Parking API
Autor: Luis Alberto Alcántara Cabrales A01634185
Descripción: API para el manejo de un estacionamiento
- Selección de lugar de estacionamiento según disponibilidad
y tipo de vehículo (chico, grande o discapacitados).
- Precio de estacionamiento según el tiempo de estancia, 15
pesos por hora.
Fecha: 13/09/2023
*/

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

let parking_places = Array(30).fill(0);

// Version 1

// Get spaces on parking lot
// GET /api/parking?car_type=1
// 0 - chico, 1 - grande, 2 - discapacitados
app.get("/api/v1/parking", (req, res) => {
  let car_type = req.query.car_type.toString() || null;
  car_type = Number(car_type);
  let assigned_place = false;

  switch (car_type) {
    case 0:
      for (let i = 0; i < parking_places.length; i+=2) {
        if (parking_places[i] === 0) {
          parking_places[i] = 1;
          res.send(`Lugar ${i} asignado`);
          assigned_place = true;
          break;
        }
      }
      if(assigned_place === false) {
        res.send("No hay lugares disponibles");
      }
      break;

    case 1:
      for (let i = 1; i < parking_places.length; i+=2) {
        if (parking_places[i] === 0) {
          parking_places[i] = 1;
          res.send(`Lugar ${i} asignado`);
          assigned_place = true;
          break;
        }
      }
      if(assigned_place === false) {
        res.send("No hay lugares disponibles");
      }
      break;

    case 2:
      for (let i = 10; i < parking_places.length; i+=10) {
        if (parking_places[i] === 0) {
          parking_places[i] = 1;
          res.send(`Lugar ${i} asignado`);
          assigned_place = true;
          break;
        }
      }
      if(assigned_place === false) {
        res.send("No hay lugares disponibles");
      }
      break;

    case null:
      res.send("No se especificó el tipo de vehículo");
      break;

    default:
      res.send("Tipo de vehículo no válido");
      break;
  }
});

// Get final price for parking
// GET /api/parking/price?minutes=120
app.get("/api/v1/parking/price", (req, res) => {
  const minutes = parseInt(req.query.minutes) || null;
  if (minutes === null) {
    res.send("No se especificó el tiempo de estancia");
  } else {
    const hours = Math.floor(minutes / 60);
    const price = hours * 15;

    if (hours === 0) {
      res.send("Los primeros 59 minutos son gratis");
    } else {
      res.send(`El precio a pagar es de $${price}`);
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
