import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDB } from "./utils"
import { User } from "./models"
import bcrypt from "bcryptjs"
import { authConfig } from "./auth.config" //authConfig from "@/libs/auth.config"

const login = async (credentials) => {
    try {
        connectToDB();
        const { username, password } = credentials;
        

        const user = await User.findOne({username});
        if(!user) {
            throw new Error("User does not exist");
        } 

        const checkPassword = await bcrypt.compare(password, user.password);
        if(!checkPassword) {
            throw new Error("Incorrect password");
        }

        return user;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({ 
    ...authConfig,
    providers: [ 
        GitHub({  
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials) {
               try {
                    const user = await login(credentials);
                    return user;
               } catch (error) {
                    return null;
               }
            }
        })
    ],
    callbacks: {
        async signIn({user, account, profile }) {
            console.log(user, account, profile)
            if(account.provider === "github") {
                connectToDB();
                try {
                    const user = await User.findOne({email: profile.email}) 
                    
                    if(!user) {
                        const newUser = new User({  
                            email: profile.email,
                            username: profile.login,
                            password: 'pass123', 
                            img: profile.avatar_url
                        })

                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error)
                    return false;
                }
            }

            return true;
        },
        ...authConfig.callbacks 
    },
})