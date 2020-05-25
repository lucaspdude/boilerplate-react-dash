import React from 'react';
import { useSelector } from 'react-redux';



export function UserLogo(){
    const usuarioMedia = useSelector(state => state.user.profile.media);

    return(
        <>
            {
                usuarioMedia
                    .filter(media=>{
                        return media.collection_name == "logo"
                    })
                    .map(media => {
                        return(
                            <img key={media.id} src={media.url} alt="avatar" />
                        )
                    })
            }
        </>
    )

}

export function UserCapa(){
    const usuarioMedia = useSelector(state => state.user.profile.media);
    return(
        <>
            {
                usuarioMedia
                    .filter(media=>{
                        return media.collection_name == "capa"
                    })
                    .map(media => {
                        return(
                            <img key={media.id} src={media.url} alt="capa" />
                        )
                    })
            }
        </>
    )

}
