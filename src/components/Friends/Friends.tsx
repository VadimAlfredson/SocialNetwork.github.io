import React from 'react';
import s from './Friends.module.css';
import {FriendItem} from "./FriendsItem/FriendsItem";
import {friendsType} from "../../Redux/friends_reducer";

const Friends = (props: {friendsList: friendsType[]}) => {
    let friendsItem = props.friendsList.friends.map(
        f => <FriendItem name={f.name} id={f.id} photo={f.photo} key={f.id}/>
    )
    return <div className={s.friends}>
        <h4>Friends</h4>
        <div className={s.friendsList}>
            <>{friendsItem}</>
        </div>
    </div>
}

export default Friends;