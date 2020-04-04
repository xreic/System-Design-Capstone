import React from 'react';

export default function GuideModal({ display }){
    var guides = ["Nike Adapt", "Nike AirNike", "Air Force 1", "Nike Air Max", "Nike FlyEase", "Nike Flyknit", "Nike Flyleather", "Nike Free", "Nike Joyride", "Nike Pegasus", "Nike React", "Nike Vaporfly", "Nike Zoom Fly", "Nike ZoomX", "Space Hippie"];

    if(display === 'guide'){
        console.log('opening guides!');

        return(
            <ul className='guide-list'>
                {guides.map((guide) => (
                    <div className='guide-item'>{guide}
                        <div className='empty'></div>
                    </div>
                    
                ))}
            </ul>
        )
    }
    else{
        return null;
    }
}