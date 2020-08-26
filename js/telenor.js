function recall () {
  var phno =
   document.getElementById("phno").value;
   console.log(phno);

// function mm2en () {
//   var nums = { '၀':'0','၁':'1','၂':'2','၃':'3','၄':'4','၅':'5','၆':'6','၇':'7','၈':'8','၉':'9'};
//   return num.replace(/([၀-၉])/g, function(s,key){
//     return nums[key] || s;
//   });
// }

   if(phno == '[၀-၉၉၉၉၉၉၉၉၉၉]'){
    console.log(phno);
    // mm2en(phno);
   }
   // function mm2en(num){
   //  var nums = { ''}
   // }
  if(phno > 9999999999){
      document
      .getElementById("error1")
      .textContent="ဖုန်းနံပါတ်ပိုနေသည်"
    }
  else if(phno > 0 && phno < 9999999999){
    
    window.open('tel:*1*'+phno+'#');
    document
      .getElementById("error1")
      .textContent=""
  }

  else if(phno==="") {
    console.log("reenter");
    document
      .getElementById("error1")
      .textContent="ဖုန်းနံပါတ်ထည့်ပါ"
  }
  else if(isNaN(phno)){
    console.log("not a number");
    document
      .getElementById("error1")
      .textContent="ဖုန်းနံပါတ်သာထည့်ပါ"
  }
}
// function exchange () {
//   var phno1 =
//    document.getElementById("phno1").value;
//    console.log(phno1);
//   var amount =
//     document.getElementById("amount").value;
//     console.log(amount);
//   if(phno1 > 9999999999){
//       document
//       .getElementById("error2")
//       .textContent="ဖုန်းနံပါတ်ပိုနေသည်"
//     }
//   else if(phno1 > 0 && phno1 < 9999999999 && amount > 0){
    
//     window.open('tel:*223*'+amount+'*'+phno1+'#');
//     document
//       .getElementById("error2")
//       .textContent=""
//   }
//   else if(phno1==="") {
//     console.log("reenter");
//     document
//       .getElementById("error2")
//       .textContent="ဖုန်းနံပါတ်ထည့်ပါ"
//   }
//   else if(amount==="") {
//     console.log("reenter");
//     document
//       .getElementById("error2")
//       .textContent="ပမာဏထည့်ပါ"
//   }
//   else if(isNaN(phno1)){
//     console.log("not a number");
//     document
//       .getElementById("error2")
//       .textContent="ဖုန်းနံပါတ်သာထည့်ပါ"
//   }

