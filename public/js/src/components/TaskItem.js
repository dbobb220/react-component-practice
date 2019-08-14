function TaskItem(props) {
    return(
        <a href="#" className="list-group-item">
            <span className="badge">{props.task.time}</span>
            <i className="fa fa-fw fa-calendar"></i>{props.task.name}
        </a>
    )
}
