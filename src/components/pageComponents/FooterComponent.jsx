import React, { memo } from 'react'

const FooterComponent = () => {
    return (
        <footer className='bg-black p-3 text-white text-center py-10 mt-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestiae nobis repudiandae tempora rem deserunt distinctio illum earum. Nisi sapiente ipsum eaque.</p>
            <p>&#169; Coryright Page</p>
        </footer>
    )
}

export default memo(FooterComponent);