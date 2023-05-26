import { z } from "zod"

export const contactRequestValidator = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export type ApiContactRequest = z.infer<typeof contactRequestValidator>