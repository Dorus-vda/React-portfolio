import React, { useRef } from 'react';
import styles from './style';
import { Contact, Footer, Hero, Navbar, Projects} from './components';


function App(){
  const heroref = useRef(null)
  const contactref = useRef(null)
  const projectsref = useRef(null)
  function scrolltoref(index){
    const refarray = [heroref, projectsref, contactref]
    refarray[index].current.scrollIntoView()
  }
  return (<div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar scrolls={scrolltoref}></Navbar>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <div ref={heroref}><Hero></Hero></div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div ref={projectsref}><Projects></Projects></div>
          <div ref={contactref}><Contact></Contact></div>
          <Footer></Footer>
        </div>
      </div>
  </div>
)};

export default App