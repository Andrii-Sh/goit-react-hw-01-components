import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import { FriendListItem } from "../friend-list-item/FriendListItem";

export const FriendList = ({ friends }) => { 
    return (
        <ul className={css.friendlist}>
            {friends.map(item => (
                <li className={css.item} key={item.id}>
                    <FriendListItem
                        avatar={ item.avatar }
                        name={item.name }
                        isOnline={ item.isOnline }
                    />
                </li>
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};