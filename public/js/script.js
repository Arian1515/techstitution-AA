/*console.log("Hello world from Script.js");
var age1 = prompt ("Mosha:");
var age_days =age*365;
var string1= age + " year is roughly " + age_days + " days ";
alert(string1)*/;


/*if (age<18) {
	alert("Sorry , you are not old enough to enter here");

}
else if (age<21) {
	alert("You can enter but cannot drink");
}

else {
	alert("Come on in . You can drink");

}  
var age = parseInt(age1)
if (age <0){
alert("Mosha eshte shtypur gabim");
 }

else if (age===21) {
	alert("Happy 21st birthday!!");
}
if(age%2 !==0){
	alert("Odd age");
}
var count =0;
while (count<11){
	count++;
} 
var count=-10;
while (count>-11&&count<20){
	console.log("count is:"+count);
	count++;
}
count=10;
while(count>9&&count<41){
	if(count%2==0)
    {
        console.log(count);
    }
    count++;
}
for(var i=-10;i<=19;i++)
{
	console.log(i);
}
for(var j=)

	function doSomething(){
		console.log("Hello World from doSomething!");
	}
	doSomething() ;
	doSomething() ;
	doSomething() ;

	function test(x){
		return x*2;
		console.log(x);
		return x/2;

	}
	test (40);

	function isEven(x)
	{
		if(x%2==0)
			{return true;}
		else
			{return false;}

	}

	console.log (isEven(50));
	console.log(isEven(29));
	console.log(isEven(205));

	var person = {
		name: "Bob",
		age: 24 ,
		city:"LA"
	};
	console.log(person["name"])
	console.log(person.name);*/

$(document).ready(function(){
$('#trigger').click(function(){
	alert("Trigger is clicked!");
$('body').css('color','pink');
});


Highcharts.chart('container', {

    title: {
        text: 'TechstitutionAA'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
});