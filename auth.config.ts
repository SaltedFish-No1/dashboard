import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) {
                    return true;
                }
                return false; // Redirect to login page if not logged in
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl)); // Redirect to dashboard if logged in
            }
            return true;
        },
    },
    providers: [] // Add provider with an empty array for now
} satisfies NextAuthConfig;
