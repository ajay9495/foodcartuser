import React, { useState } from 'react'

import SearchResults from '../SearchResults/SearchResults'
import HeaderOverlay from '../HeaderOverlay/HeaderOverlay'
import HeaderContent from '../HeaderContent/HeaderContent'
import './Header.css'


export default function Header() {

  const [isSearchVisible, setIsSearchVisible] =  useState(false);
  const [isOverlayVisible, setIsOverlayVisible] =  useState(false);

  function toggleSearchResult() {
    setIsSearchVisible(!isSearchVisible);
  }

  function closeSearchResult() {
    setIsSearchVisible((currrentValue)=>{ 

            if(currrentValue){
              return !currrentValue;
            }
     });
  }  


  function toggleOverlay(){
    setIsOverlayVisible(!isOverlayVisible)
  }

  const HeaderOverlayProps = {
                                toggleSearchResult:toggleSearchResult,
                                toggleOverlay:toggleOverlay,
                                closeSearchResult:closeSearchResult
                              }

  return (

    <div className='header-main-wrapper'>

        <HeaderContent props={HeaderOverlayProps} />

        {isOverlayVisible && <HeaderOverlay props={HeaderOverlayProps} />}
        
        {isSearchVisible && <SearchResults />  }
        
    </div>

  )
}
