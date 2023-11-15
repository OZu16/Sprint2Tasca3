// client inserts

db.client.insertMany([{
    name: 'gerard',
    last_name: 'benages',
    nif: '65896589F',
    address: 'calle garcilaso 63b',
    cp: '45645',
    locality: [
        {
            name: 'barcelones',
            province: [
                {
                    name: 'barcelona'
                }
            ]
        }
    ]
},
{
    name: 'nunito',
    last_name: 'martinez',
    nif: '12365487Z',
    address: 'calle espronceda 12 4r 1a',
    cp: '65498',
    locality: [
        {
            name: 'barcelones',
            province: [
                {
                    name: 'barcelona'
                }
            ]
        }
    ]
},
{
    name: 'marc',
    last_name: 'capo',
    nif: '36548778D',
    address: 'calle llull 123 3r 2a',
    cp: '45698',
    locality: [
        {
            name: 'barcelones',
            province: [
                {
                    name: 'barcelona'
                }
            ]
        }
    ]
}
]);

//shop inserts

db.shop.insertMany([{
    address: 'bilbao 185',
    cp: 32154,
    locality: [
        {
            name: 'barcelones',
            province: [
                {
                    name: 'barcelona'
                }
            ]
        }
    ]
},
{
    address: 'taulat 222',
    cp: 65487,
    locality: [
        {
            name: 'barcelones',
            province: [
                {
                    name: 'barcelona'
                }
            ]
        }
    ]
}
]);

//cook inserts

db.cook.insertMany([{
    name: 'paca',
    last_name: 'tusabe',
    nif: '32165965P',
    tel: 987456321,
    shop_id: ObjectId("65550808beb1ec21e1b87eb9")
},
{
    name: 'paco',
    last_name: 'tusabe',
    nif: '32165487P',
    tel: 123456789,
    shop_id: ObjectId("65550808beb1ec21e1b87eb9")
}
]);

//delivery_man inserts

db.delivery_man.insertMany([{
    name: 'oscar',
    last_name: 'files',
    nif: '32569874A',
    tel: 654789321,
    shop_id: ObjectId("65550808beb1ec21e1b87eb9")
},
{
    name: 'marina',
    last_name: 'bfood',
    nif: '65421872G',
    tel: 321563789,
    shop_id: ObjectId("65550808beb1ec21e1b87eb9")
}
]);

//producto inserts

db.product.insertMany([{
    name: 'pizza bbq',
    description: 'clasica pizza bbq',
    image: new BinData(0, 'base64_encoded_image_data'),
    price: 11.99,
    cook: ObjectId("655508e0beb1ec21e1b87ebb"),
    pizza_category: [
      {
        name: 'bbq'
      },
      {
        name: 'no vegeta'
      }
    ]
  },
  {
    name: 'pizza margarita',
    description: 'clasica pizza margarita',
    image: new BinData(0, 'base64_encoded_image_data'),
    price: 11.99,
    cook: ObjectId("655508e0beb1ec21e1b87ebb"),
    pizza_category: [
      {
        name: 'margarita'
      },
      {
        name: 'vegeta'
      }
    ]
  },
  {
    name: 'cola',
    description: 'cola fresquita',
    image: new BinData(0, 'base64_encoded_image_data'),
    price: 1.99,
    cook: ObjectId("655508e0beb1ec21e1b87ebb")
  
  },
  {
    name: 'hamburguesa pollo',
    description: 'hamburguesa de pollo frito y huevo',
    image: new BinData(0, 'base64_encoded_image_data'),
    price: 1.99,
    cook: ObjectId("655508e0beb1ec21e1b87ebb")
  
  }
]);

//ordrer insert

db.order.insertOne({
    date: new Date(),
    total_price: 20.99,
    client_id: ObjectId("6555079cbeb1ec21e1b87eb6"),
    delivery_man_id: ObjectId("655508e7beb1ec21e1b87ebd"),
    shop_id: ObjectId("65550808beb1ec21e1b87eb9"),
    products: [ObjectId("65550a50beb1ec21e1b87ec0"), ObjectId("65550a50beb1ec21e1b87ec1")]
});