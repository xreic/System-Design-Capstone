import React from 'react';

export default function NewReleases({ display }) {

    var titles = ["SHOP ALL NEW ARRIVALS",
        "SNKRS LAUNCH CALENDAR",
        "BEST OF AIR MAX SHOES",
        "BEST SELLERS",
        "SPRING BREAK",
        "NIKELAB",
        "MEMBER EXCLUSIVES",
        "NEW TO SALE"];

    var men = ["Shoes",
        "Clothing",
        "Equipment",
        "Shop All New"];

    var women = ["Shoes",
        "Clothing",
        "Equipment",
        "Shop All New"];

    var kids = ["Boys Shoes",
        "Boys Clothing",
        "Girls Shoes",
        "Girls Clothing",
        "Shop All New"];

    if (display === 'new') {
        return (
            <div className='flyout'>
                <div className='empty-site-nav'>
                </div>
                <div className='left-wing'>
                    {titles.map((title) => (
                        <div className='bold-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='border-div'> </div>
                <div className='center-wing'>
                    <div className='bold-title'>NEW FOR MEN</div>
                    {men.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='center-wing'>
                    <div className='bold-title'>NEW FOR WOMEN</div>
                    {women.map((title) => (
                        <div className='center-wing-title'>
                            {title}</div>
                    ))}
                </div>
                <div className='right-wing'>
                    <div className='bold-title'>NEW FOR KIDS</div>
                    {kids.map((title) => (
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

