App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.CodeEditors = {};

App.Router.map(function() {
	this.resource("chapters", function(){
		this.resource("chapter",{path:":chapter_id"});
		this.resource("resources");
	});
});

// Routes
App.IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo("chapters");
	}
});

App.ChaptersIndexRoute = Ember.Route.extend({
	model: function() {		
		return {
			"note": "### D3\n D3.js is a powerful library that can be used to process large amount of data within the browser and make complex data driven interaction possible. The library has been written by Mike Bostocks who works at NYTimes and has done some amazing visualizations for them.\n\n### Sandbox\n This is a sandbox for you to test d3 out and learn in an interactive manner. It is definitely a work in progress. Under the hood, the sandbox has been written in ember.js, markdown.js, codemirror.js and d3.js. \n\n### Getting Started\n To get started please select a chapter from the menu on top to start. Make edits to the code and data editors and see how your graph transforms. It will be a good idea to run this in chrome and debug this using chrome dev tools. Good luck!"
		};
	}
});

App.ResourcesRoute = Ember.Route.extend({
	model: function() {		
		return {
			"note": "* [D3 Website](d3js.org)\n* [Simple Tutorials](http://alignedleft.com/tutorials/d3/)\n* [Convention for reusable charts](http://bost.ocks.org/mike/chart/)"
		};
	}
});

App.ChaptersRoute = Ember.Route.extend({
	model: function() {		
		return App.Chapter.find();
	}
});

// Controller
App.ChaptersController = Ember.ArrayController.extend({

});

App.ChapterController = Ember.ObjectController.extend({

	svg: null,

	dataObserver: function() {
		console.log("seed");
	}.observes('seed'),

	render: function() {
		var codeStr = App.CodeEditors.code.getValue();
		var dataStr = App.CodeEditors.data.getValue();

		var data = dataStr.split(/\n/).map(function(d) { return parseFloat(d); });
		eval(codeStr);
		if(!this.get("svg")) {
			this.set("svg",setup(data));
		}

		draw(this.get("svg"),data);
	},

	reset: function() {
		$("#graph").html("");
	}
});

App.StepController = Ember.ObjectController.extend({

	needs: ["chapter"],

	hashedID: function() {
		return "#collapse" + this.get("id");
	}.property("id"),

	ID: function() {
		return "collapse" + this.get("id");
	}.property("id"),

	load: function() {	
		var code = this.get("content.code");
		if(code) {
			App.CodeEditors.code.setValue(code);
		}
	}
});

// Models & Adapters
App.Adapter = DS.FixtureAdapter;

App.Store = DS.Store.extend({
	adapter: App.Adapter
});

App.Chapter = DS.Model.extend({
	"title": DS.attr("string"),
	"description": DS.attr("string"),
	"steps": DS.hasMany("App.Step"),
	"code": DS.attr("string"),
	"seed": DS.attr("string")
});

App.Step = DS.Model.extend({
	"title": DS.attr("string"),
	"text": DS.attr("string"),
	"code": DS.attr("string")
});

// Helpers
Ember.Handlebars.registerBoundHelper('md', function(value) {
	return new Ember.Handlebars.SafeString(markdown.toHTML(value));
});

// Views

App.CodeEditor = Ember.TextArea.extend({
	attributeBindings: ["rows"],
	didInsertElement: function() {
		var editor = CodeMirror.fromTextArea(document.getElementById(this.elementId), {
	        lineNumbers: true,
	        matchBrackets: true,
	        continueComments: "Enter",
	        extraKeys: {"Ctrl-Q": "toggleComment"}
	      });
		var type = this.classNames.splice(-1)[0]
		App.CodeEditors[type] = editor;
	},
});