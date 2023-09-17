// the simple javascript
// select the menu bar buttens
function myTeb(i) {
 
  if (i === 'home') {
    document.getElementById('about-us').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('m1').style.display = 'block';
    document.getElementById('T').style.display = 'none';
    document.getElementById('f').style.display = 'none';
    document.getElementById('bmw').style.display = 'none';
    document.getElementById('bu').style.display = 'none';
    document.getElementById('rr').style.display = 'none';
    document.getElementById('cars').style.display = 'none';
  }

  else if (i === 'cars') {
    
    document.getElementById('cars').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    
  } 
  else if(i === 'about'){

    document.getElementById('about-us').style.display = 'block';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('T').style.display = 'none';
    document.getElementById('f').style.display = 'none';
    document.getElementById('bmw').style.display = 'none';
    document.getElementById('bu').style.display = 'none';
    document.getElementById('rr').style.display = 'none';
    document.getElementById('cars').style.display = 'none';
    
  } 
  else if(i === 'contactus'){
    
    document.getElementById('contactus').style.display = 'block';
    document.getElementById('about-us').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('T').style.display = 'none';
    document.getElementById('f').style.display = 'none';
    document.getElementById('bmw').style.display = 'none';
    document.getElementById('bu').style.display = 'none';
    document.getElementById('rr').style.display = 'none';
    document.getElementById('cars').style.display = 'none';
    
  } 
  return;
}

// select car on the car teb 

function myCar(i) {

  if (i === 'Mercedes') {
    document.getElementById('about-us').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('m1').style.display = 'block';
    document.getElementById('T').style.display = 'none';
    document.getElementById('f').style.display = 'none';
    document.getElementById('bmw').style.display = 'none';
    document.getElementById('bu').style.display = 'none';
    document.getElementById('rr').style.display = 'none';
    document.getElementById('cars').style.display = 'none';
  }
   else if (i === 'Tesla') {
    document.getElementById('about-us').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('T').style.display = 'block';
    document.getElementById('f').style.display = 'none';
    document.getElementById('bmw').style.display = 'none';
    document.getElementById('bu').style.display = 'none';
    document.getElementById('rr').style.display = 'none';
    document.getElementById('cars').style.display = 'none';
  } 
  else if(i === 'Frari'){
    document.getElementById('about-us').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('T').style.display = 'none';
    document.getElementById('f').style.display = 'block';
    document.getElementById('bmw').style.display = 'none';
    document.getElementById('bu').style.display = 'none';
    document.getElementById('rr').style.display = 'none';
    document.getElementById('cars').style.display = 'none';
  } 
  else if(i === 'Bmw'){
    document.getElementById('about-us').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('T').style.display = 'none';
    document.getElementById('f').style.display = 'none';
    document.getElementById('bmw').style.display = 'block';
    document.getElementById('bu').style.display = 'none';
    document.getElementById('rr').style.display = 'none';
    document.getElementById('cars').style.display = 'none';
  } 
  else if(i === 'Bugatti'){
    document.getElementById('about-us').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('T').style.display = 'none';
    document.getElementById('f').style.display = 'none';
    document.getElementById('bmw').style.display = 'none';
    document.getElementById('bu').style.display = 'block';
    document.getElementById('rr').style.display = 'none';
    document.getElementById('cars').style.display = 'none';
  } 
  else if(i === 'RR'){
    document.getElementById('about-us').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('T').style.display = 'none';
    document.getElementById('f').style.display = 'none';
    document.getElementById('bmw').style.display = 'none';
    document.getElementById('bu').style.display = 'none';
    document.getElementById('rr').style.display = 'block';
    document.getElementById('cars').style.display = 'none';
  } 
  return;
}