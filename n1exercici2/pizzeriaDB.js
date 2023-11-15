db.createCollection('client', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'client',
        required: ['name', 'last_name', 'nif', 'address', 'cp', 'locality'],
        properties: {
          name: {
            bsonType: 'string'
          },
          last_name: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'string'
          },
          cp: {
            bsonType: 'string'
          },
          locality: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['name', 'province'],
              properties: {
                name: {
                  bsonType: 'string'
                },
                province: {
                  bsonType: 'array',
                  items: {
                    title: 'object',
                    required: ['name'],
                    properties: {
                      name: {
                        bsonType: 'string'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('product', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'product',
        required: ['name', 'description', 'image', 'price', 'cook'],
        properties: {
          name: {
            bsonType: 'string'
          },
          description: {
            bsonType: 'string'
          },
          image: {
            bsonType: 'binData'
          },
          price: {
            bsonType: 'double'
          },
          cook: {
            bsonType: 'objectId'
          },
          pizza_category: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['name'],
              properties: {
                name: {
                  bsonType: 'string'
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('shop', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'shop',
        required: ['address', 'cp', 'locality'],
        properties: {
          address: {
            bsonType: 'string'
          },
          cp: {
            bsonType: 'int'
          },
          locality: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['name', 'province'],
              properties: {
                name: {
                  bsonType: 'string'
                },
                province: {
                  bsonType: 'array',
                  items: {
                    title: 'object',
                    required: ['name'],
                    properties: {
                      name: {
                        bsonType: 'string'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('cook', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'cook',
        required: ['name', 'last_name', 'nif', 'tel', 'shop_id'],
        properties: {
          name: {
            bsonType: 'string'
          },
          last_name: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          },
          tel: {
            bsonType: 'int'
          },
          shop_id: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('delivery_man', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'delivery_man',
        required: ['name', 'last_name', 'nif', 'tel', 'shop_id'],
        properties: {
          name: {
            bsonType: 'string'
          },
          last_name: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          },
          tel: {
            bsonType: 'int'
          },
          shop_id: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('order', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'order',
        required: ['date', 'total_price', 'client_id', 'shop_id', 'products'],
        properties: {
          date: {
            bsonType: 'date'
          },
          total_price: {
            bsonType: 'double'
          },
          client_id: {
            bsonType: 'objectId'
          },
          delivery_man_id: {
            bsonType: 'objectId'
          },
          shop_id: {
            bsonType: 'objectId'
          },
          products: {
            bsonType: 'array',
            items: {
              bsonType: 'objectId'
            }
          }
        }
      }
    }
  });