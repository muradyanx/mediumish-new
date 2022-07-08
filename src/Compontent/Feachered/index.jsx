import './style.scss';
import Articles from '../Articles';
import one from '../../assets/img/demopic/one.jpg'
import two from '../../assets/img/demopic/two.jpg'
import three from '../../assets/img/demopic/three.jpg'
import four from '../../assets/img/demopic/four.jpg'

const Feachered = () => {

    const items = [
        {
            title: 'We\'re living some strange times',
            constent: `This is a longer card with supporting text 
                        below as a natural lead-in to additional content. 
                        This content is a little bit longer.`,
            image: one,
            name: 'Steve',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        },

        {
            title: 'Dreaming of Las Vegas Crazyness',
            constent: `This is a longer card with supporting 
                       text below as a natural lead-in to additional
                       content. This content is a little bit longer.`,
            image: two,
            name: 'Mary',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        },

        {
            title: 'The beauty of this world is in your heart',
            constent: `This is a longer card with supporting text 
                        below as a natural lead-in to additional content. 
                        This content is a little bit longer.`,
            image: three,
            name: 'Steve',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        },

        {
            title: 'San Francisco at its best view in all seasons',
            constent: `This is a longer card with supporting text 
                        below as a natural lead-in to additional content. 
                        This content is a little bit longer.`,
            image: four,
            name: 'Jane',
            data: '22 July 20176 min read',
            left_logo: '',
            right_logo: ''
        }
    ]



    return(
        <section className='main-block'>
           {items.map(el => <Articles item={el}/>)}
        </section>
    );
}

export default Feachered;