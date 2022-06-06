import type {NextPage} from 'next'
import Head from 'next/head'
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Front page of the Internet</title>
            </Head>
            <Header/>
            <main>Hello world from Next!</main>
            <Footer/>
        </>
    )
}

export default Home
