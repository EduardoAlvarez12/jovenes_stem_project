import * as React from "react"

const Footer_style ={
    background: "#1c21d1",
    color: "white",
    padding:"20px",
    margin:"20px",
}
export function Footer(){
    return(
        <div >
            <div style={Footer_style}>
                <h3>Contáctenos</h3>
                <p> 
                    <b>Ubicacion: </b> 
                    Calle Las Flores y Avenida Las Magnolias Colonia Escolán.
                </p>
                <p> 
                    <b>Correo: </b> 
                    tecnogirls@ugb.edu.sv
                </p> 
                <p> 
                    <b>Telefono: </b> 
                    +(503) 2645-6500
                </p> 
            </div>
            
            <hr />
        

        </div>
        )

}