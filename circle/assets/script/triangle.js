$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("diameter").innerHTML = "";
         document.getElementById("circumference").innerHTML = "";
         document.getElementById("area").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius

         var diameter;  // floating point diameter
         var circumference;  // floating point diameter
         var area;  // floating point diameter
         var result; // displayable result

         // read in the legs as a string
         radius = document.getElementById("radius").value;
         circumference = document.getElementById("circumference").value;
         area = document.getElementById("area").value;

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 
         circumferencefp = parseFloat( circumference ); 
         areafp = parseFloat( area ); 

         // calculate the diameter
         diameter = calcDiameter(radiusfp);

         // calculate the circumference
         circumference = calcCircumference(radiusfp);

         // calculate the area
         area = calcArea(radiusfp);

         // display the diameter
         document.getElementById("diameter").innerHTML = diameter.toString();

         // display the circumference
         document.getElementById("circumference").innerHTML = circumference.toString();

         // display the diameter
         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (radius)
  // returns diameter of a circle
  // 2 times the radius
  {
      return 2 * radius;
  }

  function calcCircumference (radius)
  // returns diameter of a circle
  // 2 times pie times radius
  {
      return 2 * Math.PI * radius;
  }

  function calcArea (radius)
  // returns diameter of a circle
  // pie times radius times radius
  {
      return Math.PI * radius * radius;
  }
  
  function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
}
