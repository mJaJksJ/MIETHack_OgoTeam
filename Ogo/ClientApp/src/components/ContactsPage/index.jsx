import React from 'react';

const ContactsPage = () => {
    return (
        <div>
            <table>
                <tr>
                    <b>Директор:</b> Андрей Германович Тренихин
                </tr>
                <tr>
                    <b>Телефон:</b> <span> (499) 734-65-26</span>,
                </tr>
                <tr>
                    <b>Факс:</b> <a href="tel:+74997346526"><span> (499) 734-65-26</span></a>
                </tr>
                <tr>
                    <b>E-mail:</b> <a style={{textDecoration: "none"}} href="mailto:campus@miee.ru"> campus@miee.ru</a>
                </tr>
            </table>
        </div>
    );
};

export default ContactsPage;