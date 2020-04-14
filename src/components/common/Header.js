import React from 'react'

function Header() {
    return (
        <div className='container-fluid'>
            <nav>
                <a href="/">Home</a> | {}
                <a href="/about">About</a> | {}
                <a href="/courses">Courses</a>
            </nav>
        </div>
    )
}

export default Header