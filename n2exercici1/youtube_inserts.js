db.user.insertOne({
    username: 'paco',
    password: 'paco1234',
    mail: 'paco@email.com',
    date_of_birth: new Date('1990-01-01'),
    gender: 'male',
    country: 'spain',
    cp: '12345',
    channel: [
      {
        channel_id: ObjectId("6555079cbeb1ec21e1b87eb6"),
        name: 'paco_gamer_69',
        creation_date: new Date(),
        description: 'fornite gameplays',
        video: [
          {
            video_id: ObjectId("1235079cbeb1ec21e1b87eb6"),
            title: 'Video1',
            description: 'Descripción del video 1',
            size: 1024.5,
            video_file_name: 'video1.mp4',
            video_length: 120.5,
            thumbnail: new BinData(0, 'base64_encoded_image_data'),
            views: 0,
            likes_dislikes: [],
            likes: 0,
            dislikes: 0,
            status: 'public',
            tag: [{ tag_id: ObjectId("7695079cbeb1ec21e1b87eb6"), name: 'headshot' }, { tag_id: ObjectId("4985079cbeb1ec21e1b87eb6"), name: 'fiumba' }],
            creation_date: new Date(),
            comments: [
              {
                comment_id: ObjectId(),
                text: '¡Gran video!',
                creation_date: new Date(),
                likes_dislikes: [],
                user: ObjectId()
              }
            ]
          }
        ]
      }
    ],
    playlists: [
      {
        playlist_id: ObjectId(),
        name: 'Lista1',
        creation_date: new Date(),
        status: 'public',
        videos: [ObjectId()] 
      }
    ],
    suscription: [ObjectId()] 
  });
  