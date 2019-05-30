import React from 'react'
import Collapsible from 'react-collapsible';
import "./job-collapsible.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const jobCollapsible = (props) => {
    return (
        <div className="job-collapsible">
            <div className="job-collapsible-title">
                <h2>{props.job.title}</h2>
            </div>
            <div className="job-collapsible-content">
                <Collapsible trigger="Requisitos">
                    <div dangerouslySetInnerHTML={{ __html: props.job.information }}></div>
                </Collapsible>
                <div className="job-collapsible-footer">
                    <p><FontAwesomeIcon className="icon" icon="map-marker-alt" />{" " + props.job.location}</p>
                    <button type="button" className="btn btn-main">Solicitar</button>
                </div>
            </div>
        </div>
    )
}

export default jobCollapsible
