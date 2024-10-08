export const authConfig = {
    pages:{
        signIn: '/login',
    }, 
    providers: [],
    callbacks: {
        async jwt({token,user}) {
            if(user) {
                token.id = user.id
                token.isAdmin = user.isAdmin
            }
            return token;
        },
        async session({session, token}) {
            if(token){ 
                session.user.id = token.id
                session.user.isAdmin = token.isAdmin
            }
                return session;
        },   
        authorized({auth, request}) {
            
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            // ONLY ADMIN CAN BE ON DASHBOARD
            
            if(isOnAdminPanel && !user?.isAdmin) {
                return false;
            }


            // ONLY AUTHENTICATED USER CAN BE ON BLOG PAGE

            if(isOnBlogPage && !user) {
                return false;
            }   


            // ONLY UNAUTHENTICATED USER CAN BE ON LOGIN PAGE

            if(isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl))
            }

            return true;
        }
    }
}