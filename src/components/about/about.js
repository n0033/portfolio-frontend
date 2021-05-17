import "./about.css";
import "../../static/css/grid.css";
import "../../../node_modules/loaders.css/loaders.min.css"
import axios from 'axios';
import { FiCopy } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';
import { AiFillLinkedin } from 'react-icons/ai';
import { APIURL, loader } from '../../constants.js'
import { useState, useRef, useEffect } from "react";

const aboutLoader = <div className="row content-center" style={{ height: "80vh" }}> <div className="col content-center">{loader}</div></div>

function About() {
    let data = {};
    const [About, setAbout] = useState([]);
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    let getAbout = async () => {
        const response = await axios.get(APIURL + "about/", {
            headers : {
                'Authorization': 'Token acc7a41df316a6fbbb8c5377af5a0f7f76b846ed'
            }
        });
        setAbout(response.data.results);
    }

    useEffect(() => {
        getAbout();
    }, [])


    if (About[0]) {
        data = About[0];
    }



    function copyToClipboard() {
        textAreaRef.current.select();
        document.execCommand('copy');
        setCopySuccess(1);
    };



    return (
        <div>
            {About[0] ? <div className="row content-around mt-5">
                <div className="col-2 col-md-4 col-sm-12">
                    <div class="board img-board">
                        <div className="row">
                            <img className="img" alt="" src={data.image} />
                        </div>
                        <div className="row content-center text-center">
                            <h3 className="mt-2 mb-1"> {data.title}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-7 col-md-12 col-sm-12">
                    <div className="row content-center">
                        <div className="board content-board">
                            <div className="row py-1">
                                {data.description_1}
                            </div>
                            <div className="row py-1">
                                {data.description_2}
                            </div>
                            <div className="row py-1">
                                {data.description_3}
                            </div>
                            <div className="row py-1">
                                {data.description_4}
                            </div>
                            <div className="row py-1">
                                {data.description_5}
                            </div>
                            <div className="row py-1">
                                {data.description_6}
                            </div>
                            <div className="row py-1">
                                {data.description_7}
                            </div>
                            <div className="row py-1">
                                {data.description_8}
                            </div>
                            <div className="row py-1">
                                {data.description_9}
                            </div>
                            <div className="row py-1">
                                {data.description_10}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-2 col-md-5 col-sm-12 mb-5">
                    <div className="row content-center">
                        <div className="board contact-board">

                            <div className="row content-center mt-1">
                                Contact
                            </div>

                            <div className="row mt-2">
                                <div className="col-1">
                                    {copySuccess ?
                                        <TiTick fontSize='1.1em' />
                                        :
                                        <FiCopy onClick={copyToClipboard} style={{ cursor: "pointer" }} fontSize='1.1em' />}
                                </div>
                                <div className="col-10 ml-1" style={{marginTop: "0.1em"}}>
                                    <textarea
                                        readOnly
                                        ref={textAreaRef}
                                        style={{ all: 'inherit', fontSize: '0.68rem', width: "100%"}}
                                        value="nwyszkowski@gmail.com" />
                                </div>
                            </div>

                            <div className="row">
                                <a href="https://www.linkedin.com/in/norbert-wyszkowski-a773421ba/" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                                    <AiFillLinkedin fontSize='1.3em' />
                                </a>
                                <span class="ml-2" style={{ fontSize: "0.8em", marginTop: "4px" }}>/norbert-wyszkowski</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
                :
                aboutLoader}
        </div>
    )
}

export default About;