// Zitek & Tiedens (2012) Replication Project 
var filename = "EJY_ztrp1"
var condCounts = "1,50;2,50" //Example: "1,20;2,20;3,20"

// ---------------- HELPER ------------------
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

// ---------------- PARAMETERS ------------------

// CONDITION ASSIGNMENT
// var cond = random(2)+1; // (1-6)

//call the maker getter to get the cond variable 
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts +"&filename=" + filename, false );
xmlHttp.send( null );
var cond = xmlHttp.responseText;

// PRE-LOAD IMAGES
// By creating image object and setting source, images preload
var images_ap = ["ap1a",	"ap1b",	"ap2a",	"ap2b",	"ap3a",	"ap3b",	"ap4a",	"ap4b",	"ap5a",	"ap5b",	"ap6a",	"ap6b",	"ap7a",	"ap7b",	"ap8a",	"ap8b",	"ap9a",	"ap9b",	"ap10a",	"ap10b",	"ap11a",	"ap11b",	"ap12a",	"ap12b",	"ap13a",	"ap13b",	"ap14a",	"ap14b",	"ap15a",	"ap15b",	"ap16a",	"ap16b",	"ap17a",	"ap17b",	"ap18a",	"ap18b",	"ap19a",	"ap19b",	"ap20a",	"ap20b",	"ap21a",	"ap21b",	"ap22a",	"ap22b",	"ap23a",	"ap23b",	"ap24a",	"ap24b",	"ap25a",	"ap25b",	"ap26a",	"ap26b",	"ap27a",	"ap27b",	"ap28a",	"ap28b",	"ap29a",	"ap29b",	"ap30a",	"ap30b",	"ap31a",	"ap31b",	"ap32a",	"ap32b"]	

var images_dd = ["dd1a",	"dd1b",	"dd2a",	"dd2b",	"dd3a",	"dd3b",	"dd4a",	"dd4b",	"dd5a",	"dd5b",	"dd6a",	"dd6b",	"dd7a",	"dd7b",	"dd8a",	"dd8b",	"dd9a",	"dd9b",	"dd10a",	"dd10b",	"dd11a",	"dd11b",	"dd12a",	"dd12b",	"dd13a",	"dd13b",	"dd14a",	"dd14b",	"dd15a",	"dd15b",	"dd16a",	"dd16b",	"dd17a",	"dd17b",	"dd18a",	"dd18b",	"dd19a",	"dd19b",	"dd20a",	"dd20b"]
    
var images_ds = ["ds1a",	"ds1b",	"ds2a",	"ds2b",	"ds3a",	"ds3b",	"ds4a",	"ds4b",	"ds5a",	"ds5b",	"ds6a",	"ds6b",	"ds7a",	"ds7b",	"ds8a",	"ds8b",	"ds9a",	"ds9b",	"ds10a",	"ds10b",	"ds11a",	"ds11b",	"ds12a",	"ds12b",	"ds13a",	"ds13b",	"ds14a",	"ds14b",	"ds15a",	"ds15b",	"ds16a",	"ds16b",	"ds17a",	"ds17b",	"ds18a",	"ds18b",	"ds19a",	"ds19b",	"ds20a",	"ds20b"]	
    
var images_pr = ["pr1a",	"pr1b",	"pr2a",	"pr2b",	"pr3a",	"pr3b",	"pr4a",	"pr4b",	"pr5a",	"pr5b"]
    
var images_ss = ["ss1a",	"ss1b",	"ss2a",	"ss2b",	"ss3a",	"ss3b",	"ss4a",	"ss4b",	"ss5a",	"ss5b",	"ss6a",	"ss6b",	"ss7a",	"ss7b",	"ss8a",	"ss8b",	"ss9a",	"ss9b",	"ss10a",	"ss10b",	"ss11a",	"ss11b",	"ss12a",	"ss12b",	"ss13a",	"ss13b",	"ss14a",	"ss14b",	"ss15a",	"ss15b",	"ss16a",	"ss16b",	"ss17a",	"ss17b",	"ss18a",	"ss18b",	"ss19a",	"ss19b",	"ss20a",	"ss20b"]

