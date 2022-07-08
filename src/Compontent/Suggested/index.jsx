import Allstories from "../Allstories";
import './style.scss';
import five from '../../assets/img/demopic/five.jpg'
import six from '../../assets/img/demopic/six.jpg'
import seven from '../../assets/img/demopic/seven.jpg'
import eight from '../../assets/img/demopic/eight.jpg'
import nine from '../../assets/img/demopic/nine.jpg'
import ten from '../../assets/img/demopic/ten.jpg'

 

const Suggested = () => {

    const items = [
        {   
            id: 1,
            title: 'Autumn doesn\'t have to be nostalgic, you know?',
            constent: `This is a longer card with supporting text 
                        below as a natural lead-in to additional content. 
                        This content is a little bit longer.`,
            image: five,
            name: 'Steve',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        },

        {
            id: 2,
            title: 'Little red dress and a perfect summer',
            constent: `This is a longer card with supporting text 
                        below as a natural lead-in to additional content. 
                        This content is a little bit longer.`,
            image: six,
            name: 'Steve',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        },

        {
            id: 3,
            title: '10 Things you should know about choosing your house',
            constent: `This is a longer card with supporting text 
                        below as a natural lead-in to additional content. 
                        This content is a little bit longer.`,
            image: seven,
            name: 'Jane',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        },

        {
            id: 4,
            title: 'Best galleries in the world with photos',
            constent: `This is a longer card with supporting 
                       text below as a natural lead-in to additional
                       content. This content is a little bit longer.`,
            image: eight,
            name: 'Mary',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        },

        {
            id: 5,
            title: 'Thinking outside the box can help you prosper',
            constent: `This is a longer card with supporting 
                       text below as a natural lead-in to additional
                       content. This content is a little bit longer.`,
            image: nine,
            name: 'Mary',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        },

        {
            id: 6,
            title: 'Visiting the world means learning cultures',
            constent: `This is a longer card with supporting 
                       text below as a natural lead-in to additional
                       content. This content is a little bit longer.`,
            image: ten,
            name: 'Mary',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        }
    ]



    return(
        <section className="suggested">
        <h2 className="title-bold">All Stories</h2>
         
            <div className="suggested-position">
                { 
                    items.map(el => <Allstories item={el} key={el.id} /> )
                }

            </div>
           
        </section>
    );
}

export default Suggested;