import React,{useState,useEffect} from "react";
import ReactPaginate from 'react-paginate';

import 'react-tabs/style/react-tabs.css';

//import { useNavigate } from "react-router-dom";



export default function Apidata() {
  //  let navigate = useNavigate();
  var[search] = useState('');
  var[selectedValue] = useState('');
  console.log(selectedValue)
    var[item,setItem] = useState([]);
   
    search = "George"
     
 useEffect(() =>{
     
       fetch (`https://reqres.in/api/users`)
           .then(res => res.json())
           .then(res => setItem(res.data))
    },[]);
 
  function handlePageClick(pageNumber)  {
      
      var page = pageNumber.selected + 1;
      
      fetch (`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(res => setItem(res.data)); 
  };

function handleSelect(){

}

  return (
      <div className="margin">
         
            <div className="container">
                <div className="tabs" defaultIndex={0} >
                  
                    <div>
                   
                    <div className="row ps-4 d-flex bg-primary text-white border-white">
                            <div className="col ms-3"><b>ID</b></div>
                            <div className="col me-5"><b>FIRST NAME</b></div>
                            <div className="col me-5"><b>LAST NAME</b></div>
                            <div className="col me-5"><b>EMAIL ID</b></div>
                            <div className="col"><b>AVATAR</b></div>
                        </div>

                    {item.map((items,k)=>
                      <a onClick={handleSelect}>
                         <div key={k} className="row ps-5 d-flex bg-light users" >
                              
                                <div className="col mt-4"> {items.id}</div>
                                <div className="col mt-4"> {items.first_name}</div>
                                <div className="col mt-4"> {items.last_name}</div>
                                <div className="col mt-4"> {items.email}</div>
                                <div className="col"><img src={items.avatar} className="rounded-circle w-50 h-65 ms-4" alt="avatar"/></div>      
                                     
                         </div>
                         </a>      
                          )}
                        
                         < ReactPaginate
                                previousLabel={"" }
                                nextLabel={ "" }
                                pageCount={2}
                                onPageChange={ handlePageClick } 
                                containerClassName={ "pagination justify-content-center mt-3" }
                                pageClassName={ "page-item" }
                                pageLinkClassName={"page-link"}
                                activeClassName={ "active" } 
                            />
                    </div>
                    <div>
                       
                    </div>
                </div>   

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">



  </div>
 
</div>
                
           
          
     );
 }

