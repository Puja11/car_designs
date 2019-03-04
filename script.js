var carData=[
	{carColor:"#f10c34",colorName:"Red",imgScr:"./assets/red.jpg"},
	{carColor:"#e6e6e8",colorName:"Silver",imgScr:"./assets/silver.jpg"},
	{carColor:"#cac8c8",colorName:"Grey",imgScr:"./assets/grey.jpg"},
	{carColor:"#1b0df7",colorName:"Blue",imgScr:"./assets/blue.jpg"}
];
 var ratingData=[
	{category:"Critic's Rating",percentage:"87"},
	{category:"Performance",percentage:"64"},
	{category:"Interior",percentage:"90"},
	{category:"Safety",percentage:"44"},
	{category:"reliability",percentage:"52"}
 ];
 var moreCar=[
	{rating:"8.2",name:"X12 Lema",imgScr:"./assets/red.jpg"},
	{rating:"8.9",name:"HN Tiora",imgScr:"./assets/silver.jpg"},
	{rating:"7.2",name:"Heldan Astra",imgScr:"./assets/grey.jpg"},
	{rating:"3.2",name:"Hyundai i40",imgScr:"./assets/blue.jpg"}
];
 $(document).ready(function(){
	var showImg='<img src="'+carData[0].imgScr+'" class="imgCar">';
	$(".showImage").append(showImg);
	
	$(".colorCar").html('<span style="color:'+carData[0].colorName+'">'+carData[0].colorName+'</span>');
	var colorDiv;
	$.each(carData,function(index,item){
		colorDiv='<div id="'+item.colorName+'Box" class="boxSize" style="background-color:'+item.carColor+'"></div>';
		$(".colorOption").append(colorDiv);
	});
	
	var ratingDesign;
	$.each(ratingData,function(index,item){
		ratingDesign='<p>'+item.category+'</p>'+
					'<div class="ratingBar"><div class="ratingInner" style="width:'+item.percentage+'%"></div></div>'+
					'<span class="rate">'+item.percentage+'</span>';
		$(".rating").append(ratingDesign);
	});
	
	var moreCarDetail;
	$.each(moreCar,function(index,item){
	
		moreCarDetail='<div class="imageTiles">'+
						'<img class="smallImg" src="'+item.imgScr +'">'+
						'<p>'+item.name+'</p>'+
						'<div class="footer">'+item.rating+'</div>'+
						'</div>';
		$(".carOption").append(moreCarDetail);
	});
	
	$(".boxSize").click(function(){
		$(".boxSize").removeClass("selected");
		$("#"+this.id).addClass("selected");
		var carColor=(this.id).replace("Box","");
		var filterData=$.grep(carData,function(data,i){
			return (carData[i].colorName==carColor);
		});
		
		showImg='<img src="'+filterData[0].imgScr+'" class="imgCar">';
		$(".imgCar").remove();
		$(".showImage").append(showImg);
		$(".colorCar").html('<span style="color:'+filterData[0].colorName+'">'+filterData[0].colorName+'</span>');
	});
	
	$("#"+carData[0].colorName+"Box").addClass("selected");
	
		
 });
 