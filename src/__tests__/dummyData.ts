import {Intern} from '../model/Intern';
import profilePic from '../resources/profilePicture.jpeg'

let amonte = new Intern(
    "Amonte",
    "Just a regular Joe named Amonte.",
    "Intern Lead",
    "https://cdn.ebaumsworld.com/mediaFiles/picture/730195/86187705.jpg",
    new Date("1/1/21")
  );
  let sanjana = new Intern(
    "Sanjana",
    "Sophomore at UT Austin",
    "Backend Web/Intern Lead",
    "https://picjumbo.com/wp-content/uploads/free-stock-photos-san-francisco-1080x720.jpg",
    new Date("8/21/20")
  );
  let shayan = new Intern(
    "Shayan",
    "may the force be with you.",
    "Frontend Web/Intern Lead",
    "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    new Date("9/8/20")
  );
  
  let henry = new Intern(
    "Henry",
    "From New York",
    "Backend Web Intern",
    "https://www.history.com/.image/t_share/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg",
    new Date("9/1/20"));
  
  
  let sonia = new Intern(
    "Sonia",
    "Rising Sophomore at UW",
    "Intern (Web/Mobile Dev)",
    "https://cdn.pixabay.com/photo/2015/07/17/18/01/portland-bill-849583_960_720.jpg",
    new Date("9/25/20")
  );
  
  let disha = new Intern(
    "Disha",
    "Believe in yourself",
    "Intern (Mobile Developer)",
    "https://wallpaperaccess.com/full/142733.jpg",
    new Date("8/30/20")
  );
  let adil = new Intern(
    "Adil ",
    "Rising Junior at UMB",
    "Intern (Web/Mobile Dev)",
    "https://www.cloudcms.com/images/quickstarts/react/react.df70b005.png",
    new Date("7/20/20")
  );
  
  let kyle = new Intern(
    "Kyle",
    "Rising Sophomore at Grinnell College",
    "Intern (Web/Mobile Dev)",
    "https://www.psdstack.com/wp-content/uploads/2016/10/featured-copyright-free-mages.jpg",
    new Date("8/20/20")
  );
  
  let luis = new Intern(
    "Luis",
    "Senior at George Mason University",
    "Intern (FrontEnd Web)",
    "https://i.pinimg.com/600x315/88/5b/7b/885b7b783181234c51ea17ec48a02506.jpg",
    new Date("8/30/20")
  );

  const Interns = {amonte:amonte, luis:luis, kyle:kyle,adil:adil, disha:disha, sonia:sonia,henry:henry,shayan:shayan,sanjana:sanjana};



  let kyleProfile = {
    firstName: "Kyle",
    lastName: "Kobayashi",
    city: "Miami",
    state: "FL",
    country: "US",
    profileImage:profilePic
  };
  
  let amonteProfile = {
    firstName: "Amonte",
    lastName: "Andrews",
    city: "St Petersburg",
    state: "FL",
    country: "US",
    profileImage:"https://cdn.ebaumsworld.com/mediaFiles/picture/730195/86187705.jpg"
  };

  let Profiles = {amonte:amonteProfile, kyle:kyleProfile};
  export {Interns, Profiles};


  // describe("Placeholder for dummy data", () => {
  //   it("Is a placeholder", () =>{});

  // } );
