import {useState, useEffect} from "react"
import axios from "axios"
import "./App.css"
function App() {

  // const [id,setid]= useState('')
  const [avatar,setavatar]=useState('')
  const [first_name,setfirst_name]=useState('')
  const [last_name,setlast_name]=useState('')
  const [email,setemail]= useState('')

  // second person
  // const [id1, setid1]= useState('')
  const [avatar1,setavatar1]=useState('')
  const [first_name1,setfirst_name1]=useState('')
  const [last_name1,setlast_name1]=useState('')
  const [email1,setemail1]= useState('')
  
  // Third
  const [avatar2,setavatar2]=useState('')
  const [first_name2,setfirst_name2]=useState('')
  const [last_name2,setlast_name2]=useState('')
  const [email2,setemail2]= useState('')

  // four
  const [avatar3,setavatar3]=useState('')
  const [first_name3,setfirst_name3]=useState('')
  const [last_name3,setlast_name3]=useState('')
  const [email3,setemail3]= useState('')

  // Five
  const [avatar4,setavatar4]=useState('')
  const [first_name4,setfirst_name4]=useState('')
  const [last_name4,setlast_name4]=useState('')
  const [email4,setemail4]= useState('')
   
  // six
  const [avatar5,setavatar5]=useState('')
  const [first_name5,setfirst_name5]=useState('')
  const [last_name5,setlast_name5]=useState('')
  const [email5,setemail5]= useState('')

  let url="https://reqres.in/api/users?page=1"  

  useEffect(() => {
    axios.get(url).then((response)=>{
      
      console.log(response.data.data);

      // setid(response.data.data[0].id)
      setavatar(response.data.data[0].avatar)
      setfirst_name(response.data.data[0].first_name)
      setlast_name(response.data.data[0].last_name)
      setemail(response.data.data[0].email)

      // second person
      // setid1(response.data.data[1].id)
      setavatar1(response.data.data[1].avatar)
      setfirst_name1(response.data.data[1].first_name)
      setlast_name1(response.data.data[1].last_name)
      setemail1(response.data.data[1].email)
      
      //Third
      setavatar2(response.data.data[2].avatar)
      setfirst_name2(response.data.data[2].first_name)
      setlast_name2(response.data.data[2].last_name)
      setemail2(response.data.data[2].email)
      
      //four
      setavatar3(response.data.data[3].avatar)
      setfirst_name3(response.data.data[3].first_name)
      setlast_name3(response.data.data[3].last_name)
      setemail3(response.data.data[3].email)
      
      //five
      setavatar4(response.data.data[4].avatar)
      setfirst_name4(response.data.data[4].first_name)
      setlast_name4(response.data.data[4].last_name)
      setemail4(response.data.data[4].email)
      
      setavatar5(response.data.data[5].avatar)
      setfirst_name5(response.data.data[5].first_name)
      setlast_name5(response.data.data[5].last_name)
      setemail5(response.data.data[5].email)
      
      
    })
    
  }, [])
  
  function fun(){
    
    // document.getElementById('id').innerHTML=id;
    document.getElementById('image').src = avatar;
    document.getElementById('name').innerHTML = first_name+" "+last_name;
    document.getElementById('email').innerHTML = email;
    

    // second person 
    // document.getElementById('id1').innerHTML=id1;
    document.getElementById('image1').src = avatar1;
    document.getElementById('name1').innerHTML = first_name1+" "+last_name1;
    document.getElementById('email1').innerHTML = email1;
    
    //third
    document.getElementById('image2').src = avatar2;
    document.getElementById('name2').innerHTML = first_name2+" "+last_name2;
    document.getElementById('email2').innerHTML = email2;
    

    //four
    document.getElementById('image3').src = avatar3;
    document.getElementById('name3').innerHTML = first_name3+" "+last_name3;
    document.getElementById('email3').innerHTML = email3;
    
    //five
    document.getElementById('image4').src = avatar4;
    document.getElementById('name4').innerHTML = first_name4+" "+last_name4;
    document.getElementById('email4').innerHTML = email4;
    
    //six
    document.getElementById('image5').src = avatar5;
    document.getElementById('name5').innerHTML = first_name5+" "+last_name5;
    document.getElementById('email5').innerHTML = email5;
    
    
  }

  
  return (
  
  <>
  <div className="body">

  <h1  className="h1">Lets Grow More Task 2</h1>
  
  <div align="center" className="nav">
            
            <ul class="menu" id="menuLinks">      
                <i class="fa fa-times" onclick="hideMenu()"></i>           
          
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a id="getdata" className="btn" align="center" onClick={fun}>Get Users</a></li>
            </ul>
            
        </div>
  
  <div  className="row">
  
  <div align="center" className="heading">
  <h1 id="id"></h1>
  <img id="image" className="image" src=""/>
  <h1 id="name" className="name"></h1>
  <h2 id="email" className="email"></h2>
  </div>


  {/* second person */}
  <div align="center" className="heading">
  <h1 id="id1"></h1>
  <img id="image1" src="" className="image"/>
  <h1 id="name1" className="name"></h1>
  <h2 id="email1" className="email"></h2>
  </div>

  <div align="center" className="heading">
  <h1 id="id2"></h1>
  <img id="image2" src="" className="image"/>
  <h1 id="name2" className="name"></h1>
  <h2 id="email2" className="email"></h2>
  </div>

  <div align="center" className="heading">
  <h1 id="id3"></h1>
  <img id="image3" src=""className="image"/>
  <h1 id="name3" className="name"></h1>
  <h2 id="email3" className="email"></h2>
  </div>
    </div>

  <div className="row2"> 
  <div align="center" className="heading">
  <h1 id="id4"></h1>
  <img id="image4" src="" className="image"/>
  <h1 id="name4" className="name"></h1>
  <h2 id="email4" className="email"></h2>
  </div>

  <div align="center" className="heading">
  <h1 id="id5"></h1>
  <img id="image5" src="" className="image"/>
  <h1 id="name5" className="name"></h1>
  <h2 id="email5" className="email"></h2>
  </div>
  </div>

  </div>
  </>  
  
  );
}

export default App;