
import React from 'react';
import { Page } from '../types';

interface LoginPageProps {
    onNavigate: (page: Page) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
    
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would add real login logic
        alert("Login successful!");
        onNavigate(Page.Home);
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-deep-indigo to-gray-900 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-white">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold">Welcome Back</h1>
                        <p className="text-white/70 mt-2">Log in to continue your journey.</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input className="w-full bg-white/20 text-white placeholder-white/60 rounded-xl border-0 py-3 px-5 transition focus:outline-none focus:ring-2 focus:ring-warm-coral" id="email" placeholder="Email Address" required type="email" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input className="w-full bg-white/20 text-white placeholder-white/60 rounded-xl border-0 py-3 px-5 transition focus:outline-none focus:ring-2 focus:ring-warm-coral" id="password" placeholder="Password" required type="password" />
                        </div>
                        <div>
                            <button className="w-full bg-warm-coral text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-warm-coral/40" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-6">
                        <p className="text-white/80">
                            Don't have an account?
                            <a className="font-medium text-warm-coral hover:underline ml-1" href="#">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};