import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export const TransactionHistory = ({transactions}) => { 
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.type}>Type</th>
                    <th className={css.amount}>Amount</th>
                    <th className={css.currency}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(item => ( 
                    <tr className={css.item} key={item.id}>
                        <td className={css.type}>{ item.type }</td>
                        <td className={css.amount}>{ item.amount }</td>
                        <td className={css.currency}>{ item.currency}</td>
                    </tr>
                ))}             
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}
    
    
    
    
