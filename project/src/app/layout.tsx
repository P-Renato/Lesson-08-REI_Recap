import Link from 'next/link';
import './globals.css'

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html>
      <body>
        
        <header className='py-4 bg-purple-300 text-white px-5'>
          <nav style={{display: 'flex', gap: '1em'}}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
