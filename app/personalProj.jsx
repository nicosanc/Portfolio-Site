import React from "react";

const PersonalProject = () => {
    return(
        <>
            <h1 className='text-4xl text-slate-800 font-segoe flex justify-center mt-40 mb-10'> Personal Projects </h1>
            <ul className="flex justify-between">
                <li className="flex flex-col w-1/2 px-24">
                <p className='text-sky-700 text-xl font-semibold-segoe text-justify '>
                    I developed an multi-class image classifier using a PyTorch 2-D Convolutional Neural Network. CNNs are especially effective at recognizing features in images by breaking them down
                    into multiple layers, where they&apos;re analyzed at the pixel level. I plan on expanding this project by training it with new datasets containing similar classes to improve the model&apos;s generalization, and 
                    eventually developing an API where my model&apos;s parameters can be fetched to recreate it. 
                    </p>
                                 
                </li>
                <li className="flex flex-col w-1/2 px-24">
                    <p className='text-sky-700 text-xl font-segoe text-justify '>
                        I built and published my own python library as part of a side project I am currently contributing to. The python library takes in any datetime object, converts it into an Arrow (a versatile python
                        datetime library) object, converts the new object to UTC timezone, then outputs the difference in time. The specific use case for this functionality is to produce simple, human readable time differences such as &quot;1h&quot; or &quot;25d&quot; for one hour ago and 25 days ago, respectively.
                        The project I created it for is using its functionality to show how long a notification has been pending. I plan on expanding this library&apos;s methods as I discover more helpful use cases.
                    </p>
                </li>
            </ul>
            <ul className="flex justify-between">
                <li className="flex flex-col w-1/2 p-8">
                    <a href="https://github.com/nicosanc/PyTorch-Img-Classifier.git" className='bg-sky-500 text-white rounded py-2 px-3 mx-auto opacity-90 ' >https://github.com/nicosanc/PyTorch-Img-Classifier</a>      
                </li>
                <li className="flex flex-col w-1/2 p-8">
                    <a href="https://github.com/nicosanc/simple_notifs.git" className='bg-sky-500 text-white rounded py-2 px-3 mx-auto opacity-90' > https://github.com/nicosanc/simple_notifs</a>
                </li>

            </ul>
        </>
    )
}

export default PersonalProject;