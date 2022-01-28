
/*Loop thur weight arrays and set count value to 0. 
1 thru 59 for 1st five
1 thru 42 for BN
*/
/*
Loop array to count occurrence of each number 
For 
1.	Check all numbers from 1 to highest number drawn for either 1st five on bonus numbers(BN)
2.	Set conditions based if number is 1st five or BN
3.	Set conditions based on when number drawn vs. how many total drawings made 
(array length -1).
4.	For 1st five Compare number count vs. number in array if match increment number set count to check BN and break out of loop.
5.	Store in results array.
weight1stFivePB array [ drawn number, intial occurance #, weighted ratio, weight occurance, weighted occurance/10, difference for mean]
*/


var weight1stFivePB = [[]], weight1stFiveMM = [[]] ;//Hold the weighted values of number of occurances
var weightRBBN = [[]], weightMMBN = [[]]; //Hold the weighted values of number of occurances for Bonus numbers. 
var final1st5PB = [], final1st5MM = [];// Holds the array or numbers based on weight value. 
var finalBNPB = [[]],  finalBNMM = [[]]; //Holds the bonus number array based on weight value. 
var Lucky5PB = [], Lucky5MM = []; //Holds drawn random numbers
var i, f, j;//May change f varible name
var mincountPB5 = 0, maxcountPB5 =0, avgcountPB5 = 0, runtotalPB5 =0, difFromAvg = 0, finaloccNumPB5;
var mincountPB1 = 0, maxcountPB1 =0, avgcountPB1 = 0, finaloccNumPB1;
var testcount, arrayAvgPB5;
//Powerball ratiosPBB
var ratio50to53 = (1820/1305);
var ratio54to55 = (1820/1003);
var ratio56to59 = (1820/653);
//Porwer ball bonus number ratos
var PBratio36to39 = (1820/1483);
var PBratio40to42 = (1820/1167);

//Mega Millions ratio
var ratio53to56 = (1182/1021);
var ratio57to75 = (1182/153);
//MegaMillion ball bonus number ratos
//var PBratio36to39 = (1814/1483); not needed only concerned with 1-15
//var PBratio40to42 = (1814/1167);

