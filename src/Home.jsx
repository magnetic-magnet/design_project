import { useState } from 'react'
import React from 'react';

function Home() {
    return (
        <header>
            <h1> Productivise </h1>

            <hr />
        <footer>
            <p>
                {new Date().getFullYear()} Productivize &copy; All Rights Reserved
            </p>
        </footer>
        </header>
    );
}

export default Home;