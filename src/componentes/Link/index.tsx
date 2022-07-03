import "./styles.css"
import { Link as LinkRoute } from "react-router-dom";

interface LinkProps{
    text: string;
    redirect: string;
}

export default function Link(props: LinkProps){
    return(
        <LinkRoute className="Links-menu" to={props.redirect}>
            {props.text}
        </LinkRoute>
    )
};