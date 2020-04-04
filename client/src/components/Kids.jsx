import React from 'react';

export default function Kids({ display }){
    var titles = ['NEW RELEASES',
    'BEST SELLERS',
    'BEST OF AIR MAX SHOES',
    'STYLE YOUR AIR',
    'BRAS AND TIGHTS',
    'ELECTRIC POP',
    'SALE: JUST REDUCED'];

    var boys = ['Big Kids (3.5Y - 7Y)',
    'Little Kids (10.5C - 3Y)',
    'Baby & Toddler (0C - 10C)',
    'Lifestyle',
    'Running',
    'Basketball',
    'All Shoes']

    var boysClothing =['Big Kids (XS – XL)',
    'Little Kids (4 – 7)',
    'Baby & Toddler (0M – 4T)',
    'Hoodies & Sweatshirts',
    'Pants & Tights',
    'Jackets',
    'Tops & T-Shirts',
    'Nike Pro & Compression',
    'Shorts',
    'All Clothing'];

    var girls = ['Big Kids (3.5Y - 7Y)',
    'Little Kids (10.5C - 3Y)',
    'Baby & Toddler (0C - 10C)',
    'Lifestyle',
    'Running',
    'Basketball',
    'All Shoes'];

    var girlsClothing = ['Big Kids (XS – XL)',
    'Little Kids (4 – 6X)',
    'Baby & Toddler (0M – 4T)',
    'Hoodies & Sweatshirts',
    'Pants & Tights',
    'Jackets',
    'Tops & T-Shirts',
    'Sports Bras',
    'Shorts',
    'All Clothing'];

    var toddler = ['Baby Girl',
    'Baby Boy',
    'All Shoes',
    'All Clothing',
    'Baby Box Sets'];

    var accessories = ['Bags & Backpacks',
    'Socks',
    'Hats & Headwear'];

    var collection =['Rep Your City',
    'Nike Adventure Club',
    'Slides & Sandals',
    'Surf & Swimwear',
    'Jordan Kids',
    'Customize',
    'Fan Gear',
    'Nike FlyEase'];

    if (display === 'kids') {
        return (
            <div className='flyout'>
                <div className='empty-site-nav'>
                </div>
                <div className='left-wing m-w-k'>
                    {titles.map((title) => (
                        <div className='bold-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='border-div'> </div>
                <div className='center-wing m-w-k'>
                    <div className='bold-title'>BOYS SHOES</div>
                    {boys.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                    <div className='bold-title'>BOYS CLOTHING</div>
                    {boysClothing.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='center-wing m-w-k'>
                    <div className='bold-title'>GIRLS SHOES</div>
                    {girls.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                    <div className='bold-title'>GIRLS CLOTHING</div>
                    {girlsClothing.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='right-wing m-w-k'>
                    <div className='bold-title'>BABY & TODDLER</div>
                    {toddler.map((title) => (
                        <div className='right-wing-title'>
                            {title}</div>
                    ))}
                    <div className='bold-title'>ACCESSORIES & EQUIPMENT</div>
                    {accessories.map((title) => (
                        <div className='right-wing-title'>
                            {title}</div>
                    ))}
                    <div className='bold-title'>SHOP COLLECTION</div>
                    {collection.map((title) => (
                        <div className='right-wing-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='empty-site-nav'>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

