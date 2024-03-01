import React from 'react';


function Menu() {
    console.log("test")
    return (
        <section id="menu">
            <h2>Menu</h2>
            <div className='menu-item'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8e%2F50%2Fc4%2F8e50c4a61dbdbf7c82657212e52965de.jpg&f=1&nofb=1&ipt=daaf7b2ee35e8cdee3166f1290752debccfc60b8df429fb38067610c1f00583f&ipo=images' width={400} />
                <h3>menu 1</h3>
                <ul>
                    <li>ayam bakar</li>
                    <li>nasi </li>
                    <li>lalapan </li>
                    <li>sambel </li>
                    <li>es teh manis</li>
                </ul>
            </div>
            <div className='menu-item'>
                <img src='https://4.bp.blogspot.com/-6WBu4fAGG2w/UWBRd2NAa5I/AAAAAAAABfc/c30CBLV7Eho/s1600/_MG_0221.JPG' width={400}></img>
                <h3>menu 2</h3>
                <ul>
                    <li>ikan gurame</li>
                    <li>nasi</li>
                    <li>sambel</li>
                    <li>es teh manis</li>
                </ul>
            </div>
            <div className='menu-item'>
                <img src='https://www.masakapahariini.com/wp-content/uploads/2022/07/resep-ayam-rica-rica-kemangi.jpg' width={400}></img>
                <h3>menu 3</h3>
                <ul>
                    <li>ayam rica rica</li>
                    <li>nasi</li>
                    <li>sambel </li>
                    <li>lalapan</li>
                    <li>es teh manis</li>
                </ul>
            </div>
        </section>
    )
}

export default Menu;