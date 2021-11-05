import 'tailwindcss/tailwind.css'
import Link from 'next/link'

import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <div className='max-w-7xl mx-auto shadow bg-gray-200 p-8'>
                <header>
                    <h1>Agenda La Logo</h1>
                    <div className='flex justify-around'>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                        <Link href='/sobre'>
                            <a>Sobre</a>
                        </Link>
                    </div>
                </header>
                <Component {...pageProps} />
                <footer className='bg-gray-400 mt-6 text-center'>
                    <p className='font-semibold'>Agenda La</p>
                    <p>Projeto construido durante o FullStack Academy</p>
                    <p><a href='https://github/leanfj'>Leandro Ferreira</a></p>
                </footer>
            </div>
        </>
    )
}

export default MyApp