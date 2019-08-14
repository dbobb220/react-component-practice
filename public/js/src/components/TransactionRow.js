function TransactionRow(props) {
    return (
        <tr>
            <td>{props.order.number}</td>
            <td>{props.order.date}</td>
            <td>{props.order.time}</td>
            <td>{props.order.amount}</td>
        </tr>
    )
}
