// Series Mapping Configuration for Ravi Publishers Book Shop
// This defines the hierarchical structure: Series > Categories > SubCategories

export const seriesHierarchy = {
    "Joyway": {
        name: "Joyway e-Learning Series",
        description: "Interactive learning materials for early childhood education",
        color: "#FFF200",
        categories: {
            "Joyway Course Books": ["Pre-KG", "Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"],
            "Joyway Semester Books": ["Pre-KG", "Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"],
            "Joyway Term Books": ["Pre-KG", "Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"],
            "Joyway Workbooks": ["Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"]
        }
    },
    "Enlight": {
        name: "Enlight e-Learning Series",
        description: "Comprehensive digital-ready curriculum solutions",
        color: "#01A651",
        categories: {
            "Enlight Course Books": ["Pre-KG", "Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"],
            "Enlight Semester Books": ["Pre-KG", "Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"],
            "Enlight Term Books": ["Pre-KG", "Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"],
            "Enlight Kits": ["Pre-KG", "Jr.KG", "Sr.KG"],
            "Individual Work Books": ["Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"]
        }
    },
    "RAVI": {
        name: "RAVI Publishers Series",
        description: "Specialized government and regional language publications",
        color: "#EC1C24",
        categories: {
            "Govt": {
                name: "Government Publications",
                subcategories: {
                    "AP": "Andhra Pradesh State Board",
                    "TG": "Telangana State Board"
                }
            },
            "Telugu": {
                name: "Telugu Language Books",
                subcategories: {
                    "Telugu Course Books": ["Pre-KG", "Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"],
                    "Telugu Workbooks": ["Jr.KG", "Sr.KG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"]
                }
            },
            "Kannada Books": ["LKG", "UKG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"],
            "Tamil Books": ["LKG", "UKG", "1st Class", "2nd Class", "3rd Class", "4th Class", "5th Class"]
        }
    }
};

// Helper function to determine series from category name
export const getSeriesFromCategory = (category) => {
    if (category.includes("Joyway")) return "Joyway";
    if (category.includes("Enlight")) return "Enlight";
    if (category.includes("Kannada") || category.includes("Tamil") || category.includes("Telugu") || category.includes("Govt")) return "RAVI";
    return "Enlight"; // Default
};

// Navigation structure for the main menu
export const seriesNavigation = [
    {
        id: "joyway",
        label: "Joyway Series",
        series: "Joyway",
        path: "/series/joyway"
    },
    {
        id: "enlight",
        label: "Enlight Series",
        series: "Enlight",
        path: "/series/enlight"
    },
    {
        id: "ravi",
        label: "RAVI Publishers",
        series: "RAVI",
        path: "/series/ravi",
        subcategories: [
            {
                id: "govt",
                label: "Government",
                path: "/series/ravi/govt",
                children: [
                    { id: "ap", label: "AP State Board", path: "/series/ravi/govt/ap" },
                    { id: "tg", label: "Telangana Board", path: "/series/ravi/govt/tg" }
                ]
            },
            {
                id: "telugu",
                label: "Telugu",
                path: "/series/ravi/telugu"
            }
        ]
    }
];
