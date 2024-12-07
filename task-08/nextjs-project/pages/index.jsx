import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
    const books = [
        { name: "The Ruskin Bond", image: "/images/Ruskinbond.png" },
        { name: "Black Swan", image: "/images/Black_swan.png" },
        { name: "Diary of Nobody", image: "/images/Dairy_of)Nobody.png" },
        { name: "Honour", image: "/images/Honour.png" },
        { name: "Matilda", image: "/images/Matilda.png" },
        { name: "The Yard", image: "/images/The_Yard.png" },
        { name: "Atomic Habits", image: "/images/Atomic Habits.png" },
        { name: "11 rules of Life", image: "/images/11 rules of Life.png" },
        { name: "Sapiens", image: "/images/Sapiens.png" },
        { name: "Ikigai", image: "/images/Ikigai.png" },
        { name: "The Dairy of Wimpy Kid", image: "/images/The Dairy of Wimpy Kid.png" },
        { name: "The Girl Who Drank the Moon", image: "/images/The Girl Who Drank the Moon.png" },
        { name: "Wonder", image: "/images/Wonder.png" },
        { name: "Horrid Henry", image: "/images/Horrid Henry.png" },
        { name: "Holly Jackson", image: "/images/Holly Jacson.png" },
        { name: "Harry Potter", image: "/images/Harry Potter.png" },
        { name: "Famous Five", image: "/images/Famous Five.png" },
        { name: "Brilliant World", image: "/images/Brilliant World.png" },
        { name: "The Inheritance Game", image: "/images/The Inheritance Game.png" },
        { name: "One of Us is Lying", image: "/images/One of Us is Lying.png" },
        { name: "The Magic Of The Lost Story", image: "/images/The Magic Of The Lost Story.png" },
        { name: "Looking For Alaska", image: "/images/Looking For Alaska.png" },
        { name: "Northern Lights", image: "/images/Northern Lights.png" },
        { name: "After You", image: "/images/After You.png" },
        { name: "The Kite Runner", image: "/images/The Kite Runner.png" },
        { name: "Me Before You", image: "/images/Me Before You.png" },
        { name: "The Fault In Our Stars.png", image: "/images/The Fault In Our Stars.png" },
        { name: "The Immortals Of Meluha", image: "/images/The Imortals Of Meluha.png" },
        { name: "The Magic Drum", image: "/images/The Magic Drum.png" },
        { name: "Snow", image: "/images/Snow.png" },
        { name: "You The One I Want", image: "/images/You The One I Want.png" },
        { name: "Northern Lights", image: "/images/Northern Lights.png" },
        { name: "The Inheritance Game", image: "/images/The Inheritance Game.png" },
        { name: "Just Keep Buying", image: "/images/Just Keep Buying.png" },
        { name: "Snow", image: "/images/Snow.png" },
        { name: "The Immortals Of Meluha", image: "/images/The Imortals Of Meluha.png" },
        { name: "11 rules of Life", image: "/images/11 rules of Life.png" },
        { name: "Sapiens", image: "/images/Sapiens.png" },
        { name: "Ikigai", image: "/images/Ikigai.png" },
        { name: "Same As Ever", image: "/images/Same As Ever.png" },
    ];

    const rowNames = ["Top Reads", "Book Sets", "Fiction", "Recently Purchased"];
    const rows = 4;
    const columns = 10;

    const [ratings, setRatings] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        // Generate random ratings and prices
        const allRatings = books.map(() => Math.floor(Math.random() * 3) + 3);
        const allPrices = books.map(() => Math.floor(Math.random() * 401) + 500);
        setRatings(allRatings);
        setPrices(allPrices);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>OASIS</div>
                <input type="text" className={styles.search} placeholder="Search" />
                <Link href="/login">
                    <button className={styles.homeLoginButton}>Log In</button>
                </Link>
            </header>

            <nav className={styles.navbar}>
                <Link href="/categories" className={styles.navButton}>Category</Link>
                <Link href="/store" className={styles.navButton}>Store</Link>
                <Link href="/used-books" className={styles.navButton}>Used Books</Link>
                <Link href="/childrens-books" className={styles.navButton}>Children's Books</Link>
                <Link href="/literature" className={styles.navButton}>Literature</Link>
                <Link href="/manga" className={styles.navButton}>Manga</Link>
                <Link href="/india-top-reads" className={styles.navButton}>India Top Reads</Link>
                <Link href="/fiction" className={styles.navButton}>Fiction</Link>
            </nav>

            <main className={styles.main}>
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <section key={rowIndex}>
                        <h2>{rowNames[rowIndex]}</h2>
                        <div className={styles.bookRowWrapper}>
                            <div className={styles.bookRow}>
                                {Array.from({ length: columns }).map((_, columnIndex) => {
                                    const cardIndex = rowIndex * columns + columnIndex;
                                    const book = books[cardIndex];
                                    const rating = ratings[cardIndex];
                                    const price = prices[cardIndex];

                                    return (
                                        <div key={cardIndex} className={styles.bookCard}>
                                            <div className={styles.bookImage}>
                                                {book?.image ? (
                                                    <img
                                                        src={book.image}
                                                        alt=""
                                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                    />
                                                ) : (
                                                    <div className={styles.placeholder}>
                                                        No Image Available
                                                    </div>
                                                )}
                                            </div>
                                            <div className={styles.bookTitle}>
                                                {book?.name || `Book ${cardIndex + 1}`}
                                            </div>
                                            <div className={styles.bookPrice}>
                                                ₹{price}
                                            </div>
                                            <div className={styles.bookRating}>
                                                {'⭐'.repeat(rating) + '☆'.repeat(5 - rating)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            <footer className={styles.footer}>
                <div className={styles.nav}>
                    <Link href="/Contact Us" className={styles.footerButton}>
                        Contact Us
                    </Link>
                    <Link href="/FAQS" className={styles.footerButton}>
                        FAQS
                    </Link>
                    <div className={styles.socialIcons}>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconWrapper}>
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconWrapper}>
                            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconWrapper}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        </a>
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconWrapper}
                            aria-label="Download on Google Play Store">
                            <FontAwesomeIcon icon={faGooglePlay} className={styles.icon} />
                        </a>
                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconWrapper}
                            aria-label="Download on Apple App Store">
                            <FontAwesomeIcon icon={faApple} className={styles.icon} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
