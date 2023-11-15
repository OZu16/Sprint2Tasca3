db.createCollection('client', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'client',
        required: ['name', 'last_name', 'address'],
        properties: {
          name: {
            bsonType: 'string'
          },
          last_name: {
            bsonType: 'string'
          },
          referred: {
            bsonType: 'objectId'
          },
          address: {
            bsonType: 'array',
            items: {
              title: 'object',
              properties: {
                street: {
                  bsonType: 'string'
                },
                number: {
                  bsonType: 'int'
                },
                floor: {
                  bsonType: 'string'
                },
                door: {
                  bsonType: 'string'
                },
                city: {
                  bsonType: 'string'
                },
                cp: {
                  bsonType: 'int'
                }
              }
            }
          },
          transaction: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['transaction_id', 'glasses', 'date', 'employee'],
              properties: {
                transaction_id: {
                  bsonType: 'objectId'
                },
                glasses: {
                  bsonType: 'objectId'
                },
                date: {
                  bsonType: 'date'
                },
                employee: {
                  bsonType: 'objectId'
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('employee', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'employee',
        required: ['name', 'last_name', 'address'],
        properties: {
          name: {
            bsonType: 'string'
          },
          last_name: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'array',
            items: {
              title: 'object',
              properties: {
                street: {
                  bsonType: 'string'
                },
                number: {
                  bsonType: 'int'
                },
                floor: {
                  bsonType: 'string'
                },
                door: {
                  bsonType: 'string'
                },
                city: {
                  bsonType: 'string'
                },
                cp: {
                  bsonType: 'int'
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('supplier', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'supplier',
        required: ['nif', 'fax', 'brand', 'address'],
        properties: {
          nif: {
            bsonType: 'string'
          },
          fax: {
            bsonType: 'int'
          },
          brand: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['brand_id', 'name'],
              properties: {
                brand_id: {
                  bsonType: 'objectId'
                },
                name: {
                  bsonType: 'string'
                }
              }
            }
          },
          address: {
            bsonType: 'array',
            items: {
              title: 'object',
              properties: {
                street: {
                  bsonType: 'string'
                },
                number: {
                  bsonType: 'int'
                },
                floor: {
                  bsonType: 'string'
                },
                door: {
                  bsonType: 'string'
                },
                city: {
                  bsonType: 'string'
                },
                cp: {
                  bsonType: 'int'
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('glasses', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'glasses',
        required: ['brand', 'graduation_l', 'graduation_r', 'monture', 'colour_monture', 'colour_glass', 'price'],
        properties: {
          brand: {
            bsonType: 'objectId'
          },
          graduation_l: {
            bsonType: 'string'
          },
          graduation_r: {
            bsonType: 'string'
          },
          monture: {
            bsonType: 'string'
          },
          colour_monture: {
            bsonType: 'string'
          },
          colour_glass: {
            bsonType: 'string'
          },
          price: {
            bsonType: 'double'
          }
        }
      }
    }
  });