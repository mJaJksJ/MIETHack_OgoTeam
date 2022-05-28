import React, {useEffect} from 'react';
import style from './style.module.css'

const MainPage = () => {

    useEffect(() => console.log("hi"), [])

    return (
        <div className={style.root}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut distinctio, et eveniet exercitationem ipsum modi odit suscipit vero. Aliquid amet atque blanditiis cumque dignissimos distinctio ducimus ea et eveniet ex explicabo facilis fuga libero magnam nisi nostrum numquam, omnis optio quibusdam repellat rerum saepe sapiente sit suscipit tempora totam voluptatum. Architecto at blanditiis earum, eveniet exercitationem expedita in ipsa libero molestiae numquam, provident quisquam recusandae reprehenderit sed similique tempore totam unde. Animi aspernatur blanditiis dolore, doloremque esse eum, eveniet in ipsum iste magnam molestiae quae quidem quo reprehenderit ut vel veritatis voluptatum! Accusamus aliquam asperiores aspernatur beatae ea earum esse eveniet, maiores minima necessitatibus nemo neque qui recusandae repudiandae sed sequi tenetur veritatis. A animi aperiam cum, cupiditate dolorum, error esse et eum exercitationem hic impedit in libero minima molestiae officia perspiciatis repudiandae sequi tenetur unde voluptatibus. Assumenda commodi debitis dolor error molestias non pariatur, rerum voluptatum. A aliquam asperiores atque culpa debitis delectus dicta dignissimos dolorum error inventore itaque iusto magni, nemo officia optio possimus praesentium recusandae sapiente tempore veniam. Aliquid asperiores dolor, doloremque eos excepturi facilis ipsum numquam quaerat quibusdam quo reiciendis sit suscipit velit. Amet, cumque vitae! Consequatur id illo modi odit pariatur repellat sint?</p>
        </div>

    );
};

export default MainPage;