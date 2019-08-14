function MessagePreview (props) {
    return (
        <li className="message-preview">
        <a href="#">
            <div className="media">
                <span className="pull-left">
                    <img className="media-object" src="http://placehold.it/50x50" alt="" />
                </span>
                <div className="media-body">
                    <h5 className="media-heading"><strong>{props.messages.name}</strong>
                    </h5>
                    <DateTime dateTime={props.messages.date}/>
                    <p>{props.messages.message}</p>
                </div>
            </div>
        </a>
        </li>
    )
}