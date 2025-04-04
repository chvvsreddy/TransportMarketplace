Adding data to local environment

  --> Configure “username”, “password” and database name in .env file

Run  these commands in server directory to  Create prisma files and add data to postgreSQL

     npx prisma generate
  
     npx prisma migrate dev --name init
  
     npm run seed
