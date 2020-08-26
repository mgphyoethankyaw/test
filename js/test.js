function mm2en () {
	var phno =
   document.getElementById("phno").value;
   console.log(phno);
	var nums = { '၀':'0','၁':'1','၂':'2','၃':'3','၄':'4','၅':'5','၆':'6','၇':'7','၈':'8','၉':'9'};
	return phno.replace(/([၀-၉])/g, function(s,key){
		return nums[key] || s;
	});
	console.log(phno)
}
