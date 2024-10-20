const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 10));

export const product =[
    {
        "product_id": 1,
        "name": "Sony Black Headphones",
        "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
        "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image",
        "minimum_bid": 100,
        "current_bid": 157,
        "ends_in": futureDate,
        "status": "Live Auction",
        "description": "Immerse yourself in pristine sound quality with the Sony Black Headphones. Crafted for audiophiles and casual listeners alike, these headphones deliver an exceptional audio experience with deep, resonant bass and crystal-clear highs. The sleek black design complements any style, whether you're on the go or relaxing at home. Equipped with advanced noise-canceling technology, these headphones block out distractions so you can enjoy your music, podcasts, or calls without interference. Comfort is key with plush ear cushions that provide long-lasting comfort for extended listening sessions. Designed for convenience, these headphones feature easy-to-use controls for adjusting volume, skipping tracks, and taking calls on the go. Foldable and compact, they're perfect for travel and storage, ensuring you can take your music with you wherever you go. Whether you're commuting, working out, or simply unwinding, the Sony Black Headphones offer premium sound quality and comfort that elevate your listening experience to new heights.",
        "reviews": [
            {
                "user_id": "user101",
                "reviewer_name": "Kristin Watson",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Kristin",
                "review_date": "March 14, 2021",
                "rating": 5,
                "comment": "These headphones are a game-changer for my daily commute. The noise-canceling feature works like a charm."
            },
            {
                "user_id": "user102",
                "reviewer_name": "Jenny Wilson",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Jenny",
                "review_date": "January 28, 2021",
                "rating": 5,
                "comment": "I'm blown away by the sound clarity these headphones offer."
            },
            {
                "user_id": "user103",
                "reviewer_name": "Jane Doe",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Jane",
                "review_date": "February 10, 2021",
                "rating": 4,
                "comment": "As a frequent flyer, these headphones have become my must-have travel companion."
            }
        ],
        "bidding_history": [
            {
                "username": "user1",
                "id": "id1",
                "bid_amount": 157,
                "bidder_type": "The Floor"
            },
            {
                "username": "user2",
                "id": "id2",
                "bid_amount": 150,
                "bidder_type": "The Floor"
            },
            {
                "username": "user3",
                "id": "id3",
                "bid_amount": 145,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user4",
                "id": "id4",
                "bid_amount": 140,
                "bidder_type": "The Floor"
            },
            {
                "username": "user5",
                "id": "id5",
                "bid_amount": 132,
                "bidder_type": "Internet Bidder"
            }
        ]
    },
    {
        "product_id": 2,
        "name": "Apple MacBook Pro",
        "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
        "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image",
        "minimum_bid": 500,
        "current_bid": 725,
        "ends_in": futureDate,
        "status": "Live Auction",
        "description": "The Apple MacBook Pro is a powerful laptop that delivers exceptional performance for both professionals and casual users. With its sleek design, Retina display, and advanced hardware, the MacBook Pro is perfect for creative work, coding, and entertainment. Featuring the latest Apple M1 chip, it ensures you experience lightning-fast processing, a long battery life, and a beautiful display with vivid colors and deep contrast.",
        "reviews": [
            {
                "user_id": "user104",
                "reviewer_name": "Michael Thompson",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Michael",
                "review_date": "April 10, 2022",
                "rating": 5,
                "comment": "The performance of this MacBook Pro is incredible. I can run multiple applications without any lag."
            },
            {
                "user_id": "user105",
                "reviewer_name": "Sarah Lee",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Sarah",
                "review_date": "April 3, 2022",
                "rating": 4,
                "comment": "Love the display quality and battery life. It is perfect for my design work."
            }
        ],
        "bidding_history": [
            {
                "username": "user1",
                "id": "id1",
                "bid_amount": 157,
                "bidder_type": "The Floor"
            },
            {
                "username": "user2",
                "id": "id2",
                "bid_amount": 150,
                "bidder_type": "The Floor"
            },
            {
                "username": "user3",
                "id": "id3",
                "bid_amount": 145,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user4",
                "id": "id4",
                "bid_amount": 140,
                "bidder_type": "The Floor"
            },
            {
                "username": "user5",
                "id": "id5",
                "bid_amount": 132,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user6",
                "id": "id6",
                "bid_amount": 111,
                "bidder_type": "The Floor"
            },
            {
                "username": "user7",
                "id": "id7",
                "bid_amount": 109,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user8",
                "id": "id8",
                "bid_amount": 105,
                "bidder_type": "The Floor"
            }
        ]
    },
    {
        "product_id": 3,
        "name": "Samsung Galaxy S21",
        "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
        "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image",
        "minimum_bid": 300,
        "current_bid": 415,
        "ends_in": futureDate,
        "status": "Live Auction",
        "description": "The Samsung Galaxy S21 is an advanced smartphone designed for those who want a high-quality mobile experience. Featuring a stunning AMOLED display, high-resolution camera, and powerful processor, the Galaxy S21 is perfect for taking photos, gaming, and staying connected. With 5G capabilities, you can enjoy faster downloads and smoother streaming wherever you are.",
        "reviews": [
            {
                "user_id": "user106",
                "reviewer_name": "Emily Davis",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Emily",
                "review_date": "March 5, 2022",
                "rating": 5,
                "comment": "The camera quality is outstanding. I love the vivid screen and fast performance."
            },
            {
                "user_id": "user107",
                "reviewer_name": "David Brown",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=David",
                "review_date": "March 1, 2022",
                "rating": 4,
                "comment": "Great phone for the price. The battery life could be a little better, but overall very satisfied."
            }
        ],
        "bidding_history": [
            {
                "username": "user13",
                "id": "id13",
                "bid_amount": 415,
                "bidder_type": "The Floor"
            },
            {
                "username": "user14",
                "id": "id14",
                "bid_amount": 400,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user15",
                "id": "id15",
                "bid_amount": 375,
                "bidder_type": "The Floor"
            },
            {
                "username": "user16",
                "id": "id16",
                "bid_amount": 350,
                "bidder_type": "Internet Bidder"
            }
        ]
    },
    {
        "product_id": 4,
        "name": "Bose QuietComfort 35",
        "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
        "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image",
        "minimum_bid": 150,
        "current_bid": 200,
        "ends_in": futureDate,
        "status": "Live Auction",
        "description": "The Bose QuietComfort 35 headphones offer superior noise cancellation, comfort, and high-quality sound. With a lightweight design, these headphones are perfect for long listening sessions, traveling, or simply relaxing at home.",
        "reviews": [
            {
                "user_id": "user108",
                "reviewer_name": "John Smith",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=John",
                "review_date": "January 12, 2022",
                "rating": 5,
                "comment": "Super comfortable and the noise cancellation is amazing. I use them every day at work."
            }
        ],
        "bidding_history": [
            {
                "username": "user17",
                "id": "id17",
                "bid_amount": 200,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user18",
                "id": "id18",
                "bid_amount": 190,
                "bidder_type": "The Floor"
            },
            {
                "username": "user19",
                "id": "id19",
                "bid_amount": 175,
                "bidder_type": "Internet Bidder"
            }
        ]
    },
    {
        "product_id": 5,
        "name": "Dell XPS 13",
        "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
        "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image",
        "minimum_bid": 400,
        "current_bid": 550,
        "ends_in": futureDate,
        "status": "Live Auction",
        "description": "The Dell XPS 13 laptop combines portability and performance. Featuring a stunning InfinityEdge display and Intel's latest processors, this laptop is designed for users who need power and style in one package.",
        "reviews": [
            {
                "user_id": "user109",
                "reviewer_name": "Anna Taylor",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Anna",
                "review_date": "February 25, 2022",
                "rating": 4,
                "comment": "The build quality is fantastic, and it runs everything I need without any issues."
            }
        ],
        "bidding_history": [
            {
                "username": "user20",
                "id": "id20",
                "bid_amount": 550,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user21",
                "id": "id21",
                "bid_amount": 530,
                "bidder_type": "The Floor"
            },
            {
                "username": "user22",
                "id": "id22",
                "bid_amount": 500,
                "bidder_type": "Internet Bidder"
            }
        ]
    },
    {
        "product_id": 6,
        "name": "Sony PlayStation 5",
        "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
        "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image",
        "minimum_bid": 350,
        "current_bid": 600,
        "ends_in": futureDate,
        "status": "Live Auction",
        "description": "The PlayStation 5 is Sony's latest gaming console, featuring lightning-fast load times, incredible graphics, and a wide selection of top-notch games. Get ready for a new generation of gaming.",
        "reviews": [
            {
                "user_id": "user110",
                "reviewer_name": "Chris Johnson",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Chris",
                "review_date": "March 20, 2022",
                "rating": 5,
                "comment": "The best gaming experience I've ever had. Graphics and speed are phenomenal."
            }
        ],
        "bidding_history": [
            {
                "username": "user23",
                "id": "id23",
                "bid_amount": 600,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user24",
                "id": "id24",
                "bid_amount": 580,
                "bidder_type": "The Floor"
            },
            {
                "username": "user25",
                "id": "id25",
                "bid_amount": 550,
                "bidder_type": "Internet Bidder"
            }
        ]
    },
    {
        "product_id": 7,
        "name": "Nintendo Switch",
        "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
        "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image",
        "minimum_bid": 200,
        "current_bid": 275,
        "ends_in": futureDate,
        "status": "Live Auction",
        "description": "The Nintendo Switch is a versatile gaming console that can be used at home or on the go. With a library of exciting games and a unique hybrid design, it's perfect for casual and serious gamers alike.",
        "reviews": [
            {
                "user_id": "user111",
                "reviewer_name": "Jessica Lee",
                "reviewer_image_url": "https://dummyimage.com/100x100/000/fff.png&text=Jessica",
                "review_date": "March 15, 2022",
                "rating": 5,
                "comment": "Love the versatility of this console. It's fun to play with family and friends."
            }
        ],
        "bidding_history": [
            {
                "username": "user26",
                "id": "id26",
                "bid_amount": 275,
                "bidder_type": "Internet Bidder"
            },
            {
                "username": "user27",
                "id": "id27",
                "bid_amount": 260,
                "bidder_type": "The Floor"
            },
            {
                "username": "user28",
                "id": "id28",
                "bid_amount": 240,
                "bidder_type": "Internet Bidder"
            }
        ]
    }
]






