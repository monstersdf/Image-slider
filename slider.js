
const lam = ["http://127.0.0.1:5501/PICTURES/p1.jpg"]
const photos = [ 
  "http://127.0.0.1:5501/PICTURES/p2.jpg", 
  "http://127.0.0.1:5501/PICTURES/p3.jpg",
  "http://127.0.0.1:5501/PICTURES/p4.jpg",
  "http://127.0.0.1:5501/PICTURES/p5.jpg"
  ]
  let slide = document.getElementById("slide");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  
  
  //set width and height of slides
  slide.style.width = "350px";
  slide.style.height = "250px";
  
  //set current index
  let i = 0;
  
  //set slide src to current index
  slide.src = lam[i];
  
  btn2.onclick = () => {
    //when btn2 is clicked
    i++;
    //add 1 to current index
    if (i > photos.length - 1) {
      //if current index passes last photo in array
      i = 0;
      //set index back to zero
    }
    slide.src = photos[i];
    //set slide to current index
  };
  
  btn1.onclick = () => {
    //when btn1 is clicked
    i--;
    //minus 1 from current index
    if (i < 0) {
      //if current index goes below zero
      i = photos.length - 1;
      //set index to the last photo in array
    }
    slide.src = photos[i];
    //display current photo to #slide
  };
  
  btn1.addEventListener("click", () => {
    slide.classList.add("transition");
  });
  //when btn1 is clicked add transition class to slide
  btn1.addEventListener("mouseup", () => {
    slide.classList.remove("transition");
  });
  //when btn1 is clicked remove transition class from slide
  btn2.addEventListener("click", () => {
    slide.classList.add("transition");
  });
  //when btn2 is clicked add transition class to slide
  btn2.addEventListener("mouseup", () => {
    slide.classList.remove("transition");
  });
  //when btn2 is clicked remove transition class from slide
  