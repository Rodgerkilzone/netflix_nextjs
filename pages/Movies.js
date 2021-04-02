import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { ReactVideo } from "reactjs-media";
  const Logo = () => {
      return (
          <div id="logo" className="Logo">
              <svg version="1.1" width="300" height="81.386726" id="svg3262">
                      <g transform="translate(-384.28572,-428.81172)" id="layer1">
                          <g transform="matrix(2.5445375,0,0,2.5445375,1157.1714,-1457.8678)" id="g3235">
                              <path d="m -203.09972,771.41415 c 1.6425,0.15875 3.2825,0.33 4.92,0.5075 l 3.615,-8.92625 3.43625,9.74875 c 1.76375,0.22125 3.525,0.4525 5.2825,0.695 l -6.02375,-17.09625 6.02625,-14.88 -5.10375,0 -0.0525,0.0725 -3.255,8.03875 -2.8575,-8.11125 -5.03875,0 5.2025,14.7625 -6.15125,15.18875 z" id="path3015" style={{fill:'#b81d24', fillOpacity: 1, fillRule:'nonzero', stroke:'none'}} />
                              <path d="m -206.91147,771.06478 0,-29.60125 -5.0375,0 0,29.18625 c 1.68125,0.12875 3.36125,0.26875 5.0375,0.415" id="path3019" style={{fill:'#b81d24', fillOpacity: 1, fillRule:'nonzero', stroke:'none'}} />
                              <path d="m -244.7486,769.4089 c 1.36,0 2.7175,0.01 4.07375,0.0213 l 0,-10.875 6.05125,0 0,-4.63125 -6.05125,0 0,-7.825 6.96875,0 0,-4.63625 -12.02625,0 0,27.95 c 0.3275,0 0.655,-0.004 0.98375,-0.004" id="path3023" style={{fill:'#b81d24', fillOpacity: 1, fillRule:'nonzero', stroke:'none'}} />
                              <path d="m -260.3881,769.69191 c 1.6775,-0.06 3.3575,-0.11 5.04,-0.15125 l 0,-23.44125 4.7075,0 0,-4.63625 -14.45625,0 0,4.63625 4.70875,0 0,23.5925 z" id="path3035" style={{fill:'#b81d24', fillOpacity: 1, fillRule:'nonzero', stroke:'none'}} />
                              <path d="m -298.91059,772.81378 0,-17.63625 5.96375,16.92375 c 1.83375,-0.20625 3.67125,-0.4 5.5125,-0.5825 l 0,-30.055 -4.8325,0 0,18.2675 -6.43625,-18.2675 -0.2075,0 -4.8325,0 0,31.98375 0.03,0 c 1.5975,-0.22125 3.19875,-0.43125 4.8025,-0.63375" id="path3039" style={{fill:'#b81d24', fillOpacity: 1, fillRule:'nonzero', stroke:'none'}} />
                              <path d="m -269.95297,746.09903 0,-4.63625 -12.0275,0 0,24.9125 0,4.6375 0,0.004 c 3.99125,-0.345 7.99625,-0.63375 12.0175,-0.86875 l 0,-0.004 0,-1.33625 0,-3.3 c -2.325,0.135 -4.645,0.29125 -6.96,0.46375 l 0,-7.415 6.05125,0 0,-4.63375 -6.05125,0 0,-7.82375 6.97,0 z" id="path3051" style={{fill:'#b81d24', fillOpacity: 1, fillRule:'nonzero', stroke:'none'}} />
                              <path d="m -223.72272,765.2864 0,-23.82375 -5.05875,0 0,23.605 0,4.63625 0,0.005 c 4.02375,0.1475 8.0325,0.35375 12.0275,0.6125 l 0,-0.006 0,-1.4975 0,-3.13875 c -2.31875,-0.15 -4.64125,-0.28 -6.96875,-0.3925" id="path3055" style={{fill:'#b81d24', fillOpacity: 1, fillRule:'nonzero', stroke:'none'}} />
                          </g>
                      </g>
              </svg>
          </div>   
    );
  }

export default function App() {
  const [movies, setMovies] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  useEffect(async () => {
    const result = await axios(
      '/api/airtable', { headers: { accept: "Accept: application/json" } }
    );
 
    setMovies(result.data);
console.log(result.data)
  },[]);
 
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            {/* onKeyUp={this.handleKeyUp} onChange={this.handleChange}value={this.state.searchTerm} */}
            <input  type="search" placeholder="Search for a title..."  />
          </div>
          <Upload />
        </header>
        {videoUrl=="" ?<Hero />:
   <div >
      <ReactVideo
   
                src={videoUrl}
                poster={coverUrl}
                primaryColor="red"
          
            />
   </div>}
   
     <h2 style={{color:'white',marign:10}}>
       Movie list
      </h2>
  <div style={{margin:10,display:"flex",flexDirection:'row',flexWrap:'wrap'}}>
   
{movies.map(movie => {
      return(
       <div className="Item"
        onClick={()=>{
          setVideoUrl("")
          setTimeout(()=>{
            setVideoUrl(movie.Videolink) 
            setCoverUrl(movie.Thumbnail)
          },1000)
         
        }}
        style={{   backgroundImage: `url(`+movie.Thumbnail+`)`,margin:5}} >
        <div className="overlay" >
          <div className="title">{movie.Name}</div>
          <div className="rating">{movie.Tag}</div>

      
        </div>
      </div>
      );
    })}  </div>
     
      </div>
   ); 
  
};

