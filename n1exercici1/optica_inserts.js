// employee inserts

db.employee.insertMany([{
    name: 'javi',
    last_name: 'capo',
    address: [
      {
        street: 'calle verdadera',
        number: 666,
        floor: 'Piso2',
        door: 'Puerta3',
        city: 'bcn',
        cp: 65498
      }
    ]
  },
  {
    name: 'marc',
    last_name: 'mascapo',
    address: [
      {
        street: 'calle falsa',
        number: 999,
        floor: 'Piso4',
        door: 'Puerta3',
        city: 'bcn',
        cp: 65487
      }
    ]
  }
]);
  
// supplier inserts

db.supplier.insertMany([{
    nif: '12365487Z',
    fax: 987456321,
    brand: [
      { brand_id: ObjectId("67989ce6e0330d77af782eff"),
        name: 'Shell' }
    ],
    address: [
      {
        street: 'llacuna',
        number: 21,
        floor: 'Piso3',
        door: 'Puerta4',
        city: 'bcn',
        cp: 36985
      }
    ]
  },
  {
    nif: '12365436D',
    fax: 123456789,
    brand: [
      { brand_id: ObjectId("64689ce6e0330d77af782eff"),
        name: 'Smith' }
    ],
    address: [
      {
        street: 'llull',
        number: 23,
        floor: 'Piso3',
        door: 'Puerta6',
        city: 'bcn',
        cp: 36987
      }
    ] 
}]);

// glasses inserts

db.glasses.insertMany([{
    brand: ObjectId("64689ce6e0330d77af782eff"),
    graduation_l: '3.3',
    graduation_r: '2.1',
    monture: 'plastic',
    colour_monture: 'purple',
    colour_glass: 'clear',
    price: 60.99
  },
  {
    brand: ObjectId("64689ce6e0330d77af782eff"),
    graduation_l: '2.3',
    graduation_r: '2.1',
    monture: 'matallic',
    colour_monture: 'black',
    colour_glass: 'tinted',
    price: 140.99
  },
  {
    brand: ObjectId("64689ce6e0330d77af782eff"),
    graduation_l: '14.2',
    graduation_r: '2.3',
    monture: 'plastic',
    colour_monture: 'white',
    colour_glass: 'clear',
    price: 40.99
  },
  {
    brand: ObjectId("67989ce6e0330d77af782eff"),
    graduation_l: '2.3',
    graduation_r: '2.1',
    monture: 'paper',
    colour_monture: 'black',
    colour_glass: 'clear',
    price: 30.99
  },
  {
    brand: ObjectId("67989ce6e0330d77af782eff"),
    graduation_l: '4.3',
    graduation_r: '2.7',
    monture: 'metallic',
    colour_monture: 'green',
    colour_glass: 'tinted',
    price: 180.99
  }
]);

// client inserts

db.client.insertOne({
    name: 'oscar',
    last_name: 'moreno',
    referred: ObjectId(null),
    address: [
      {
        street: 'calle inventada',
        number: 123,
        floor: 'Piso4',
        door: 'Puerta2',
        city: 'bcn',
        cp: 32156
      }
    ],
    transaction: [
      {
      transaction_id: ObjectId("22278ce6e0330d77af782eff"),
        glasses: [ObjectId("6554fe96beb1ec21e1b87ea4")],
        date: new Date(),
        employee: ObjectId("6554fe82beb1ec21e1b87ea1")
      }
    ]
  });  

db.client.insertMany([{
    name: 'nunito',
    last_name: 'martinez',
    referred: ObjectId("6555011fbeb1ec21e1b87eb3"),
    address: [
      {
        street: 'esproncedda',
        number: 187,
        floor: 'Piso1',
        door: 'Puerta2',
        city: 'bcn',
        cp: 56498
      }
    ],
    transaction: [
      {
      transaction_id: ObjectId("1234f755beb1ec21e1b87e8c"),
        glasses: [ObjectId("6554fe96beb1ec21e1b87ea6")],
        date: new Date(),
        employee: ObjectId("6554f755beb1ec21e1b87e8d")
      },
      {
      transaction_id: ObjectId("9874f755beb1ec21e1b87e8c"),
        glasses: [ObjectId("6554fe96beb1ec21e1b87ea7")],
        date: new Date(),
        employee: ObjectId("6554f755beb1ec21e1b87e8d")
      }
    ]
  },
  {
    name: 'gerard',
    last_name: 'benages',
    referred: ObjectId("6555011fbeb1ec21e1b87eb3"),
    address: [
      {
        street: 'esproncedda',
        number: 183,
        floor: 'Piso3',
        door: 'Puerta2',
        city: 'bcn',
        cp: 32154
      }
    ],
    transaction: [
      {
      transaction_id: ObjectId("1295fa36beb1ec21e1b87e91"),
        glasses: [ObjectId("6554fa36beb1ec21e1b87e94")],
        date: new Date(),
        employee: ObjectId("6554f755beb1ec21e1b87e8d")
      }
    ]
  }
]);  