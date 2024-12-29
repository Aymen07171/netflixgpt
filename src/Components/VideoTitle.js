    import React from 'react'
    
    const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white ">
            <h1 className="text-2xl md:text-6xl font-bold text-bkack">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4 text-gray-300">{overview}</p>

            <div className="my-4 md:my-8">
                <button className="bg-red-600 text-white py-2 md:py-4 px-6 md:px-12 text-xl rounded-lg hover:bg-red-700">
                    ▶️ Play
                </button>
                <button className="mx-2 bg-gray-800 text-white py-2 md:py-4 px-6 md:px-12 text-xl rounded-lg hover:bg-gray-700">
                    ℹ️ More Info
                </button>
            </div>
            
        </div>
    )
    }

    export default VideoTitle
