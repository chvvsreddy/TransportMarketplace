import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface allLoads {
  id  :String  ,
  shipper :  String ,
  shipperId :String,
  origin :String  ,
  destination :String 
  weight :number, 
  dimensions  :  String 
  cargoType      :     String,
  specialRequirements : String,
  //status              LoadStatus @default(AVAILABLE)
  price     :         number
  pickupWindowStart :  String ,
  pickupWindowEnd   :  String 
  deliveryWindowStart: String 
  deliveryWindowEnd :String ,
  isBulkLoad     :     Boolean  ,
  isFragile       :    Boolean  ,
  requiresColdStorage: Boolean ,
  createdAt         :  String ,
  updatedAt         : String ,


}
export interface allUsers{
  id          : String,
  email   :     String,
  passwordHash :String,
  type    : String,
  phone   : String,
  isVerified :Boolean,
  createdAt: String,
  updatedAt :  String,

}
export interface AllLoads  {
  allLoads : allLoads[]
}
export interface AllUsers{
  allLoads : allUsers[]
}
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["AllLoads", "AllUsers"],
  endpoints: (build) => ({
   getAllLoads: build.query<AllLoads, void>({
    query:()=>"/allLoads",
    providesTags: ["AllLoads"]
   }),
   getAllUsers:build.query<AllUsers, void>({
    query:()=>"allUsers",
    providesTags:["AllUsers"]
   })
  })
});

export const {useGetAllLoadsQuery} = api;