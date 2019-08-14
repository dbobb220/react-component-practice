function TaskItem(props) {
    return(
        <a href="#" className="list-group-item">
            <span className="badge">{props.tasks.date}</span>
            <i className="fa fa-fw fa-calendar"></i>{props.tasks.task}
        </a>
    )
}
