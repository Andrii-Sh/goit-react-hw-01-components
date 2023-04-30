import css from "./FriendListItem.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => { 
    return (
        <>
            <span className={clsx(css.status, {
                [css.isOnline]: isOnline,
            })}></span>
            <img className={css.avatar} src={ avatar } alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}