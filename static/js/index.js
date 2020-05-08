var Vent = Vent || {};

var MAX_SAMPLES = 500;

Vent._charts = {};
Vent._x = {};
Vent._y = {};
Vent._xaxis = {};
Vent._yaxis = {};
Vent._paths = {};
Vent._lines = {};

Vent._pressure = [];
Vent._humidity = [];
Vent._temperature = [];
Vent._last = 0;

Vent._timer = null;
Vent._requested = 1;

Vent.getdata = function() {
    var dataset = []
    for (var i = 0; i < 20; i++) {
	var y = d3.randomUniform(-50,50)();
	dataset.push({"x": i, "y": y});
    }
    return dataset
}

Vent.updateData = function(field, data) {


    Vent._x[field].domain(d3.extent(data, function(d) { return d.x; }))
    Vent._y[field].domain([d3.min(data, function(d) { return d.y; }),
			   d3.max(data, function(d) { return d.y; })]);

    Vent._charts[field].selectAll(".yaxis")
        .call(Vent._yaxis[field]);
    
    Vent._lines[field] = d3.line()
        .x(function(d) { return Vent._x[field](d.x); }) // set the x values for the line generator
        .y(function(d) { return Vent._y[field](d.y); }) // set the y values for the line generator

    Vent._paths[field].attr("d", Vent._lines[field](data));

}

Vent.initChart = function(field) {

    // setup margins
    var select = "#"+field
    var margin = {top: 15, right: 15, bottom: 30, left: 50},
	width = $(select).innerWidth() - margin.left - margin.right,
	height = $(select).innerHeight() - margin.top - margin.bottom;
    
    Vent._charts[field]  = d3.select(select)
	.append("svg")
	.attr("height", height + margin.top + margin.bottom)
	.attr("width", width + margin.left + margin.right)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = Vent.getdata();

    // xaxis
    Vent._x[field] = d3.scaleLinear()
    	.range([0, width]);
    Vent._xaxis[field] = d3.axisBottom().scale(Vent._x[field]);
    Vent._charts[field].append("g")
        .attr("class", "xaxis")
        .attr("transform", "translate(0," + height + ")");
    
    // yaxis
    Vent._y[field] = d3.scaleLinear()
	.range([height, 0]);
    Vent._yaxis[field] = d3.axisLeft().scale(Vent._y[field]);    
    Vent._charts[field].append("g")
        .attr("class", "yaxis");

    // path
    Vent._paths[field] = Vent._charts[field].append("path")
	.attr("class", "line")

}

Vent.max = function(arr, count) {    
    for (var i = arr.length; i > count; i--) {
	arr.shift();
    }
}

Vent.check = function() {
    $.get('/sensors?count='+Vent._requested,
	  {},
	  function(response) {
	      for (var i=0; i<response.samples; i++) {
		  if (response.times[i] > Vent._last) {
		      Vent._pressure.push({"x": response.times[i], "y": response.pressure[i]});
		      Vent._temperature.push({"x": response.times[i], "y": response.temperature[i]});
		      Vent._humidity.push({"x": response.times[i], "y": response.humidity[i]});	      
		      Vent._last = response.times[i];
		  }
		  else {
		      console.warn('.');
		  }
	      }
	      Vent.max(Vent._pressure, MAX_SAMPLES);
	      Vent.max(Vent._temperature, MAX_SAMPLES);
	      Vent.max(Vent._humidity, MAX_SAMPLES);
	      Vent.updateData('pressure', Vent._pressure);
	      Vent.updateData('temperature', Vent._humidity);
	      Vent.updateData('humidity', Vent._temperature);
	  });
}


Vent.post = function(command, payload) {

    $.post(command, payload,
	   function(response) {
	       console.log(response);
	   });

};

Vent.refresh = function() {
    if (Vent._timer != null) {
        clearInterval(Vent._timer);
        Vent._timer = null;
        $("#refresh").html("Play");
    }
    else {
        Vent._requested = 1
	// replace with a more efficient update
        Vent._timer = setInterval(Vent.check, 100);
        $("#refresh").html("Pause");
    }
};

Vent.alarm = function(msg) {
    $('#alarms').html(msg);
};

Vent.silence = function() {
    $('#alarms').html("");
}

Vent.listen = function() {
    document.addEventListener('keydown', function(event) {
	
	switch(event.code) {
	case "KeyA":
            return Vent.silence();
	case "KeyS":
            return Vent.alarm('boost');
	case "KeyJ":
            return Vent.menu_scroll(-1);
	case "KeyL":
            return Vent.menu_scroll(1);
	case "KeyP":
	    return Vent.refresh();
	default:
	    console.warn('unknown event');
	}
	
    });
};  

Vent.menu = function(choices) {
    var markup = [];
    for( var i = 0; i < choices.length; i++) {
	markup.push(DIV({
	    'class' : 'control',
	    'id' : 'menu_'+i
	}, choices[i]));
    }
    $('#controls').html(markup.join(""));
    Vent._choices = choices;
    Vent._focus = 0;
    Vent.menu_focus();
}

Vent.menu_focus = function() {
    $('.control').removeClass('focused');
    $('#menu_'+Vent._focus).addClass('focused');
}

Vent.menu_scroll = function(dir) {
    Vent._focus += dir;
    if (Vent._focus < 0) {
	Vent._focus = Vent._choices.length - 1;
    }
    if (Vent._focus >= Vent._choices.length) {
	Vent._focus = 0;
    }
    Vent.menu_focus();
}

$(document).ready(function() {
    console.log("Vent online");
    Vent.initChart('pressure');
    Vent.initChart('temperature');
    Vent.initChart('humidity');

    $("#refresh").click(Vent.refresh);
    $("#breath").click(function() {
	var seconds = $('#seconds').val()
	var duty = $('#duty').val()
	Vent.post('/breath', {
	    'seconds' : seconds,
	    'duty' : duty
	});
    });

    Vent.listen();
    Vent.menu(["VC", "PS", "AC"]);
    Vent.refresh();
});
