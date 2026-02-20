import React from 'react';
import ShelfPage from './ShelfPage';

const LanguagesPage = ({ onAddToCart }) => {
    // Filter function for language books (Kannada, Tamil, Telugu, etc.)
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        const subCat = book.subCategory?.toLowerCase() || '';
        const name = book.name?.toLowerCase() || '';
        // Match Language Books category or books with language keywords
        return cat === 'language books' ||
            subCat === 'kannada' ||
            subCat === 'tamil' ||
            subCat === 'telugu' ||
            name.includes('kannada') ||
            name.includes('tamil') ||
            name.includes('telugu');
    };

    const filterOptions = ['Kannada', 'Tamil', 'Telugu'];

    return (
        <ShelfPage
            onAddToCart={onAddToCart}
            shelfTitle="Regional"
            shelfSubtitle="Languages"
            filterFn={filterFn}
            accentColor="#01A651"
            filterOptions={filterOptions}
        />
    );
};

export default LanguagesPage;
