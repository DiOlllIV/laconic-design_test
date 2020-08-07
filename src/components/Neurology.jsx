import React from 'react';

const Neurology = (props) => {
    const { visibility } = props;
    const itemVsblt = !visibility ? { display: "none" } : { display: "flex" }

    return (
        <div className="about__item"
            style={itemVsblt}
        >
            <div className="about__description">
                <h3>Неврологія</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="item-btn">Деталі</button>
            </div>
            <img src="src/img/neurology-img.png" alt="neurology"/>
        </div>
    );
};

export default Neurology;