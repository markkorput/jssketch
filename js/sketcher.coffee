class @Sketcher extends Backbone.Model
  initialize: ->
    @paths = []

    $('canvas').on 'mousedown', (e) =>
      @path = new paper.Path
        strokeColor: '#E4141B',
        strokeWidth: 20,
        strokeCap: 'round'

      @paths.push @path


    $('canvas').on 'mousemove', (e) =>
      return if !@path
      @path.add new paper.Point(e.clientX, e.clientY)
      @path.smooth()

    $('canvas').on 'mouseup', (e) =>
      @path.strokeColor = '#38fa26'
      # path.fillColor = clr
      @path.smooth()
      @path = null
