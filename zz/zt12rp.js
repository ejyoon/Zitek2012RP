//FIXME: to-do list
// pairs of faces presented in a single trial are given in the format of ap1a, ap1b, etc
// need to randomize order in which conditions are shown (ap vs. dd vs. ds vs. ss)
// need to randomize order in which numbers are presented 
// need to randomize which side a, b are presented on
// 5 practice trials (pr)

// from weapon study:
// maybe get rid of the whole practice trials?
// or use that for 5 practice trials


//------------------

// FUNCTIONS

// function: showSlide
function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

// function: random
function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

Array.prototype.random = function() {
  return this[random(this.length)];
}

// function: shuffle
Array.prototype.shuffle = function() {
  var i = this.length, j, tempi, tempj;
  if ( i == 0 ) return false;
  while ( --i ) {
     j       = Math.floor( Math.random() * ( i + 1 ) );
     tempi   = this[i];
     tempj   = this[j];
     this[i] = tempj;
     this[j] = tempi;
  }
  return this;
}

//PRE-LOAD IMAGES
// By creating image object and setting source, images preload

// ***ztrp****
var images_ap = ["ap1a",	"ap1b",	"ap2a",	"ap2b",	"ap3a",	"ap3b",	"ap4a",	"ap4b",	"ap5a",	"ap5b",	"ap6a",	"ap6b",	"ap7a",	"ap7b",	"ap8a",	"ap8b",	"ap9a",	"ap9b",	"ap10a",	"ap10b",	"ap11a",	"ap11b",	"ap12a",	"ap12b",	"ap13a",	"ap13b",	"ap14a",	"ap14b",	"ap15a",	"ap15b",	"ap16a",	"ap16b",	"ap17a",	"ap17b",	"ap18a",	"ap18b",	"ap19a",	"ap19b",	"ap20a",	"ap20b",	"ap21a",	"ap21b",	"ap22a",	"ap22b",	"ap23a",	"ap23b",	"ap24a",	"ap24b",	"ap25a",	"ap25b",	"ap26a",	"ap26b",	"ap27a",	"ap27b",	"ap28a",	"ap28b",	"ap29a",	"ap29b",	"ap30a",	"ap30b",	"ap31a",	"ap31b",	"ap32a",	"ap32b"]	

var images_dd = ["dd1a",	"dd1b",	"dd2a",	"dd2b",	"dd3a",	"dd3b",	"dd4a",	"dd4b",	"dd5a",	"dd5b",	"dd6a",	"dd6b",	"dd7a",	"dd7b",	"dd8a",	"dd8b",	"dd9a",	"dd9b",	"dd10a",	"dd10b",	"dd11a",	"dd11b",	"dd12a",	"dd12b",	"dd13a",	"dd13b",	"dd14a",	"dd14b",	"dd15a",	"dd15b",	"dd16a",	"dd16b",	"dd17a",	"dd17b",	"dd18a",	"dd18b",	"dd19a",	"dd19b",	"dd20a",	"dd20b"]
    
var images_ds = ["ds1a",	"ds1b",	"ds2a",	"ds2b",	"ds3a",	"ds3b",	"ds4a",	"ds4b",	"ds5a",	"ds5b",	"ds6a",	"ds6b",	"ds7a",	"ds7b",	"ds8a",	"ds8b",	"ds9a",	"ds9b",	"ds10a",	"ds10b",	"ds11a",	"ds11b",	"ds12a",	"ds12b",	"ds13a",	"ds13b",	"ds14a",	"ds14b",	"ds15a",	"ds15b",	"ds16a",	"ds16b",	"ds17a",	"ds17b",	"ds18a",	"ds18b",	"ds19a",	"ds19b",	"ds20a",	"ds20b"]	
    
var images_pr = ["pr1a",	"pr1b",	"pr2a",	"pr2b",	"pr3a",	"pr3b",	"pr4a",	"pr4b",	"pr5a",	"pr5b"]
    
var images_ss = ["ss1a",	"ss1b",	"ss2a",	"ss2b",	"ss3a",	"ss3b",	"ss4a",	"ss4b",	"ss5a",	"ss5b",	"ss6a",	"ss6b",	"ss7a",	"ss7b",	"ss8a",	"ss8b",	"ss9a",	"ss9b",	"ss10a",	"ss10b",	"ss11a",	"ss11b",	"ss12a",	"ss12b",	"ss13a",	"ss13b",	"ss14a",	"ss14b",	"ss15a",	"ss15b",	"ss16a",	"ss16b",	"ss17a",	"ss17b",	"ss18a",	"ss18b",	"ss19a",	"ss19b",	"ss20a",	"ss20b"]

var images = new Array() 
for (i=0;i<32;i++) {//loop through images you want to use
    images[i] = new Image()
    images[i].src =  "faces/" + images_ap[i] + ".bmp"
    images[i] = new Image()
    images[i].src =  "faces/" + images_dd[i] + ".bmp"
    images[i] = new Image()
    images[i].src =  "faces/" + images_ds[i] + ".bmp"
    images[i] = new Image()
    images[i].src =  "faces/" + images_ss[i] + ".bmp"
    images[i] = new Image()
    images[i].src =  "faces/" + images_pr[i] + ".bmp"
}
     
