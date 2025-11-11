import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Priyanshu Kumar - Full-Stack Developer",
  description: "B.Tech Student & Full-Stack Developer focused on building scalable and intuitive web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* This is a dark-mode-first build, but we still support light mode.
        The default is now dark.
      */}
      <body className={`${inter.variable} font-sans 
                       bg-white text-gray-900 
                       dark:bg-black dark:text-gray-200 
                       transition-colors duration-200 antialiased`}
      >
        {/* Optional: Add Railway's subtle noise texture */}
        <div className="fixed inset-0 z-[-1] opacity-20 dark:opacity-10" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 80 80\'%3E%3Cpath fill=\'%239E9E9E\' fill-opacity=\'0.2\' d=\'M0 0h80v80H0zM20 20h40v40H20z\'/%3E%3C/svg%3E")' }} 
        />
        <Providers defaultTheme="dark"> {/* Default to dark */}
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}