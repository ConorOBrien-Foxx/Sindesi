function Sindesi(code){
	var trans = "";
	var enc={};
	for(var i=0;i<code.length;i++){
		switch(code[i]){
			case "R":
				trans+="r=";
			break;
			case ";":
				trans+="\n";
			break;
			default:
				if(code[i].toLowerCase()==code[i]){
					if(!enc[code[i]]){
						trans+=code[i]+"=";
						enc[code[i]]=true;
					}
				}
			break;
		}
	}
}
