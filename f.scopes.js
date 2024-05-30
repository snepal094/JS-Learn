//scope= execution context
//scope: {}

/*
{
    let x=2;
}
console.log(x);
//dosen't print, cuz x is defined inside another scope, x isn't defined where clg can access it
*/

//parent<-->child

//global scope
//local scope
//block scope ==>let, const bata declare hune, block ma simit, child le parent chalauna payo but not vice versa
//function scope

//kei nalekhi define garey var huncha. var=old type, not used anymore. so, use let or const

{
  let x = 9;
  {
    //let x = 7;
    {
      console.log(x);
    }
  }
}
