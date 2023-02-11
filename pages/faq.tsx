import React, {useState} from 'react'
import { type NextPage } from 'next';
import  {BiSearch} from 'react-icons/bi'
import {RxDoubleArrowDown, RxDoubleArrowUp} from "react-icons/rx"
const faq: NextPage = () => {
	const set = [
		{ 
			"id": "1", 
			"Question" : "What is Hackathon?",
			"Answer": "A hackathon is a weekend-long event where students form teams and collaborate on a software or hardware project to learn new skills, create social impact, participate in Partners challenges, and innovate new solutions! There’s also plenty of time for networking with partners, meeting other hackers, and attending workshops and mini events! In short, it’s a weekend dedicated to collaboration, technology, and community :)",
		},
		{
			"id": "2", 
			"Question" : "Who can participate?",
			"Answer":  "Any university, college, or vocational student 18 or older can attend!",
		},
	
		{
			"id": "3", 
			"Question" : "How Much does it cost?",
			"Answer":   "RowdyHacks is completely FREE to attend, thanks to our awesome partners. You don't have to worry about a thing -- we'll provide meals, snacks, t-shirts, swag, prizes, and more all weekend long!",
		},
	
		{
			"id": "4", 
			"Question" :  "What if I dont know how to code?",
			"Answer":   "No worries! RowdyHacks is for everyone from all coding and non-coding backgrounds! We will have plenty of mentors, resources, and workshops to help you learn throughout the event."  
		
		},
		{ 
			"id": "5", 
			"Question" : "How Big the Team Can Be?",
			"Answer": "Teams can consist of up to 4 students! We encourage hackers to participate as part of a team. Don't have a team? No worries, we will have an opportunity before the event for you to meet other hackers and form teams!",
		},
		{
			"id": "6", 
			"Question" : "How Long This Hackathon?",
			"Answer":  "This year RowdyHacks will be a 36-hour event, 24 hours of which will be dedicated to hacking",
		},
	
		{
			"id": "7", 
			"Question" : "Can I Work On Previous Project?",
			"Answer":   "If you plan to submit your project to any of our competition tracks, your project must be started from scratch when hacking begins the weekend of the event. However, you can start brainstorming your ideas or learning new skills you might need for your project prior to the event",
		},
		{
			"id": "8", 
			"Question" :  "What If I Am Not UTSA Student?",
			"Answer":   "Not a UTSA student? No problem! RowdyHacks is open to ANY college, university, or vocational student over 18 years old. We're so excited to see students from all over collaborating and innovating together at this year's event!!"  
		
		},
		{
			"id": "9", 
			"Question" :  "What Will I Need?",
			"Answer":   "RowdyHacks is a weekend-long event, and we want to make sure you’re prepared!\nWe encourage you to bring a change of clothes and any hygiene items you might need. With COVID still ongoing, we also encourage our hackers to mask up during the event.\n Any hardware you plan on using for the project -- your laptop, charger, portable mouse, phone, Raspberry Pi, VR headset, robots, etc.\n While we cannot designate a sleeping area (per university rules), we also can’t stop you from napping! Since our event is overnight, feel free to bring a pillow and blanket and get comfy.\nWhile we will be providing meals, drinks, and snacks, you’re more than welcome to bring any snacks or drinks you’d like to enjoy. There will also be water bottle fill-up stations, so feel free to bring a reusable water bottle!"  
		
		},
		{
			"id": "10", 
			"Question" :  "What Can My Project Be?",
			"Answer":   "Anything! You can make a new social media website, a simple weather app, a sentimental analysis tool for tweets, a game... anything you can imagine, you can create.\n Your team can come prepared with an idea or come up with one on the spot. We’ll have workshops, resources, and mentors to help you out with your project as well!"  
		},
		{
			"id": "11", 
			"Question" : "What Competition Tracks Will Be Offered This Year",
			"Answer":  "Hackers can submit their projects to either the Learners Track (geared towards those who are in intro CS classes or those who haven't coded before) or the General Track (for those with moderate to advanced skills). In addition to submitting projects to a competition track, hackers can also submit their project for Best Retro Hack, Best Hardware Hack, Cybersecurity, or Partners Challenge prizes.",
		},
		{
			"id": "12", 
			"Question" : "How Much It Cost To Participate?",
			"Answer":  "RowdyHacks is completely FREE to attend, thanks to our awesome partners. You don't have to worry about a thing -- we'll provide meals, snacks, t-shirts, swag, prizes, and more all weekend long!",
		},
	
	]
	
	
const [click, setClick] = useState(false)
   

    const [openIndex, setOpenIndex] = useState(null)
    const [text, setText] = useState("")
    const getText = (e: { target: { innerText: React.SetStateAction<string>; }; }) =>{
        setText(e.target.innerText)
    }
    const handleToggle = (index: number ) => {
        setOpenIndex(index === openIndex ? null : index);
       
      };
	  
      function clear(){
        setText("")
        handleToggle(null)
      }
    function clickArrow(){
        setClick(!click)
       
    }
	return (
		<div className='absolute top-0 min-h-screen w-full bg-[url("https://static.rowdyhacks.org/img/profiles/mountainbg.svg")] bg-cover bg-fixed '>
			<div className = "mx-auto  mt-[10em] items-center text-white flex flex-col justify-between  w-[60%] md:w-[50%] h-[400%]">
			<p className= "tracking-wide font-permanent-marker">RowdyHacks</p>
			
			<h1 className= " ml-3 md:ml-0 md:text-[3rem] text-[1.75rem] font-poppins font-black"><span className="text-[1.25rem] md:text-[3rem]">Frequently</span> Asked Questions</h1>
			
			<p className= "md:text-[1.5rem] text-[0.75rem] font-permanent-marker">Have a question? We are here to help</p>
			</div>
			<div className = " md:text-[2rem]  text-white w-[85%] pb-5 md:pb-1 md:w-[60%] mt-[2em] mx-auto h-[30px] border-b ">
               {text === "" ? 
               <div className="flex  items-start justify-between w-[100%]">
               <h1 className = "text-[1rem] md:text-[1.25rem]  text-light font-poppins">What can we help you with...........</h1> 
               </div>
               :  <h1 className = "text-[1rem] md:text-[1.25rem] text-light font-poppins">{text}</h1> }
            </div>
            {openIndex !== null && (
        <div className=" text-white w-[85%] md:w-2/3 mt-4 mx-auto bg-rh-deep-purple p-6 rounded-lg shadow-lg border border-rh-sunset">
          <p className="text-xl font-bold mb-4">{set[openIndex].Answer}</p>
          <button
            className="bg-rh-sunset text-white p-2 rounded"
            onClick={clear}
          >
            Close
          </button>
        </div>
      )}
            <div className = " w-[70%] md:w-[80%]  md:grid mt-7  md:w-[60%] mx-auto  md:grid-cols-2 md:gap-4">
                {set.map((s, index)=>(
                <div>               
                 
                 <div  key= {s.id} onClick ={()=> handleToggle(index)}>
                 <div className=" border border-rh-sunset rounded  bg-rh-sunset mb-4 p-4 flex gap-2">
                {openIndex !== index ?  <RxDoubleArrowDown size = {"25px"} className="mt-1 font-black" onClick={clickArrow}/>: <RxDoubleArrowUp size = {"25px"} className="mt-1 font-black" onClick={clickArrow}/>}
               
                 <h1 className= "text-[1rem]  md:text-[1.5rem] font-poppins" onClick={getText} >{s.Question}</h1>
                 </div>
                 </div>
                 
            </div>
            ))}     
         
            
            </div>
		</div>
	);
};

export default faq;