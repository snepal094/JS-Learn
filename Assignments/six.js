/*Find grades for student marks. 
If the mark is greater than or equal to 90, the grade is “A plus”.
If the mark is greater than or equal to 80,the grade is “A”.
Grade “B”  from marks greater than equal to 70.
“C” for marks greater than equal to 60.  
“F” for marks  less than 60. */

marks = 55;

marks >= 90
  ? console.log("Grade: A+")
  : marks >= 80
  ? console.log("Grade: A")
  : marks >= 70
  ? console.log("Grade: B")
  : marks >= 60
  ? console.log("Grade: C")
  : console.log("Grade: F");
