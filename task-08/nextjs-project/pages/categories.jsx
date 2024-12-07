import styles from '../styles/Categories.module.css';

export default function CategoriesPage() {
    const categories = [
        { name: 'Crime', image: '/images/Crime.png' },
        { name: 'Science Fiction', image: '/images/Science Fiction.png' },
        { name: 'Literature Fiction', image: '/images/Literature Fiction.png' },
        { name: 'Romantic Suspense', image: '/images/Romance.png' },
        { name: 'Historical', image: '/images/Historical.png' },
    ];

    const books = [
        { title: 'The Immortals Of Meluha', price: 'Rs.499', author: 'RUSKIN BOND', image: '/images/The Imortals Of Meluha.png' },
        { title: 'Sapiens', price: 'Rs.596', author: 'Yual Nova Hararri', image: '/images/Sapiens.png' },
        { title: 'Honour', price: 'Rs.670', author: 'Bernard Conwell', image: '/images/honour.png' },
        { title: 'The Black Swan', price: 'Rs.799', author: 'Nassim Nicolas', image: '/images/black_swan.png' },
        { title: 'Matilda', price: 'Rs.399', author: 'Roald Dahl', image: '/images/matilda.png' },
        { title: 'The Yard', price: 'Rs.399', author: 'Alliah Eniath', image: '/images/the_yard.png' },
    ];

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.logo}>OASIS</div>
                <input type="text" className={styles.search} placeholder="Search" />
            </header>

            <div className={styles.categories}>
                {categories.map((category, index) => (
                    <div key={index} className={styles.categoryCard}>
                        <div className={styles.categoryImage}>
                            {category.image ? (
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            ) : (
                                <div className={styles.placeholder}>No Image Available</div>
                            )}
                        </div>
                        <p className={styles.categoryTitle}>{category.name}</p>
                    </div>
                ))}
            </div>

            <div className={styles.content}>
                <aside className={styles.filters}>
                    <h3>Filters</h3>
                    <div className={styles.filterSection}>
                        <h4>Price</h4>
                        <ul>
                            <li><input type="checkbox" /> 0-100</li>
                            <li><input type="checkbox" /> 100-350</li>
                            <li><input type="checkbox" /> 350-500</li>
                            <li><input type="checkbox" /> 500-1000</li>
                        </ul>
                    </div>
                    <div className={styles.filterSection}>
                        <h4>Languages</h4>
                        <ul>
                            <li><input type="checkbox" /> English</li>
                            <li><input type="checkbox" /> Hindi</li>
                            <li><input type="checkbox" /> Italian</li>
                            <li><input type="checkbox" /> Arabic</li>
                            <li><input type="checkbox" /> Spanish</li>
                        </ul>
                    </div>
                </aside>

                <section className={styles.books}>
                    {books.map((book, index) => (
                        <div key={index} className={styles.bookCard}>
                            <div className={styles.bookImage}>
                                {book.image ? (
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                ) : (
                                    <div className={styles.placeholder}>No Image Available</div>
                                )}
                            </div>
                            <p className={styles.bookTitle}>{book.title}</p>
                            <p className={styles.bookAuthor}>{book.author || 'Unknown Author'}</p>
                            <p className={styles.bookPrice}>{book.price}</p>
                        </div>
                    ))}
                </section>
            </div>

            <div className={styles.pagination}>
                <span className={styles.pageNumber}>1</span>
                <span className={styles.pageNumber}>2</span>
                <span className={styles.pageNumber}>3</span>
                <button className={styles.nextButton}>→</button>
            </div>
        </div>
    );
}
