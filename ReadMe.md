# Node-Task

This project was generated with Express Framework.

## Development server

Run `nodemon start` for a dev server, `http://localhost:3200/app/mat`. The app will automatically reload if you change any of the source files.

## Router

Used Common Router as `router` through it navigate through AdminRouter

## Database Connections 

Database connections are in config we can change it based on config.

## Http Server
The Http server are in folder `bin/www` the host and server configuration would be maintain there.

## Mongodb 
Insert the `User_Roles` in Mongodb table and then add the users the users will add the first user would be the admin the other than 
the users will insert other than role.

## Run Steps
1. Run `Npm install`
2. Run `nodemon start`
3. Use `Postman Toll` to check the things working fine
4. Insert  roles in `user_roles` table with `roleName`.
5. Using `PostMan` the Url to add users `http://localhost:3200/app/mat/userRegister` and pass the body
 with post.