// export const product = [
//     {
//         "product_name": "Sony Black Headphones",
//         "minimum_bid": 100,
//         "current_bid": 157,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "Apple AirPod 2nd Gen",
//         "minimum_bid": 80,
//         "current_bid": 95,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "Mi 3i 20000mAh Power Bank",
//         "minimum_bid": 40,
//         "current_bid": 46,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "Tribit Bluetooth Speaker",
//         "minimum_bid": 10,
//         "current_bid": 15,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "WiFi Security Camera",
//         "minimum_bid": 100,
//         "current_bid": 157,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "Sony Black Headphones",
//         "minimum_bid": 100,
//         "current_bid": 157,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "Apple AirPod 2nd Gen",
//         "minimum_bid": 80,
//         "current_bid": 95,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "Mi 3i 20000mAh Power Bank",
//         "minimum_bid": 40,
//         "current_bid": 46,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "Tribit Bluetooth Speaker",
//         "minimum_bid": 10,
//         "current_bid": 15,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     },
//     {
//         "product_name": "WiFi Security Camera",
//         "minimum_bid": 100,
//         "current_bid": 157,
//         "time_left": futureDate,
//         "status": "Live Auction",
//         "thumbnail_url": "https://dummyimage.com/150x150/000/fff.png&text=Thumbnail",
//         "product_image_url": "https://dummyimage.com/600x400/000/fff.png&text=Product+Image"
//     }
// ]
