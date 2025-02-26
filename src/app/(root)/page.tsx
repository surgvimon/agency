'use client'
import React from 'react'
// import Image from "next/image";

export default function Home() {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const sectionsRef = React.useRef<any[]>([]);
  const scrollRootRef = React.useRef<HTMLDivElement>(null);
  const headerLinksRef = React.useRef<HTMLDivElement[]>([]);
  const [prevYPosition, setPrevYPosition] = React.useState(0);
  const [direction, setDirection] = React.useState('up');



  const listLinks = [
    {href: '#about-us', label: "About us"},
    {href: '#the-flavours', label: "The flavours"},
    {href: '#get-in-touch', label: "Get in touch"},
  ];
  // const addToRefs = el => {
  //   if (el && !sectionsRef.current.includes(el)) {
  //     sectionsRef.current.push(el);
  //   }
  //  };
  

    const getTargetSection = (entry:any) => {
      const index = sectionsRef.current.findIndex((section:any) => section == entry.target)
      
      if (index >= sectionsRef.current.length - 1) {
        return entry.target
      } else {
        return sectionsRef.current[index + 1]
      }
    };

    const shouldUpdate = (entry:any) => {
      if (direction === 'down' && !entry.isIntersecting) {
          return true
      }

      if (direction === 'up' && entry.isIntersecting) {
          return true
      }
      
      return false
    }

    const updateColors = (target:any) => {
        const theme = target.dataset.section
        console.log("theme : ", theme)
        headerRef.current?.setAttribute('data-theme', theme)
    }

  const updateMarker = (target:any) => {
    const id = target.id
    
    if (!id) return
    
    let link = headerLinksRef.current.find((el:any) => {
        return el.getAttribute('href') === `#${id}`
    })
    
    link = link || headerLinksRef.current[0]
    
    const distanceFromLeft = link.getBoundingClientRect().left
    
    headerRef.current?.style.setProperty('--markerWidth', `${link.clientWidth}px`)
    headerRef.current?.style.setProperty('--markerLeft', `${distanceFromLeft}px`)
  }

  React.useEffect(() => {
    // console.log("H : ", headerRef.current?.offsetHeight)
    // console.log("H : ", sectionsRef.current[1]?.id)
    
    // console.log("scroll : ", (Number(scrollRootRef.current?.scrollTop) > prevYPosition))

    const options:any = {
        root: scrollRootRef,
        rootMargin: `${Number(headerRef.current?.offsetHeight) * -1}px`,
        threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {       
        if (Number(scrollRootRef.current?.scrollTop) > prevYPosition) {
          setDirection('down')
        } else {
          setDirection('up')
        }
        setPrevYPosition(Number(scrollRootRef.current?.scrollTop))
        
        const target = direction === 'down' ? getTargetSection(entry) : entry.target
        
        if (shouldUpdate(entry)) {
            updateColors(target)
            updateMarker(target)
        }
        
      }, options)
    });
    sectionsRef.current.forEach((section) => {
        observer.observe(section)
    })

}, []);


  return (
    <div ref={scrollRootRef} className="h-full scroller" data-scroller>
      <header ref={headerRef} data-header className="happy-header">
        <nav className="header__nav">
          <div className="header__left-content">
            <a className="happy-header__home-link" href="#home">
              <svg width="118" height="202" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.7 202.6">
                <path d="M117.7 58c-1.3-5.7-3.5-11-5.8-16.2-5.5-12.1-13-22.7-23.6-30.9-5.2-4-10.8-7.4-17.1-9.6C67.8.1 64.4-.2 60.8.3c-1.8.2-3.4.9-4.2 3.2.4.2.8.4 1.2.7.5.4.9.8 2.1 1.9-11.2-2.9-20.3-.1-28.9 5-9.7 5.8-17.2 13.7-22.6 23.6-3.7 6.8-5.9 14.1-7.3 21.7C-1.6 71.6.8 86 8 99.6c2.9 5.6 7 10.3 11.7 14.9-1.7 3.8-1.7 3.8-.8 7.2.6 2.2 1.1 4.3 1.8 6.5 6.9 23 15.8 45.3 25.2 67.3.3.7.7 1.5 1.1 2.2 3.3 5.8 9.3 6.6 13.9 1.6 1.5-1.6 2.8-3.5 4-5.4 2.8-4.4 5.6-8.9 8.3-13.5 7-11.7 13.2-23.8 17.6-36.7 3.1-8.8 5-17.9 4.1-27.3 0-.5 0-1 .1-2.3.4-.3 1.4-.9 2.2-1.6 8.2-7.4 14.3-16.4 18.1-26.8 3.2-8.9 4.5-18.1 2.4-27.7zm-14.6 13.5C99 87.7 90 100.1 74.4 107.1c-7.9 3.6-16.4 4.5-24.9 3.1-12.9-2.1-22.2-9.3-28.3-20.7-5.1-9.5-6.4-19.7-5.1-30.3 1.7-13.9 7.7-25.6 18.5-34.7 7.6-6.4 16.2-10.1 26.2-10.7.5 0 1-.1 1.4-.1 2.3 0 4.1-.8 5.1-3.1 22.9 14.7 30.6 27.6 35.9 49.9.8 3.6.8 7.4-.1 11z" />
                <path d="M55.9 99c-9.3-.9-17.9-5.7-23.5-15.2-.7-1.2-1.2-2.6-1.6-4-.6-2-.8-4.1-.2-6.1.4-1.6 1.2-3 3-3.4 1.6-.3 2.8.5 3.7 1.7l2.4 3c2.9 3.5 6.3 6.3 10.4 8.3 3.8 1.9 7.8 2.7 12.1 2 1.3-.2 2.5-.4 3.8-.6.8-.1 1.6-.2 2.4-.2 1.8 0 3.5.5 4.4 2.3.8 1.8.3 3.5-.9 4.9-3.8 4.6-8.4 7.4-16 7.3zM68.1 60.4c.1-3.9 1.1-6.8 4.4-8.4 3.1-1.5 6.8-.9 9.3 1.5 2.6 2.5 3.8 5.5 2.7 9.1-.9 3.1-2.8 5.3-6 6.2-4.5 1.3-8.8-1.1-10-5.7-.2-1-.3-2.1-.4-2.7zM43 57.6c-.8-.1-1.8-.2-2.7-.4-6.6-.9-7.7-8.5-4.4-12.5 2.6-3.1 7.2-3.8 10.8-1.6 3.6 2.2 5.2 6.6 3.7 10.3-1.1 2.9-3.8 4.4-7.4 4.2z" />
              </svg>
            </a>
          </div>
          <ul className="header__list">
            {listLinks.map((list:any) => (
              <li key={list.label}>
                <a 
                  ref={(el:any) => {
                    if (el && !headerLinksRef.current.includes(el)) {
                      headerLinksRef.current.push(el);
                    }
                  }}
                  href={list.href} 
                  data-link
                >
                  {list.label}
                </a>
              </li>
            ))}
            {/*             
              <li>
                <a href="#the-flavours" data-link>The flavours</a>
              </li>
              <li>
                <a href="#get-in-touch" data-link>Get in touch</a>
              </li> 
            */}
          </ul>
        </nav>
      </header>
      <section 
        ref={el => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }} 
        data-section="raspberry" 
        id="home" 
        className="bg-raspberry text-vanilla min-h-[100vh] relative"
      >
        <div className="max-w-[60rem] py-[5rem] grid grid-cols-2 mx-auto  translate-y-[20%]">
          {/* <div className="section__img">
            <Image
              fill
              sizes='(max-width:768px) 100vw, 50vw'
              src={`https://assets.codepen.io/85648/ice-creams-03.svg`}
              alt="drawing of three smiling ice cream scoops in a bowl"
              className="object-contain pr-8"
            />
          </div> */}
          <div className="section__content-col">
            <h1>Happy Face Ice Cream Parlour</h1>
            <p>A little ice cream parlour with big dreams.</p>
            <p>We pride ourselves on flavours beyond your wildest dreams, and customer service that’s out of this world!</p>
            <p>Order your favourite flavours online, or call us today to find out how we can make your special occasions extra delightful!</p>
            <a className="section__link" href="#0">Shop now</a>
          </div>
        </div>
      </section>

      <section 
        ref={el => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }} 
        data-section="mint" 
        id="about-us" 
        className="bg-mint text-chocolate min-h-[100vh]"
      >
        <div className="max-w-[60rem] py-[5rem] grid grid-cols-2  mx-auto translate-y-[20%]">
          {/* <div className="section__img-col">
            <Image
              fill
              sizes='(max-width:768px) 100vw, 50vw'
              src={`https://assets.codepen.io/85648/ice-creams-04.svg`}
              alt="smiling scoop of ice cream with drips"
              className="object-contain pr-8"
            />
          </div> */}
          <div className="section__content-col">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>

      <section 
        ref={el => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }} 
        data-section="vanilla" 
        id="the-flavours" 
        className="bg-vanilla text-chocolate min-h-[100vh]"
      >
        <div className="max-w-[60rem] py-[5rem] grid grid-cols-2  mx-auto translate-y-[40%]">
          {/*
          <div className="section__img-col">
             <Image
              fill
              sizes='(max-width:768px) 100vw, 50vw'
              src={`https://assets.codepen.io/85648/ice-creams-01.svg`}
              alt="three happy ice creams"
              className="object-contain pr-8"
            /> 
          </div>
          */}
          <div className="section__content-col">
            <h2>The flavours</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>

      <section 
        ref={el => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }} 
        data-section="chocolate" 
        id="get-in-touch" 
        className="bg-chocolate text-vanilla min-h-[100vh]"
      >
        <div className="max-w-[60rem] py-[5rem] grid grid-cols-2  mx-auto translate-y-[50%]">
          {/* <div className="section__img-col">
            <Image
              fill
              sizes='(max-width:768px) 100vw, 50vw'
              src={`https://assets.codepen.io/85648/ice-creams-02.svg`}
              alt="spoon with drips"
              className="section__img object-contain pr-8"
            />
          </div> */}
          <div className="section__content-col">
            <h2 data-section-title>Get in touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section> 

    </div>
  );
}
