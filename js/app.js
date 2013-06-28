App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

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

App.ChaptersRoute = Ember.Route.extend({
	model: function() {		
		return App.Chapter.find();
	}
});

// Controller
App.ChaptersController = Ember.ArrayController.extend({

});

App.ChapterController = Ember.ObjectController.extend({

	dataObserver: function() {
		console.log("seed");
	}.observes('seed'),

	render: function() {

	},

	reset: function() {
		$("#graph").html("");
	}
});

App.StepController = Ember.ObjectController.extend({
	hashedID: function() {
		return "#collapse" + this.get("id");
	}.property("id"),

	ID: function() {
		return "collapse" + this.get("id");
	}.property("id"),
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
		CodeMirror.fromTextArea(document.getElementById(this.elementId), {
        lineNumbers: true,
        matchBrackets: true,
        continueComments: "Enter",
        extraKeys: {"Ctrl-Q": "toggleComment"}
      });
	}
});