// ------- PARAMETERS -------
// fixme: cond assignment

// ***ztrp***
var cond = random(2)+1;
    keyBindings = [
    {"h": "human", "a": "animal"}
],
    allPracticeTrialOrder = [],
    allTrialOrder = [],
    key1 = "A"; // fairKey from weapon
    key2 = "H";
    keyLeft = "animal";
    keyRight = "human";
    practiceTrialNum: 0;
    
allPrTrialFaces = ["pr1a",	"pr1b",	"pr2a",	"pr2b",	"pr3a",	"pr3b",	"pr4a",	"pr4b",	"pr5a",	"pr5b"],
allPrTrialNum = [0,1,2,3,4],
prTrialOrder_cond = ["pp", "pp", "pp", "ap", "ap"]   
prTrialAnswers = ["h","h","h","a","a"]    

allTrialFaces_ap = ["ap1a",	"ap1b",	"ap2a",	"ap2b",	"ap3a",	"ap3b",	"ap4a",	"ap4b",	"ap5a",	"ap5b",	"ap6a",	"ap6b",	"ap7a",	"ap7b",	"ap8a",	"ap8b",	"ap9a",	"ap9b",	"ap10a",	"ap10b",	"ap11a",	"ap11b",	"ap12a",	"ap12b",	"ap13a",	"ap13b",	"ap14a",	"ap14b",	"ap15a",	"ap15b",	"ap16a",	"ap16b",	"ap17a",	"ap17b",	"ap18a",	"ap18b",	"ap19a",	"ap19b",	"ap20a",	"ap20b",	"ap21a",	"ap21b",	"ap22a",	"ap22b",	"ap23a",	"ap23b",	"ap24a",	"ap24b",	"ap25a",	"ap25b",	"ap26a",	"ap26b",	"ap27a",	"ap27b",	"ap28a",	"ap28b",	"ap29a",	"ap29b",	"ap30a",	"ap30b",	"ap31a",	"ap31b",	"ap32a",	"ap32b"],	
allTrialFaces_apNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],

allTrialFaces_dd = ["dd1a",	"dd1b",	"dd2a",	"dd2b",	"dd3a",	"dd3b",	"dd4a",	"dd4b",	"dd5a",	"dd5b",	"dd6a",	"dd6b",	"dd7a",	"dd7b",	"dd8a",	"dd8b",	"dd9a",	"dd9b",	"dd10a",	"dd10b",	"dd11a",	"dd11b",	"dd12a",	"dd12b",	"dd13a",	"dd13b",	"dd14a",	"dd14b",	"dd15a",	"dd15b",	"dd16a",	"dd16b",	"dd17a",	"dd17b",	"dd18a",	"dd18b",	"dd19a",	"dd19b",	"dd20a",	"dd20b"],
allTrialFaces_ddNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    
allTrialFaces_ds = ["ds1a",	"ds1b",	"ds2a",	"ds2b",	"ds3a",	"ds3b",	"ds4a",	"ds4b",	"ds5a",	"ds5b",	"ds6a",	"ds6b",	"ds7a",	"ds7b",	"ds8a",	"ds8b",	"ds9a",	"ds9b",	"ds10a",	"ds10b",	"ds11a",	"ds11b",	"ds12a",	"ds12b",	"ds13a",	"ds13b",	"ds14a",	"ds14b",	"ds15a",	"ds15b",	"ds16a",	"ds16b",	"ds17a",	"ds17b",	"ds18a",	"ds18b",	"ds19a",	"ds19b",	"ds20a",	"ds20b"],
allTrialFaces_dsNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
    
allTrialFaces_ss = ["ss1a",	"ss1b",	"ss2a",	"ss2b",	"ss3a",	"ss3b",	"ss4a",	"ss4b",	"ss5a",	"ss5b",	"ss6a",	"ss6b",	"ss7a",	"ss7b",	"ss8a",	"ss8b",	"ss9a",	"ss9b",	"ss10a",	"ss10b",	"ss11a",	"ss11b",	"ss12a",	"ss12b",	"ss13a",	"ss13b",	"ss14a",	"ss14b",	"ss15a",	"ss15b",	"ss16a",	"ss16b",	"ss17a",	"ss17b",	"ss18a",	"ss18b",	"ss19a",	"ss19b",	"ss20a",	"ss20b"],
allTrialFaces_ssNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],

