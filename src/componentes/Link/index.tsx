import "./styles.css"
interface LinkProps{
    text: string;
    redirect: string;
}

export default function Link(props: LinkProps){
    return(
        <>
            <a className="Links-menu" href={props.redirect}>{props.text}</a>
        </>
    );
}