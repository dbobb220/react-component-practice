function MessagePreview (props) {
    return (
        <li className="message-preview">
        <a href="#">
            <div className="media">
                <span className="pull-left">
                    <img className="media-object" src="http://placehold.it/50x50" alt="" />
                </span>
                <div className="media-body">
                    <h5 className="media-heading"><strong>{props.messageName}</strong>
                    </h5>
                    <p className="small text-muted"><i className="fa fa-clock-o"></i>{props.messageDate}</p>
                    <p>{props.messageMessage}</p>
                </div>
            </div>
        </a>
        </li>
    )
}