import React from 'react';
import ShelfPage from './ShelfPage';

const EnlightTermPage = ({ onAddToCart }) => {
    // Filter function for Enlight Term Books
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        return cat.includes('term');
    };

    const filterOptions = ['Pre-KG', 'Jr.KG', 'Sr.KG', '1st Class', '2nd Class', '3rd Class', '4th Class', '5th Class'];

    return (
        <ShelfPage
            onAddToCart={onAddToCart}
            shelfTitle="Term"
            shelfSubtitle="Series"
            filterFn={filterFn}
            accentColor="#00BCD4"
            filterOptions={filterOptions}
        />
    );
};

export default EnlightTermPage;