var images = new Array() 
for (i=0;i<32;i++) {//loop through images you want to use
    images[i] = new Image()
    images[i].src =  "faces/" + images_ap[i] + ".bmp"
}
for (i=0;i<20;i++) {
    images[i] = new Image()
    images[i].src =  "faces/" + images_dd[i] + ".bmp"
    images[i] = new Image()
    images[i].src =  "faces/" + images_ds[i] + ".bmp"
    images[i] = new Image()
    images[i].src =  "faces/" + images_ss[i] + ".bmp"
}
for (i=0;i<5;i++) {
    images[i] = new Image()
    images[i].src =  "faces/" + images_pr[i] + ".bmp"
}

     
var keyBindings = [
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

allTrialAnswers = ["a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",	"a",    "h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h",	"h"]
allTrialNum = [0,  1,	2,	3,	4,  5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51,	52,	53,	54,	55,	56,	57,	58,	59,	60,	61,	62,	63,	64,	65,	66,	67,	68,	69,	70,	71,	72,	73,	74,	75,	76,	77,	78,	79,	80,	81,	82,	83,	84,	85,	86,	87,	88,	89,	90,	91],

 myAllTrialOrder = allTrialOrder_cond.shuffle();
   
if (cond == 2) {
    allPrTrialFaces = allPrTrialFaces.reverse();
    prTrialAnswers = prTrialAnswers.reverse();
    allTrialFaces_ap = allTrialFaces_ap.reverse();
    allTrialFaces_dd = allTrialFaces_dd.reverse();
    allTrialFaces_ds = allTrialFaces_ds.reverse();
    allTrialFaces_ss = allTrialFaces_ss.reverse(); 
};


//returns the image array
makeImageArray = function(imageArray) {
	var toSlice = imageArray.length;
	var imageArray = imageArray.slice(0, toSlice);
    return imageArray;
};        
        
// ----- EXPERIMENT -----
        
showSlide("instructions");

// VAR PRACTICE SETUP
var practice = {
  trialOrder: allPrTrialNum,
  trialNum: "",
  trialTarget: "",
  keyBindings: keyBindings,
  faceInputLeft: "",
  faceInputRight: "",
  data: [],
  end: function() {
    showSlide("realTrialsInstructions");
  },
  
  instructions: function() {
    showSlide("practiceInstructions");      
  },
    
  next: function() {
   var n = practice.trialOrder.shift();
   practice.trialNum = n+1;
   practice.trialTarget = prTrialAnswers[n];
   if (n === 0) {
        var imageArray = makeImageArray(allPrTrialFaces);
    } else {
        var imageArray = makeImageArray(allPrTrialFaces);
        imageArray.splice(0, n*2);
        }      
    if (typeof n == "undefined") {
	    return practice.end();
	};
   practice.faceInputLeft = imageArray[0];
   practice.faceInputRight = imageArray[1];
   var url1 ="faces/"+practice.faceInputLeft+".bmp";
   var url2 ="faces/"+practice.faceInputRight+".bmp";
   return practice.pass();
  },
  
  face: function() {
   var n = practice.trialNum;
   var url1 ="faces/"+practice.faceInputLeft+".bmp";
   var url2 ="faces/"+practice.faceInputRight+".bmp";
    showSlide("stage");
	$("#leftPic").html('<img src="'+url1+'">') 
	$("#rightPic").html('<img src="'+url2+'">')
    $("#instructionsText").html("A: Animal and Human")
    $("#instructionsText2").html("H: Human and Human")

    var startTime = (new Date()).getTime();
    var keyPressHandler = function(event) {
      
      var keyCode = event.which;   
//      var already_movedon = 0
      if (keyCode != 72 && keyCode != 65) {
        $(document).one("keydown", keyPressHandler);        
//      } else if (keyCode == 65 & practice.trialTarget != "a" & !already_movedon) {
//        window.alert("Incorrect!  Please try again")
//      } else if (keyCode == 72 & practice.trialTarget != "h" & !already_movedon) {
//        window.alert("Incorrect!  Please try again")
      } else {
//        already_movedon = 1
        var endTime = (new Date()).getTime(),
            
            key = (keyCode == 65) ? "a" : "h",
            userParity = practice.keyBindings[key];
                   
        var correct = 0
        if (key == practice.trialTarget) {
        correct = 1
        } else {
        correct = 0
        };
          
        var data = {
            slide: "practice",
		    trialNum: n,
            key: key,
		    correct: correct,
		    rt: endTime - startTime
		}		
    
        practice.data.push(data)
        $("#number").html("");
        setTimeout(practice.next, 100)
      }
    };
    $(document).one("keydown", keyPressHandler);
  },
    
  pass: function() {
    var url ="faces/pass.png";
    showSlide("stage_ready");
    $("#centerPic").html('Get ready,');
    setTimeout(practice.face, 500);  
  },     
}

// VAR EXP
var experiment = {
  practiceData: practice.data,
  testData: [],
  
  trialOrder: allTrialNum,
  trialCond: "",
  trialNum: "",
  trialTarget: "",
  keyBindings: keyBindings,
  faceInputLeft: "",
  faceInputRight: "",
  data: [],
  end: function() {
    showSlide("finished"); // fixme!! just for trying
    setTimeout(function () {
        //Decrement			
            var xmlHttp = null;
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
            xmlHttp.send(null);
        
           turk.submit(experiment);
        }, 1500);
  },
  
  instructions: function() {
    showSlide("practiceInstructions");      
  },
    
  next: function() {
   var n = experiment.trialOrder.shift();
   experiment.trialNum = n+1;
   experiment.trialCond = myAllTrialOrder[n];
   if (experiment.trialCond == "ap") {
   experiment.trialTarget = "a";
   var imageArray = makeImageArray(allTrialFaces_ap)
   allTrialFaces_ap.splice(0, 2);
   } else if (experiment.trialCond == "dd") {
   experiment.trialTarget = "h";
   var imageArray = makeImageArray(allTrialFaces_dd)
   allTrialFaces_dd.splice(0, 2);
   } else if (experiment.trialCond == "ds") {
   experiment.trialTarget = "h";
   var imageArray = makeImageArray(allTrialFaces_ds)
   allTrialFaces_ds.splice(0, 2);
   } else if (experiment.trialCond == "ss") {
   experiment.trialTarget = "h";
   var imageArray = makeImageArray(allTrialFaces_ss)
   allTrialFaces_ss.splice(0, 2);
   }

   if (typeof n == "undefined") {
	    return experiment.end();
	};
   experiment.faceInputLeft = imageArray[0];
   experiment.faceInputRight = imageArray[1];
   var url1 ="faces/"+experiment.faceInputLeft+".bmp";
   var url2 ="faces/"+experiment.faceInputRight+".bmp";
   return experiment.pass();
  },
  
  face: function() {
   var n = experiment.trialNum;
   var trialCond = myAllTrialOrder[n-1];
   var url1 ="faces/"+experiment.faceInputLeft+".bmp";
   var url2 ="faces/"+experiment.faceInputRight+".bmp";
    showSlide("stage");
	$("#leftPic").html('<img src="'+url1+'">') 
	$("#rightPic").html('<img src="'+url2+'">')
    $("#instructionsText").html("")
    $("#instructionsText2").html("")
    
    var startTime = (new Date()).getTime();
    var keyPressHandler = function(event) {
      var keyCode = event.which;      
      if (keyCode != 72 && keyCode != 65) {
        $(document).one("keydown", keyPressHandler);        
      } else {
        var endTime = (new Date()).getTime(),
            
            key = (keyCode == 65) ? "a" : "h",
            userParity = experiment.keyBindings[key];
                   
        var correct = 0
        if (key == experiment.trialTarget) {
        correct = 1
        } else {
        correct = 0
        };

        var data = {
            slide: "test",
            cond: trialCond,
            leftPic: experiment.faceInputLeft,
            rightPic: experiment.faceInputRight,
		    trialNum: n,
            key: key,
		    correct: correct,
		    rt: endTime - startTime
		}		
    
        experiment.data.push(data)
        $("#number").html("");
        setTimeout(experiment.next, 100);    
      }
    };
    $(document).one("keydown", keyPressHandler);
  },
    
  pass: function() {
    var url ="faces/pass.png";
    showSlide("stage_ready");
    $("#centerPic").html('Get ready,');
    setTimeout(experiment.face, 500);
  },     

}