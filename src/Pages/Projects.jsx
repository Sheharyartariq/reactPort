import React from 'react'

const Projects = () => {
  return (
    <>   
    <div className="project" id='#projects'>
      <p>These are some of my projects</p> 
      <div className='card-items'>
      <div className="card">
        <a href="https://naruto-theme.netlify.app/" target='_blank'><img src="../banner.jpg" alt="pro-img" />
          <h5 className="card-title" height='400px' width='400px'>Resume Site</h5></a>
        </div>
        <div className="card">
        <a href="https://bgremove66.netlify.app/" target='_blank'><img src="../bgremove.png" alt="pro-img" />
          <h5 className="card-title">BG Remove</h5></a>
        </div>
        <div className="card">
        <a href="https://bgchanger66.netlify.app/" target='_blank'><img src="../bgchanger.png" alt="pro-img" />
          <h5 className="card-title">BG Changer</h5></a>
        </div>
        <div className="card">
        <a href="https://todo66.netlify.app/" target='_blank'><img src="../todo.jpg" alt="pro-img" />
          <h5 className="card-title">Todo List</h5></a>
        </div>
        {/* <div className="card">
        <a href="#"><img src="../lale.jpeg" alt="pro-img" /></a>
          <h5 className="card-title">BG Changer</h5>
        </div> */}
      </div>
        
    </div>
    </>

  )
}

export default Projects