function fillthearray(){
	alert( ' MegaMillionsArray length = ' + MegaMillionsArray.length); // Length is 1133
	alert( ' PowerBallArrayArray length = ' + PowerBallArray.length); // Length is 1133
	for (i = 0; i < 59; i++){ 
	  if ( i < 50 ) {
	    if( i === 0 ){weight1stFivePB[0] = ([ 1,0 , 1]) ;}
	    else{
	    weight1stFivePB.push([i + 1, 0, 1 ]);//, [0],[1]);//Populates array with avaible numbers
	    }	
      }//End i , 50
	 if( i > 49 && i < 54){ 
	    weight1stFivePB.push([ i + 1,0 , ratio50to53]);	
	  }
	  if( i > 53 && i < 56){
	    weight1stFivePB.push([ i + 1,0 , ratio54to55]);
	  }
	  if( i > 55 && i <= 59){
	    weight1stFivePB.push([ i + 1,0 , ratio56to59]);
	  }
	} 	
  for(i = 0; i < 42; i++){ 
	if(i <36){
	  if( i == 0 ){weightRBBN[0] = ([ i + 1,0 , 1]) ;}
	  else{  
      weightRBBN.push([i + 1, 0, 1 ]);//Populates array with avaible numbers
	  }
	}
	if(i > 35 && i <40){
	  weightRBBN.push([ i + 1,0 , PBratio36to39]);	
	}
	if(i > 39 && i <= 42){
	  weightRBBN.push([ i + 1,0 , PBratio40to42]);	
	}
  } 

  for(i=0; i < PowerBallArray.length; i++){
    for(f=0; f < 6; f++){
      for(j=1; j <= 59; j++){
	    if( j == PowerBallArray[i][f]){
	      if( f < 5){//Set conditions for 1st five number
		  testcount = weight1stFivePB[j-1][1];
		    weight1stFivePB[j-1][1] = ( testcount+ 1);//Increase occurence;
			//break; ***may not be needed or stop compasion in BN array. Consider flag.
		  }
		  if (f == 5 && j <= 42){
		  testcount = weightRBBN[j-1][1];
			weightRBBN[j-1][1] = (testcount + 1);//Increase occurence;
		  }	
	    }
      } 
    } 
  }
  
  //Loop thru weightarrays to to determing max and values
 
 for (i =0; i < weight1stFivePB.length; i++){
	  if (weight1stFivePB[i][1] >  maxcountPB5){ maxcountPB5 = weight1stFivePB[i][1];}
	  runtotalPB5 = runtotalPB5 + weight1stFivePB[i][1];
	  weight1stFivePB[i].push (Math.round(weight1stFivePB[i][1] * weight1stFivePB[i][2]));
	   weight1stFivePB[i].push(Math.round(weight1stFivePB[i][3]/10));
	   }
 arrayAvgPB5 = Math.round((runtotalPB5/59)/10);
 mincountPB5 = maxcountPB5;//Set max to high value and work donw
 for (i =0; i < weight1stFivePB.length; i++){
	 
	  if (weight1stFivePB[i][1] <  mincountPB5){ mincountPB5 = weight1stFivePB[i][1];}
	  
 }
 for (i = 0; i < weight1stFivePB.length; i++ ){
     finaloccNumPB5 =  ( arrayAvgPB5 + (arrayAvgPB5 - weight1stFivePB[i][4])); //if (i == 1){alert('arrayAvgPB5 - weight1stFivePB[i][4]) = ' + (arrayAvgPB5 - weight1stFivePB[i][4]) + '  finaloccNumPB5 = ' + finaloccNumPB5);}
     for (j = 0; j!= finaloccNumPB5; j++)
	 {
		 
		 final1st5PB.push((i + 1)); 		 
	}
	
	 
 }//alert(' line 100');

/* possible dupe for(j = 1; j < 6; j ++){

Lucky5PB.push( final1st5PB[Math.floor((Math.random() * final1st5PB.length))]);
 
}
/*document.write(' maxcountPB5 = ' + maxcountPB5 + ' mincountPB5 = ' + mincountPB5 + ' Average = ' + arrayAvgPB5);
document.write(" <br> " );
document.write(' Lucky5PB = ' + Lucky5PB);
document.write(" <br> " );*/
//Loop thru weith BN array to to determing max and values
 for (i =0; i < weightRBBN.length; i++){
	  if (weightRBBN[i][1] >  maxcountPB5){ maxcountPB5 = weightRBBN[i][1];}
	  runtotalPB5 = runtotalPB5 + weight1stFivePB[i][1];
	  weightRBBN[i].push (Math.round(weightRBBN[i][1] * weightRBBN[i][2]));
	   weightRBBN[i].push(Math.round(weightRBBN[i][3]/10));
	   }
 arrayAvgPB5 = Math.round((runtotalPB5/59)/10);
 mincountPB5 = maxcountPB5;//Set max to high value and work donw
 for (i =0; i < weightRBBN.length; i++){
	 
	  if (weightRBBN[i][1] <  mincountPB5){ mincountPB5 = weightRBBN[i][1];}
	  
 }
 for (i = 0; i < weightRBBN.length; i++ ){
     finaloccNumPB5 =  ( arrayAvgPB5 + (arrayAvgPB5 - weightRBBN[i][4])); //if (i == 1){alert('arrayAvgPB5 - weight1stFivePB[i][4]) = ' + (arrayAvgPB5 - weight1stFivePB[i][4]) + '  finaloccNumPB5 = ' + finaloccNumPB5);}
     for (j = 0; j!= finaloccNumPB5; j++)
	 {
		 //alert(' line 101 j = ' + j + '  finaloccNumPB5 = ' + finaloccNumPB5);
		 finalBNPB.push((i + 1)); 		 
	}
	
	 
 }//alert(' line 100');
 for( i = 0; i < 3; i++){
	for(j = 1; j < 6; j ++){
	
	Lucky5PB.push( final1st5PB[Math.floor((Math.random() * final1st5PB.length))]);
	 
	}
	
	Lucky5PB.sort();//sort before bonus number
	Lucky5PB.push( finalBNPB[Math.floor((Math.random() * finalBNPB.length))]);
	document.write(" <br> " );	
	document.write(' maxcountPB5 = ' + maxcountPB5 + ' mincountPB5 = ' + mincountPB5 + ' Average = ' + arrayAvgPB5);
	document.write(" <br> " );
	document.write(' Lucky5PB = ' + Lucky5PB);
	document.write(" <br> " );
	Lucky5PB.length = 0;
 }
 
//*****Begins Megamillions fill
for (i = 0; i < 75; i++){ 
	  if ( i < 53 ) {
	    if( i === 0 ){weight1stFiveMM[0] = ([ 1,0 , 1]) ;}
	    else{
	    weight1stFiveMM.push([i + 1, 0, 1 ]);//, [0],[1]);//Populates array with avaible numbers
	    }	
      }//End i , 50
	 if( i > 52 && i < 57){ 
	    weight1stFiveMM.push([ i + 1,0 , ratio53to56]);	
	  }
	  if( i > 56 && i <= 75){
	    weight1stFiveMM.push([ i + 1,0 , ratio57to75]);
	  }
	  
	} 	
  for(i = 0; i < 15; i++){ 
	  if( i == 0 ){weightMMBN[0] = ([ i + 1,0 , 1]) ;}
	  else{  
      weightMMBN.push([i + 1, 0, 1 ]);//Populates array with available numbers
	  }
	}
	

  for(i=0; i < MegaMillionsArray.length; i++){
    for(f=0; f < 6; f++){
      for(j=1; j <= 75; j++){
	    if( j == MegaMillionsArray[i][f]){
	      if( f < 5){//Set conditions for 1st five number
		  testcount = weight1stFiveMM[j-1][1];
		    weight1stFiveMM[j-1][1] = ( testcount + 1);//Increase occurence;
			//break; ***may not be needed or stop compasion in BN array. Consider flag.
		  }
		  if (f == 5 && j <= 15){
		  testcount = weightMMBN[j-1][1];
			weightMMBN[j-1][1] = (testcount + 1);//Increase occurence;
		  }	
	    }
      } 
    } 
  }
  
  //Loop thru weightarrays to to determing max and values
 
 for (i =0; i < weight1stFiveMM.length; i++){
	  if (weight1stFiveMM[i][1] >  maxcountPB5){ maxcountPB5 = weight1stFiveMM[i][1];}
	  runtotalPB5 = runtotalPB5 + weight1stFiveMM[i][1];
	  weight1stFiveMM[i].push (Math.round(weight1stFiveMM[i][1] * weight1stFiveMM[i][2]));
	   weight1stFiveMM[i].push(Math.round(weight1stFiveMM[i][3]/10));
	   }
 arrayAvgPB5 = Math.round((runtotalPB5/59)/10);
 mincountPB5 = maxcountPB5;//Set max to high value and work donw
 for (i =0; i < weight1stFiveMM.length; i++){
	 
	  if (weight1stFiveMM[i][1] <  mincountPB5){ mincountPB5 = weight1stFiveMM[i][1];}
	  
 }
 for (i = 0; i < weight1stFiveMM.length; i++ ){
     finaloccNumPB5 =  ( arrayAvgPB5 + (arrayAvgPB5 - weight1stFiveMM[i][4])); //if (i == 1){alert('arrayAvgPB5 - weight1stFiveMM[i][4]) = ' + (arrayAvgPB5 - weight1stFiveMM[i][4]) + '  finaloccNumPB5 = ' + finaloccNumPB5);}
     for (j = 0; j!= finaloccNumPB5; j++)
	 {
		 //alert(' line 101 j = ' + j + '  finaloccNumPB5 = ' + finaloccNumPB5);
		 final1st5PB.push((i + 1)); 		 
	}
	
	 
 }//alert(' line 100');


//Loop thru weith BN array to to determing max and values
 for (i =0; i < weightMMBN.length; i++){
	  if (weightMMBN[i][1] >  maxcountPB5){ maxcountPB5 = weightMMBN[i][1];}
	  runtotalPB5 = runtotalPB5 + weight1stFiveMM[i][1];
	  weightMMBN[i].push (Math.round(weightMMBN[i][1] * weightMMBN[i][2]));
	   weightMMBN[i].push(Math.round(weightMMBN[i][3]/10));
	   }
 arrayAvgPB5 = Math.round((runtotalPB5/59)/10);
 mincountPB5 = maxcountPB5;//Set max to high value and work donw
 for (i =0; i < weightMMBN.length; i++){
	 
	  if (weightMMBN[i][1] <  mincountPB5){ mincountPB5 = weightMMBN[i][1];}
	  
 }
 for (i = 0; i < weightMMBN.length; i++ ){
     finaloccNumPB5 =  ( arrayAvgPB5 + (arrayAvgPB5 - weightMMBN[i][4])); //if (i == 1){alert('arrayAvgPB5 - weight1stFiveMM[i][4]) = ' + (arrayAvgPB5 - weight1stFiveMM[i][4]) + '  finaloccNumPB5 = ' + finaloccNumPB5);}
     for (j = 0; j!= finaloccNumPB5; j++)
	 {
		 //alert(' line 101 j = ' + j + '  finaloccNumPB5 = ' + finaloccNumPB5);
		 finalBNMM.push((i + 1)); 		 
	}
	
	 
 }//alert(' line 100');
  for( i = 0; i < 3; i++){
	for(j = 1; j < 6; j ++){
	
	Lucky5MM.push( final1st5PB[Math.floor((Math.random() * final1st5PB.length))]);
	 
	}
	
	Lucky5MM.sort();//sort before bonus number
	Lucky5MM.push( finalBNMM[Math.floor((Math.random() * finalBNMM.length))]);
	document.write(" <br> " );
	document.write(' maxcountPB5 = ' + maxcountPB5 + ' mincountPB5 = ' + mincountPB5 + ' Average = ' + arrayAvgPB5);
	document.write(" <br> " );
	document.write(' Lucky5MM = ' + Lucky5MM);
	document.write(" <br> " );
	Lucky5MM.length = 0;
  }
// End Mega millions array
}//End fillthearray function