allTrialOrder_cond = ["ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap",	"ap", "dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd",	"dd", "ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds",	"ds", "ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss",	"ss"],
allTrialNum = [1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51,	52,	53,	54,	55,	56,	57,	58,	59,	60,	61,	62,	63,	64,	65,	66,	67,	68,	69,	70,	71,	72,	73,	74,	75,	76,	77,	78,	79,	80,	81,	82,	83,	84,	85,	86,	87,	88,	89,	90,	91,	92],

 myAllTrialOrder = allTrialOrder_cond.shuffle(),
   
 //   if (cond == 1) {
    myPrTrialOrder = allPrTrialFaces;
    myTrialOrder_ap = allTrialFaces_ap;
    myTrialOrder_dd = allTrialFaces_dd;
    myTrialOrder_ds = allTrialFaces_ds;
    myTrialOrder_ss = allTrialFaces_ss;
//    } else {
//    myPrTrialOrder = allPrTrialFaces.reverse();
//    myTrialOrder_ap = allTrialFaces_ap.reverse();
//    myTrialOrder_dd = allTrialFaces_dd.reverse();
//    myTrialOrder_ds = allTrialFaces_ds.reverse();
//    myTrialOrder_ss = allTrialFaces_ss.reverse();
//    };


//returns the image array
makeImageArray = function(imageArray) {
	var toSlice = imageArray.length;
	var imageArray = imageArray.slice(0, toSlice);
    return imageArray;
};        
        
// ----- EXPERIMENT -----
        
showSlide("instructions");

// VAR PRACTICE SETUP - FIXME
//***ztrp***

var practice = {
  trialNum: allPrTrialNum,
  trialCond: prTrialOrder_cond.shift(),
  keyBindings: keyBindings,
  faceInputLeft: "",
  faceInputRight: "",
  data: [],
  end: function() {
    showSlide("demographics"); // fixme!! just for trying
  },
  
  instructions: function() {
    showSlide("practiceInstructions");      
  },
    
  next: function() {
   var n = practice.trialNum.shift()
   if (typeof n == "undefined") {
	    return practice.end();
	};
   var imageArray = 
       makeImageArray(allPrTrialFaces);
       allPrTrialFaces.splice(0, n*2);
   practice.faceInputLeft = imageArray[0];
   practice.faceInputRight = imageArray[1];
   var url1 ="faces/"+practice.faceInputLeft+".bmp";
   var url2 ="faces/"+practice.faceInputRight+".bmp";
   return practice.face();
  },
  
  face: function() {
   var url1 ="faces/"+practice.faceInputLeft+".bmp";
   var url2 ="faces/"+practice.faceInputRight+".bmp";
    showSlide("stage");
	$("#leftPic").html('<img src="'+url1+'">') 
	$("#rightPic").html('<img src="'+url2+'">')

    var startTime = (new Date()).getTime();
    var keyPressHandler = function(event) {
      var keyCode = event.which;      
      if (keyCode != 72 && keyCode != 65) {
        $(document).one("keydown", keyPressHandler);        
      } else {
        var endTime = (new Date()).getTime(),
            key = (keyCode == 65) ? "a" : "h",
            userParity = practice.keyBindings[key];
        $("#number").html("");
        setTimeout(practice.pass, 100);    
      }
    };
    $(document).one("keydown", keyPressHandler);
  },
    
  pass: function() {
    var url ="faces/pass.png";
    showSlide("stage");
    $("#leftPic").html('<img src="'+url+'">');
    var keyPressHandler = function(event) {
      var keyCode = event.which;      
      if (keyCode != 32) {
        $(document).one("keydown", keyPressHandler);        
      } else {
        setTimeout(practice.next, 500);    
      }
    };
    $(document).one("keydown", keyPressHandler);
  },     
}


var demographics = {
    saveResult: function() {
    var age = $('input[name="Age"]').val();
    var male = $('input[name="Gender"]:checked').val();
    var ethnicity = $('input[name="Ethnicity"]:checked').val();
    var socioeconomicStatus = $('input[name="SES"]:checked').val();
    var religiousAffiliation = $('input[name="ReligiousAffiliation"]').val();
    var religiousAttendance = $('input[name="ReligiousAttendance"]:checked').val();
    var education = $('input[name="Education"]:checked').val();
    var citizen = $('input[name="Citizen"]:checked').val();
    var political = $('input[name="Political"]:checked').val();
    var comments = $('input[name="Comments"]').val();
    if (typeof age == "undefined" || typeof male == "undefined" || typeof ethnicity == "undefined"
        || socioeconomicStatus == "undefined" || religiousAffiliation == "undefined" || religiousAttendance == "undefined"
        || education == "undefined" || citizen == "undefined" || political == "undefined") {
            window.alert("Please respond to all of the questions on this page.");      
    }
    else {
      data = {
        Age: age,
        Male: male,
        Ethnicity: ethnicity,
        SES: socioeconomicStatus,
        ReligiousAffiliation: religiousAffiliation,
        ReligiousAttendance: religiousAttendance,
        Education: education,
        Citizen: citizen,
        Political: political,
        Comments: comments
      };
      experiment.demographicsData.push(data);    
      showSlide("finished");
      setTimeout(function() { turk.submit(experiment) }, 1500);
    }
  }
}