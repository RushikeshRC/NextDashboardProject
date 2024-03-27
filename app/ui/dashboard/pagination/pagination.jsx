"use client"

import styles from "./pagination.module.css"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const Pagination = ({count}) => {

  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  //get the page
  const page = searchParams.get("page") || 1;  //if it exist we are going to store, if not we are on the 1st page

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page)-1) > 0; 
  //lets say we are on 1st page, 1-1=0 , 0*anything=0, 0!>0, so we are on 1st page and Previos Button will be disabled..
  const hasNext = ITEM_PER_PAGE * (parseInt(page)-1) + ITEM_PER_PAGE < count ;
  //here count is total no of users
  //lets say we are on 2nd page, 2-1=1, 1*2=2, 2+2=4, here if count=6 then 4<6, so unable Next Button

  const handleChangePage = (type)=>{
    type === "prev" ? params.set("page",parseInt(page) -1) : params.set("page",parseInt(page) +1);
    //if type is prev then set the page as current page -1 if next then page+1
    replace(`${pathname}?${params}`); 
  }

  return (
    <div className={styles.container}>
        <button className={styles.button} disabled={!hasPrev} onClick={()=>handleChangePage("prev")}>
          Previous
          </button>
        <button className={styles.button} disabled={!hasNext} onClick={()=>handleChangePage("next")}>
          Next
          </button>
    </div>
  )
}

export default Pagination