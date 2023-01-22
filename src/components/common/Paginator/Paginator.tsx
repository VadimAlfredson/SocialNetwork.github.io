import React, {FC, useState} from "react";
import s from "../Paginator/paginator.module.css"

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number, pageSize: number, term: string, friend?: boolean) => void
    term: string
    friend: boolean
}

let Paginator: FC<PropsType> = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    ;
    let portionSize = 10
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize
    return (
            <div className={s.paginator}>
                {portionNumber > 1 &&
                <button className={s.pageNumber} onClick={() => {setPortionNumber(portionNumber - 1)}}>left</button>
                }
                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => {
                        // @ts-ignore
                        return <span className={props.currentPage === p ? s.activePage : s.pageNumber}
                                     onClick={() => {
                                         if (props.friend) {
                                         props.onPageChange(p, props.pageSize, props.term, props.friend)}
                                         else {props.onPageChange(p, props.pageSize, props.term)}
                                     }} key={p}
                        >{p}</span>
                    }
                )}
                {portionCount > portionNumber &&
                    pages
                        .filter(p => p === pageCount)
                        .map(p => {
                            // @ts-ignore
                            return <span className={props.currentPage === p ? s.activePage : s.pageNumber}
                                         onClick={() => {
                                             props.onPageChange(p, props.pageSize, props.term)
                                         }} key={p}
                            >{p}</span>
                        }
                        )}
                {portionCount > portionNumber &&
                <button className={s.pageNumber}
                onClick={() => {setPortionNumber(portionNumber + 1)}}
                >right</button>
                }
            </div>
    )
};

export default Paginator