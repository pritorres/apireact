import React, { useState } from "react";
import md5 from "md5"



const Home = () => {
    const [characters, setCharacters] = useState(null);
    const [comics, setComics] = useState(null);
    const [hash] = useState(md5(1+process.env.REACT_APP_PRIVATE_KEY+process.env.REACT_APP_PUBLIC_KEY));
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                    {
                        hash
                    }
                  
                    <div />
                </div>

            </div>
        </div>

    );
};

export default Home;