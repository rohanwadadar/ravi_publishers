import React from 'react';
import ShelfPage from './ShelfPage';

const EnlightCoursePage = ({ onAddToCart }) => {
    // Filter function for Enlight Course Books
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        return cat.includes('enlight course') ||
            cat === 'enlight course books';
    };

    const filterOptions = ['Pre-KG', 'Jr.KG', 'Sr.KG', '1st Class', '2nd Class', '3rd Class', '4th Class', '5th Class'];

    return (
        <ShelfPage
            onAddToCart={onAddToCart}
            shelfTitle="Enlight Core"
            shelfSubtitle="Course Books"
            filterFn={filterFn}
            accentColor="#EC1C24"
            filterOptions={filterOptions}
        />
    );
};

export default EnlightCoursePage;
