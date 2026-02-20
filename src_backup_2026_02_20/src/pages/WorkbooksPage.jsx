import React from 'react';
import ShelfPage from './ShelfPage';

const WorkbooksPage = ({ onAddToCart }) => {
    // Filter function for workbooks - search by name and image path
    const filterFn = (book) => {
        const cat = book.category?.toLowerCase() || '';
        const name = book.name?.toLowerCase() || '';
        const image = book.image?.toLowerCase() || '';

        // Match any book with "workbook" in name or image path
        return name.includes('workbook') ||
            image.includes('workbook') ||
            cat === 'individual work books' ||
            cat === 'joyway work books';
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