// Navigation 

  const Navigation = () => {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>My List</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    ); 
  
}

// User Profile
const Progress = ({percentage}) => {
	return (
		<div className="progress">
			<div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      >
      { percentage }%
      </div>
		</div>
	);
};
  function Upload(){
    const [showModal, setShowModal] = useState(false);
    return (
      <div className="UserProfile" >
        <div className="User">
          <div className="name"   onClick={()=>{
  setShowModal(true)
}} style={{color:"white"}}>Upload Movie</div>

    {showModal &&    <div id="modal" style={{width:'100vw',height:'100vh',position:"fixed",top:0,left:0,backgroundColor:'rgba(0,0,0,0.7)',display:'flex',justifyContent:'center',alignItems:"center"}}>
<div style={{width:500,backgroundColor:'white',borderRadius:5,color:'black',padding:20,position:"relative"}}>
<h3>Upload Movie</h3>
<div onClick={()=>{
  setShowModal(false)
}} style={{fontSize:'30px',float:"right",position:"absolute",top:0,right:10,cursor:'pointer'}}>&#215;</div>

<UploadForm 

/>


    
</div>
       </div>}
        </div>
      </div> 
    );
  
}






const UploadForm =()=>{
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [file_2, setFile_2] = useState('');
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');



  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
    formData.append('cover_photo', file);

    const formData_2 = new FormData();
    formData_2.append('video', file_2);

    try {

      //UPLOADING THUMBNAIL COVER PHOTO TO CLOUDINARY
      const res = await axios.post('/api/thumbnail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log(res.data.url);

       //UPLOADING VIDEO TO CLOUDINARY
      const res_2 = await axios.post('/api/videos', formData_2, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });
      console.log(res_2.data.url);


       //UPLOADING MOVIE DATA TO AIRTABLE
      axios.post('/api/airtable', {
        "Imgid":"2323",
        "Name":name,
        "Tag":tag,
        "Videolink":res_2.data.url,
        "Thumbnail":res.data.url,
      })
      .then(function (response) {
        console.log(response);
        window.location.reload(false);
      })
      setLoading(false);
      setMessage('File uploaded');
    } catch(error) {
      setLoading(false);
        setMessage(JSON.stringify(error));
    
    }
  }

 


  return (
 
<div>
  
<form onSubmit={onSubmit}>
{loading &&    <div id="modal" style={{width:'100vw',color:'white',height:'100vh',position:"fixed",top:0,left:0,backgroundColor:'rgba(0,0,0,0.7)',display:'flex',justifyContent:'center',alignItems:"center"}}>
  Loading...
  </div>}
  <div className="custom-file mb-4">
  <input required type="text" onChange={(e)=>{setName(e.target.value);}} className="input" placeholder="Movie name" />
<br/>
<input required  type="text" className="input" onChange={(e)=>{setTag(e.target.value);}} placeholder="Category"/>
  <br/>
  <label>Cover photo</label>
  <br/>
    
        <input
          type="file"
          className="custom-file-input"
          id="customFile"
          required
          onChange={(e)=>{setFile(e.target.files[0]);}}
        />
      <br/> <br/>
  <label>Movie file</label>
  <br/>
     
        <input
          type="file"
          className="custom-file-input"
          id="customFile_2"
          required
          onChange={(e)=>{setFile_2(e.target.files[0]);}}
        />  
     
      </div>

      <Progress percentage={ uploadPercentage } />

      <input
        type="submit"
        value="Upload"
        r
        className="btn btn-primary btn-block mt-4"
      />
      {message}
    </form>
    </div>
  );

}




  const Hero = () => {
  return (
    <div
    className="banner"
    style={{
      // background: CoverageMap,
      backgroundImage: `url("https://img1.looper.com/img/gallery/easter-eggs-in-the-flash-only-real-fans-noticed/intro-1576603048.jpg")`,
      backgroundPosition: "center center",
      backgroundSize:'cover',
      position:'relative'
    }}
  >
    <div className="banner__contents">
      <h1 className="banner__title">
       The Flash
      </h1>
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>

      <h1 className="banner__description">
        The flashpoint 
      </h1>
    </div>
    <div className="banner--fadeBottom" style={{position:'absolute',bottom:0}}></div>
  </div>
  );

}


