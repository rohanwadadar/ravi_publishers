import React from 'react';
import ShelfPage from './ShelfPage';

const KitsFlashPage = ({ onAddToCart }) => {
    // Filter function for kits and flash cards - search by name, category and image
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        const name = book.name?.toLowerCase() || '';
        const image = book.image?.toLowerCase() || '';

        // Match Enlight Kits and Flash Cards
        return cat === 'enlight kits' ||
            cat === 'flash cards' ||
            name.includes('kit') && name.includes('kg') || // Match Kit in name
            name.includes('flash card') ||
            image.includes('/kit') || // Match Kit in image path
            image.includes('flash');
    };

    const filterOptions = ['Enlight Kits', 'Flash Cards'];

    return (
        <ShelfPage
            onAddToCart={onAddToCart}
            shelfTitle="Study"
            shelfSubtitle="Kits"
            filterFn={filterFn}
            accentColor="#FFA500"
            filterOptions={['Enlight Kits']}
        />
    );
};

export default KitsFlashPage;
