import React from 'react';
import ShelfPage from './ShelfPage';

const KitsFlashPage = ({ onAddToCart }) => {
    // Filter function for kits and flash cards
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        const name = book.name?.toLowerCase() || '';
        // Match Enlight Kits and Flash Cards
        return cat === 'enlight kits' ||
            cat === 'flash cards' ||
            cat.includes('kit') && !cat.includes('workbook') ||
            name.includes('flash card');
    };

    const filterOptions = ['Enlight Kits', 'Flash Cards'];

    return (
        <ShelfPage
            onAddToCart={onAddToCart}
            shelfTitle="Kits & Flash"
            shelfSubtitle="Cards"
            filterFn={filterFn}
            accentColor="#FFA500"
            filterOptions={filterOptions}
        />
    );
};

export default KitsFlashPage;
