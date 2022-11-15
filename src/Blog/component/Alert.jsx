import React from 'react'

export default function Alert(props) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        // if props null then next not execute
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show d-flex`} role="alert">
            <strong>{capitalizeFirstLetter(props.alert.type)}:&nbsp;  </strong>{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
