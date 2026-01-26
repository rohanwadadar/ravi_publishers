import React from 'react';
import ShelfPage from './ShelfPage';

const WorkbooksPage = ({ onAddToCart }) => {
    // Filter function for workbooks
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        const name = book.name?.toLowerCase() || '';
        // Match all workbook-related categories
        return cat.includes('work book') ||
            cat.includes('workbook') ||
            name.includes('workbook') ||
            name.includes('work book') ||
            cat === 'joyway work books' ||
            cat === 'individual work books';
    };

    const filterOptions = ['Pre-KG', 'Jr.KG', 'Sr.KG', '1st Class', '2nd Class', '3rd Class', '4th Class', '5th Class'];

    return (
        <ShelfPage
            onAddToCart={onAddToCart}
            shelfTitle="Workbooks"
            shelfSubtitle="Collection"
            filterFn={filterFn}
            accentColor="#2E3092"
            filterOptions={filterOptions}
        />
    );
};

export default WorkbooksPage;
