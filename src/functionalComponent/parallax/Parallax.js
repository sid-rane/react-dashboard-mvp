import React, { useRef, useEffect, useState } from 'react'

function Parallax() {
    const [scroll, setScroll] = useState(0)
    const para1 = useRef()
    useEffect(() => {
        window.addEventListener("scroll", function () {
            let scrollPosition = window.pageYOffset
            setScroll(() => {
                para1.current.style.transform = `translateY(${scrollPosition * 0.5}px)`
                scrollPosition = 0
            })
        })
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div>
            <div className="paralex1" >
                <img src="https://image.freepik.com/free-vector/sports-style-background-banner-design-red-purple-colors_1017-23065.jpg" alt="" ref={para1} />
                <div className="scroll_down" >
                    <h1>SCROLL DOWN</h1>
                </div>
            </div>
            <div className="ss1 ">
                <h3>Parallax Demo</h3>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
            </div>
            <button onClick={scrollToTop}>
                go top
            </button>
        </div>
    )
}

export default Parallax
