import React from 'react';
import ShelfPage from './ShelfPage';

const KitsFlashPage = ({ onAddToCart }) => {
    // Filter function for kits and flash cards
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        const name = book.name?.toLowerCase() || '';
        return cat.includes('kit') ||
            cat.includes('flash') ||
            name.includes('kit') ||
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
