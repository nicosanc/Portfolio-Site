import React from "react";

const PersonalProject = () => {
    return(
        <>
            <ul className="flex justify-between">
                <li className="flex flex-col justify-center items-start w-1/2 p-8">
                    <h1 className='text-4xl text-blue-800 font-segoe-medium mx-auto'> Personal Project </h1>
                    <a href="https://github.com/nicosanc/PyTorch-Img-Classifier.git" className='bg-indigo-700 text-white rounded py-2 px-3 mx-auto mt-10 opacity-90' > Image Classifier </a>
                    <a href="https://github.com/nicosanc/simple_notifs.git" className='bg-indigo-700 text-white rounded py-2 px-3 mx-auto mt-10 opacity-90' > Simple_Notifs: Pypi library </a>
                </li>
                <li li className="flex flex-col justify-center w-1/2 p-8 items-end">
                 <p className='text-center text-indigo-700 text-xl font-semibold-segoe'>
                    I developed an multi-class image classifier using a PyTorch 2-D Convolutional Neural Network. CNNs are especially effective at recognizing features in images by breaking them down
                    into multiple layers, where they&apos;re analyzed at the pixel level. I plan on expanding this project by training it with new datasets containing similar classes to improve the model&apos;s generalization, and 
                    eventually developing an API where my model&apos;s parameters can be fetched to recreate it. 
                    </p>
                    <p className='text-center text-indigo-700 text-xl font-segoe mt-5'>
                        I built and published my own python library as part of a side project I am currently contributing to. The python library takes in any datetime object, converts it into an Arrow (a versatile python
                        datetime library) object, converts the new object to UTC timezone, then outputs the difference in time. The specific use case for this functionality is to produce simple, human readable time differences such as &quot;1h&quot; or &quot;25d&quot; for one hour ago and 25 days ago, respectively.
                        The project I created it for is using its functionality to show how long a notification has been pending. I plan on expanding this library&apos;s methods as I discover more helpful use cases.
                    </p>
                </li>
            </ul>
        </>
    )
}

export default PersonalProject;