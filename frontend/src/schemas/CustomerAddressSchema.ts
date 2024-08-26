import { z } from "zod"
 
export const CustomerAddressSchema = z.object({
  address: z.string().min(2).max(50),
})