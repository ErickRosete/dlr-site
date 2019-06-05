import React from 'react'
import Collapsible from 'react-collapsible';
import "./job-collapsible.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sibling = () => {
    return (<p className="job-collapsible-sibling">Requisitos: </p>)
}

const trigger = (props) => {
    return (
        <div className="job-collapsible-trigger">
            <h2>{props.title}</h2>
            {props.open ?
                <p>Menos información{" "}<FontAwesomeIcon className="icon" icon="chevron-circle-down" /></p> :
                <p>Más información{" "}<FontAwesomeIcon className="icon" icon="chevron-circle-right" /></p>
            }
        </div>);
}

const jobCollapsible = (props) => {
    return (
        <div className="job-collapsible">
            <Collapsible
                trigger={trigger({ title: props.job.title })}
                triggerWhenOpen={trigger({ title: props.job.title, open: true })}
                triggerSibling={sibling}
            >
                <div className="job-collapsible-content" dangerouslySetInnerHTML={{ __html: props.job.information }}></div>
            </Collapsible>

            <div className="job-collapsible-footer">
                <p><FontAwesomeIcon className="icon" icon="map-marker-alt" />{" " + props.job.location}</p>
                <button type="button" className="btn btn-main" onClick={props.onClick}>Solicitar</button>
            </div>
        </div>
    )
}

export default jobCollapsible
