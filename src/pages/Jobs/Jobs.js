import React, { Component } from 'react'
import Layout from "../../components/Layout/Layout";
import JobCollapsible from "../../components/Jobs/Collapsible/job-collapsible"

import "./Jobs.css"

export class JobsPage extends Component {

    render() {
        var data = {
            jobs: [{
                id: "asakldhflapqw1",
                title: "Operador de tractocamión",
                information:
                    `<p>Descripción y detalle de las actividades</p>
                    <ul>
                        <li>Traslado y operaciones en carretera de mercancía a toda la república mexicana, operación indispensable de tractocamión full</li>
                        <li>Asegurar que la unidad este en óptimas condiciones</li>
                    </ul>
                    <p>Experiencia y requisitos</p>
                    <ul>
                        <li>Manejo de full</li>
                        <li>Conocimiento de rutas alrededor de la república mexicana</li>
                    </ul>`,
                location: "Mexicali, B.C."
            },
            {
                id: "aqewrqwasdfrqw1",
                title: "Coordinador de calidad",
                information:
                    `<p>Descripción y detalle de las actividades</p>
                    <ul>
                        <li>Traslado y operaciones en carretera de mercancía a toda la república mexicana, operación indispensable de tractocamión full</li>
                        <li>Asegurar que la unidad este en óptimas condiciones</li>
                    </ul>
                    <p>Experiencia y requisitos</p>
                    <ul>
                        <li>Manejo de full</li>
                        <li>Conocimiento de rutas alrededor de la república mexicana</li>
                    </ul>`,
                location: "Tijuana, B.C."
            },
            {
                id: "saodjfafsaasd",
                title: "Guardia de seguridad",
                information:
                    `<p>Descripción y detalle de las actividades</p>
                    <ul>
                        <li>Traslado y operaciones en carretera de mercancía a toda la república mexicana, operación indispensable de tractocamión full</li>
                        <li>Asegurar que la unidad este en óptimas condiciones</li>
                    </ul>
                    <p>Experiencia y requisitos</p>
                    <ul>
                        <li>Manejo de full</li>
                        <li>Conocimiento de rutas alrededor de la república mexicana</li>
                    </ul>`,
                location: "Ensenada, B.C."
            }]
        }

        console.log(data)
        return (
            <Layout>
                <div className="jobs">
                    <h1 className="jobs-title">Bolsa de trabajo</h1>
                    <div className="jobs-collapsibles">
                        {data.jobs.map((job) => {
                            return <JobCollapsible key={job.id} job={job} />
                        })}
                    </div>
                </div>
            </Layout >

        )
    }
}
export default JobsPage
