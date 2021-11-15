import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function Loader() {
    return (
        <div className="spinner_">
            <div className="center_spin">
                <Spinner animation="border" variant="primary" />
            </div>
        </div >
    )
}
