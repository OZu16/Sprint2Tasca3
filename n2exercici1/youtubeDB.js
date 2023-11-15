db.createCollection('user', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'user',
        required: ['username', 'password', 'mail', 'date_of_birth', 'country', 'cp'],
        properties: {
          username: { bsonType: 'string' },
          password: { bsonType: 'string' },
          mail: { bsonType: 'string' },
          date_of_birth: { bsonType: 'date' },
          gender: { enum: ['male', 'female', 'other'] },
          country: { bsonType: 'string' },
          cp: { bsonType: 'string' },
          channel: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['name', 'creation_date', 'description'],
              properties: {
                channel_id: { bsonType: 'objectId' },
                name: { bsonType: 'string' },
                creation_date: { bsonType: 'date' },
                description: { bsonType: 'string' },
                video: {
                  bsonType: 'array',
                  items: {
                    title: 'object',
                    required: ['video_id', 'title', 'description', 'size', 'video_file_name', 'video_length', 'thumbnail', 'views', 'likes', 'dislikes', 'status', 'creation_date'],
                    properties: {
                      video_id: { bsonType: 'objectId' },
                      title: { bsonType: 'string' },
                      description: { bsonType: 'string' },
                      size: { bsonType: 'double' },
                      video_file_name: { bsonType: 'string' },
                      video_length: { bsonType: 'double' },
                      thumbnail: { bsonType: 'binData' },
                      views: { bsonType: 'int' },
                      likes_dislikes: {
                        bsonType: 'array',
                        items: {
                          title: 'object',
                          required: ['like_dislike_video_id', 'type', 'user'],
                          properties: {
                            like_dislike_video_id: { bsonType: 'objectId' },
                            type: { enum: ['like', 'dislike'] },
                            user: { bsonType: 'objectId' }
                          }
                        }
                      },
                      likes: { bsonType: 'int' },
                      dislikes: { bsonType: 'int' },
                      status: { enum: ['public', 'private'] },
                      tag: {
                        bsonType: 'array',
                        items: {
                          title: 'object',
                          required: ['tag_id', 'name'],
                          properties: {
                            tag_id: { bsonType: 'objectId' },
                            name: { bsonType: 'string' }
                          }
                        }
                      },
                      creation_date: { bsonType: 'date' },
                      comments: {
                        bsonType: 'array',
                        items: {
                          title: 'object',
                          required: ['comment_id', 'text', 'creation_date', 'user'],
                          properties: {
                            comment_id: { bsonType: 'objectId' },
                            text: { bsonType: 'string' },
                            creation_date: { bsonType: 'date' },
                            likes_dislikes: {
                              bsonType: 'array',
                              items: {
                                title: 'object',
                                required: ['like_dislike_comment_id', 'type', 'user'],
                                properties: {
                                  like_dislike_comment_id: { bsonType: 'objectId' },
                                  type: { enum: ['like', 'dislike'] },
                                  user: { bsonType: 'objectId' }
                                }
                              } 
                            },
                            user: { bsonType: 'objectId' }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          playlists: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['playlist_id', 'name', 'creation_date', 'status', 'videos'],
              properties: {
                playlist_id: { bsonType: 'objectId' },
                name: { bsonType: 'string' },
                creation_date: { bsonType: 'date' },
                status: { enum: ['public', 'private'] },
                videos: { bsonType: 'array', items: { bsonType: 'objectId' } }
              }
            }
          },
          suscription: {
            bsonType: 'array',
            items: { bsonType: 'objectId' }
          }
        }
      }
    }
  });
  