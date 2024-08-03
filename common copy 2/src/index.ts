import z from 'zod'
export const signupInput = z.object({
    username:z.string(),
    password:z.string().min(6),
    name:z.string().optional()
})

export const signinInput = z.object({
 username: z.string(),
password: z.string().min(6),
})

export const createCouseInput = z.object ({
name: z.string(), 
authorName: z.string(),
price:z.number()
})

export const updateCourseInput = z.object ({
title: z.string(), 
content: z.string(),
 id: z.number()
})

export type SignupInput=z.infer<typeof signupInput>
export type SigninInput=z.infer<typeof signinInput>
export type createCouseInput=z.infer<typeof createCouseInput>
export type updateCourseInput=z.infer<typeof updateCourseInput>