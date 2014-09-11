class @App extends Backbone.Model
	initialize: ->
		@setup()

	setup: ->
		canvas = document.getElementById 'targetCanvas'
		paper.setup canvas
		@sketcher = new Sketcher();