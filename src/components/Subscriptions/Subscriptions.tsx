import React, {FC} from 'react';
import s from './Subscriptions.module.css';
import {UserType} from "../../Redux/users_reducers";
import {NavLink} from "react-router-dom";

type PropsType = {
    subscriptions: Array<UserType>
    totalCountSubscriptions: number
}

let Subscriptions: FC<PropsType> = (props) => {
    return <div className={s.friends}>
        <div className={s.h4}>Subscriptions ({props.totalCountSubscriptions})</div>
            <div className={s.friendsList}>
                {
                    props.subscriptions.map((u: UserType) => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small :
                    'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
                } className={s.iconFriend}/>
                </NavLink>
            </div>
            {/*<span>
    <div className={s.name}>{u.name}</div>
</span>*/}
        </span>
                    </div>)}
            </div>
        </div>
}

export default Subscriptions;