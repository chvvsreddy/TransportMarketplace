import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ALL } from "dns";


const prisma =  new PrismaClient();

export const getAllUsers = async (req:Request,res:Response):Promise<void> =>{
   try{
    const allUsers = await prisma.loads.findMany({
        take: 15,
        orderBy:{
            createdAt: "desc"
        }
    })
    res.json(allUsers)

   }catch(error){
        res.status(500).json({message:"Error in receiving All Users"})
   }
}