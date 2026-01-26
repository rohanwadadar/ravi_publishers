import React from 'react';
import ShelfPage from './ShelfPage';

const EnlightSemesterPage = ({ onAddToCart }) => {
    // Filter function for Enlight Semester Books
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        return cat === 'enlight semester books' ||
            cat === 'joyway semester books';
    };

    const filterOptions = ['Pre-KG', 'Jr.KG', 'Sr.KG', '1st Class', '2nd Class', '3rd Class', '4th Class', '5th Class'];

    return (
        <ShelfPage
            onAddToCart={onAddToCart}
            shelfTitle="Semester"
            shelfSubtitle="Series"
            filterFn={filterFn}
            accentColor="#9C27B0"
            filterOptions={filterOptions}
        />
    );
};

export default EnlightSemesterPage;
