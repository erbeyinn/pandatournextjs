import React from 'react'
import Link from 'next/link'
const navigation = () => {
    return (
        <nav>
             <Link href="/">
                 <a>Ana Sayda</a>
            </Link>
            <Link href="/about">
                <a>Hakkımızda</a>
            </Link>
        </nav>
    )
}

export default navigation