//document.write(" <br> " );
//for ( i = 0; i < final1st5PB.length; i++){ document.write(final1st5PB[i] + ', '); if((final1st5PB[i] != final1st5PB[i+1])){document.write(" <br> " );} }
 /*Create final array to draw numbers. Loop throuhg weitghted array
 
 	1. Set net occurences in fianl away =  weightedavg + (weightedavg - weighted occurenc);
 s
 
 
 */
 //alert ( 'weight1stFivePB.length = ' + weight1stFivePB.length);i  + ' Arrray value =  ' + weight1stFivePB[i]  );
	//if (i <42) { document.write(' i =  ' + i  + ' Arrray value =  ' + weightRBBN[i]  );	}
/*for(i = 0; i <weight1stFivePB.length; i++){
  //  document.write(' i =  ' + ' + weightRBBN[i]
	if(i < weight1stFivePB.length){document.write( '    i =   ' + i  + '  Arrray value = ' + weight1stFivePB[i][0] + ' '  + weight1stFivePB[i][1] + ' ' 
	  + Math.round(weight1stFivePB[i][2]) + ' ' + weight1stFivePB[i][3] + ' ' + weight1stFivePB[i][4])  ;}
		document.write(" <br> " );	
  }		*/
	

 
  
  

/*
Sort array by lowest count value ** not really needed but useful for debugging.
Loop thru result array to compute weighted value, compute number of entries calculate on weighted value and increase entries in array vs. difference in max value counted – weighted value.
***With max value having 1 entry. 
*/

