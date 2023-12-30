

## Table Of Contents


 

 - About   
 - Project Dependency  
 - How To Run    
 - Sample Request and Response


 
 

## About

This project implements a RESTful API using Express.js that allows users to search for blog posts based on keywords. It fetches data from an external API and stores matching posts in MongoDB using Mongoose. Additionally, it logs user search actions with IP addresses.
 

## Project Dependency

 This project is developed using Node.Js, Express.JS and MongoDB. The node modules for the project can be found in package.json file
 

 

## How To Run

 
To run this project you need to:
1. Git clone this using this command:
	

    git clone https://github.com/MubashirZahid/SharaTrip.git

 
2. Then open cmd prompt and type  `cd project-path`
3. Then install node-modules using `npm i`
4. Then create a `.env`  file and give this

	

    DATABASE_URL = Your mongoDB atlas username and password/Your collection name
	

   
	
6. Finally, run the project using `npx nodemon app.js` 
	
 

## Sample Request and Response

Request

    curl --location 'localhost:3000/search?keyword=optio'

Response

    {
    "success": true,
    "data": {
        "posts": [
            {
                "userId": "1",
                "id": "1",
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "1",
                "id": "10",
                "title": "optio molestias id quia eum",
                "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "2",
                "id": "14",
                "title": "voluptatem eligendi optio",
                "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "4",
                "id": "32",
                "title": "doloremque illum aliquid sunt",
                "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "4",
                "id": "38",
                "title": "explicabo et eos deleniti nostrum ab id repellendus",
                "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "4",
                "id": "40",
                "title": "enim quo cumque",
                "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "5",
                "id": "44",
                "title": "optio dolor molestias sit",
                "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "6",
                "id": "55",
                "title": "sit vel voluptatem et non libero",
                "body": "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "7",
                "id": "61",
                "title": "voluptatem doloribus consectetur est ut ducimus",
                "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "7",
                "id": "62",
                "title": "beatae enim quia vel",
                "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "7",
                "id": "68",
                "title": "odio quis facere architecto reiciendis optio",
                "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "9",
                "id": "84",
                "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
                "body": "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            },
            {
                "userId": "9",
                "id": "86",
                "title": "placeat quia et porro iste",
                "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio",
                "updatedAt": "2023-12-30T14:32:56.313Z"
            }
        ],
        "postCount": 13
    },
    "message": "Successfully loaded the posts"
}
