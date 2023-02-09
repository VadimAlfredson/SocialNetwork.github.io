import React from "react";
import s from './Setting.module.css';
import ProfileInfoForm from "./formProfileInfo";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {savePhotoTC} from "../../Redux/profile_reducer";

type PropsType = {
    savePhotoTC: (photo: any) => void
    defaultPhoto: string
}
const Setting = (props: PropsType) => {
    const dispatch = useAppDispatch()
    const profile =  useAppSelector(state => state.profile.profile)
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            dispatch(savePhotoTC(e.target.files[0]))
        }
    }
    return (<div className={s.profileInfoForm}>
            <h3>Profile setting</h3>
        <div>
            <label className={s.blockUploadPhoto}>
                <a className={s.textUploadPhoto}>Upload photo</a>
            <img  src={profile.photos.large || props.defaultPhoto} alt={'avatar'}/>
            <input type={"file"} onChange={onMainPhotoSelected} className={s.inputUploadPhoto}/>
            </label>
        </div>
        <div>
            <ProfileInfoForm />
        </div>
        </div>
    )
}

export default Setting