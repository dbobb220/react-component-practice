function TransactionRow(props) {
    return (
        <tr>
            <td>{props.orders.id}</td>
            <td>{props.orders.orderDate}</td>
            <td>{props.orders.orderTime}</td>
            <td>{props.orders.amount}</td>
        </tr>
    )
}
