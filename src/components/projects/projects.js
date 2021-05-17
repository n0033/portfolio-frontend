import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Element} from '../exports';
import {APIURL, loader} from '../../constants.js'
import "./portfolio.css";
import "../../../node_modules/loaders.css/loaders.min.css"
import "../../static/css/grid.css";


const dataLoader = <div style={{height: "80vh"}} className="row content-center">
    <div className="col-2 content-center">
        {loader}
    </div>
</div>



function isShadowLogo(title) {
    if (title === "darmowamapka.pl") return true;
    return false;
}


function Portfolio() {
    let projects = [];
    const [projectData, setProjectData] = useState([]);
    let getProjects = async () => {
        let response = await axios.get(APIURL + "projects/", {
            headers: {
                'Authorization': 'Token acc7a41df316a6fbbb8c5377af5a0f7f76b846ed'
            }
        });
        setProjectData(response.data.results);
    }

    useEffect(() => {
        getProjects();
    }, [])


    if (projectData[0]) {
        let isReversed = false;
        for (let i = 0; i < projectData.length; i++) {
            projects.push(<Element key={i}
                                   title={projectData[i].title}
                                   link={projectData[i].link}
                                   description={projectData[i].description}
                                   img={projectData[i].image}
                                   reverse={isReversed}
                                   technologies={projectData[i].technologies}
                                   imgShadow={isShadowLogo(projectData[i].title)}/>)
            isReversed = !isReversed;
        }
    }


    return (
        <div>
            {!projects[0] && dataLoader}
            {projects}
        </div>
    )
}

export default Portfolio;