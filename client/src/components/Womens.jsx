import React from 'react';

export default function Womens({ display }){
    var titles = ['NEW RELEASES',
    'BEST SELLERS',
    'BEST OF AIR MAX SHOES',
    'STYLE YOUR AIR',
    'LET\'S TALK SPORTS BRAS',
    'NIKE YOGA',
    'SALE: JUST REDUCED'];

    var shoes = ['Lifestyle',
    'Running',
    'Training & Gym',
    'Basketball',
    'Jordan',
    'Soccer',
    'Tennis',
    'Track & Field',
    'Slides & Sandals',
    'Skateboarding',
    'Softball',
    'Shoes $100 & Under',
    'All Shoes'];

    var clothing = ['Tops & T-Shirts',
    'Shorts',
    'Hoodies & Sweatshirts',
    'Pants & Tights',
    'Jackets & Vests',
    'Swimwear',
    'Sports Bras',
    'Compression & Baselayer',
    'Plus Size',
    'Skirts & Dresses',
    'Yoga',
    'Socks',
    'All Clothing'];

    var accessories = ['Bags & Backpacks',
    'Hats, Visors & Headbands',
    'Apple Watch Nike'];

    var collections = ['Running',
    'Golf',
    'Soccer',
    'Jordan',
    'Training & Gym',
    'Tennis',
    'Nike Sportswear',
    'ACG',
    'NikeLab',
    'Basketball',
    'Softball',
    'Skateboarding',
    'Lacrosse',
    'Fan Gear',
    'Nike FlyEase'];

    if (display === 'women') {
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
                    <div className='bold-title'>SHOES</div>
                    {shoes.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='center-wing m-w-k'>
                    <div className='bold-title'>CLOTHING</div>
                    {clothing.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                    <div className='bold-title'>ACCESSORIES & EQUIPMENT</div>
                    {accessories.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='right-wing m-w-k'>
                    <div className='bold-title'>SHOP COLLECTION</div>
                    {collections.map((title) => (
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

