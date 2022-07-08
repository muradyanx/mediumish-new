import '../Articles/style.scss'

const Articles = (props) => {
    
    let item = props.item

  

    return(
 
       
            
                 
                     <div  className='item'>
                        <div className='image' style={{backgroundImage: `url('${item.image}')`}} ></div>

                        <div className='content'>
                            <h2>{item.title}</h2>
                            <p className='item-content'>{item.constent}</p>

                            <div className="user-info">
                                <div className='content-user-logo'>{item.left_logo}</div>
                             <div>
                                <div>{item.name}</div>
                                <div className='item-content'>{item.data}</div>
                             </div>    
                            </div>  
                        </div>
                        </div>
                
            
     
  
    );

}

export default Articles;