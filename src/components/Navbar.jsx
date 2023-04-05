import React from 'react'

export default function Navbar() {

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">To Do List</a>
                <a href="/PokeData" className = "navbar-brand">Pokemon Data</a>
            </div>
        </nav>
    )
}
