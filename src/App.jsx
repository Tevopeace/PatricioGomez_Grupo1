import React from "react";
import Header from "./assets/Components/Header";
import Banner from "./assets/Components/Banner";
import "./App.css";
import Body from "./assets/Components/Body.jsx";
import Footer from "./assets/Components/Footer.jsx";


function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <main className="content">
                <section className="hero">
                    <Body />
                    <a href="/" className="cta-button">Learn More</a>
                </section>
                <section className="info">
                    asd
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
