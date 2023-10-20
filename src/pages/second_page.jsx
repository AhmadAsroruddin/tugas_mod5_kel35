import React, {useContext} from 'react';
import { Context } from '../App';

export default function page2() {

    const data = useContext(Context)

    return (
        <div>
            <>
                {
                    data.filter(x => {
                        return x.url[34] == 1 && x.url[35] > 0 || x.url[34] == 2 && x.url[35] == 0
                    })
                    .map((d) => {return <p>{d.name}</p>})
                }
            </>
        </div>
    )
    
}