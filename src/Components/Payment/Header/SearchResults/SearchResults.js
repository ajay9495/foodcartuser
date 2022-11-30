import React from 'react'

import './SearchResults.css'
import HeaderOffset from '../HeaderOffset/HeaderOffset'
import Search from '@mui/icons-material/SearchOutlined';
import {motion} from 'framer-motion'

export default function SearchResults() {

    const searchResultList =[
        {body: "how to delete instagram account" },
        {body: "how to download youtube video" },
        {body: "how you like that song" },
        {body: "how you like that song" }
    ]

    const anim = {
        from:{
            y:-200
        },
        to:{
            y:0
        },
        exitAnimation:{
            y:-200
        }
    };

    var index = 0;

  return (


            <motion.div 
                        className='search-result-wrapper'
                        variants={anim}
                        initial='from'
                        animate='to'
                        exit='exitAnimation'
            >
                <HeaderOffset />
                <div className="search-result-content-wrapper">

                    {
                        
                        searchResultList.map((item)=>{
                            index++
                            
                            return(
                                        <div key={index} className="search-result-content-sub">
                                            <div className="search-item">
                                            {item.body}
                                            </div>
                                            <div className="search-icon-wrapper">
                                                <Search sx={{fontSize:20}} />
                                            </div>
                                        </div> 
                            )
                        })
                    }
                </div>
            </motion.div>

  )
}
