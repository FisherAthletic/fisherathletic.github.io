import React from "react"
import { Icon } from "@material-ui/core"
import FisherLogo from "../../assets/images/fisher-logo-01.svg"

function Logo() {
    return (
        <Icon>
            <img style={{margin: "10px 0 0 0"}} src={FisherLogo} height={25} width={80} alt="Fisher Athletic Logo"/>
        </Icon>
    )
}

export default Logo