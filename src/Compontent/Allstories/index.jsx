import React from 'react';
import './style.scss';  

function Allstories(props) {

    debugger;
    const item = props.item;
    

  return (
    
        <div key={item.id}  className='suggested-item'>
                        <div className='suggested-image' style={{backgroundImage:`url('${item.image}')`}}></div>
                        <div className='suggested-content'>
                            <div className='contenier-info'>
                                <h2>{item.title}</h2>
                                <p className='suggested-text'>{item.constent}</p>

                                <div className='suggested-blok'>
                                    <div className='suggested-logo'>{item.left_logo}</div>
                                    <div className='user-info'>
                                    <div>{item.name}</div>
                                    <p className='suggested-text'>{item.data}</p>
                                    </div>
                                </div>
                            </div>
                         </div> 
                    </div>
    
  )
}

export default Allstories;