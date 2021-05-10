import Link from 'next/link'
import Head from 'next/head'
import Nav from './Nav'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export function MainLayout({ children, title = 'no-title' }) {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Shoplaranextjsproject | {title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
            </Head>
            <Nav />
            <SwitchTransition>
                <CSSTransition key={router.route} classNames="page" timeout={300} appear>
                    <main>
                        {children}
                    </main>
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}
