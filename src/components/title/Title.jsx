import React from 'react'

const Title = ({ title }) => {
    return (
        <div style={divStyles}>
            <h2 style={h2Styles}>{title}</h2>
        </div>
    )
}

const divStyles = {
    padding: "10px 30px",
    backgroundColor: "#fff"
}

const h2Styles = {
    color: "var(--primary-color)",
    fontSize: "30px",
    fontWeight: "500",
    borderBottom: "2px solid gray",
    width: "max-content",
    paddingBottom: "5px"
}
export default Title
