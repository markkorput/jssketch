// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Controls = (function(_super) {
    __extends(Controls, _super);

    function Controls() {
      this.keydown = __bind(this.keydown, this);
      this.mousedown = __bind(this.mousedown, this);
      _ref = Controls.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Controls.prototype.initialize = function() {
      var item,
        _this = this;
      this.destroy();
      $(document).on('mousedown', this.mousedown);
      $(document).on('keydown', this.keydown);
      this.gui = new dat.GUI();
      this.data = new (function(model) {
        return this.playing = true;
      });
      item = this.gui.add(this.data, 'playing');
      item.listen();
      return item.onChange(function(val) {
        return _this.trigger('toggle-playing', val);
      });
    };

    Controls.prototype.destroy = function() {
      this.trigger('destroy');
      $(document).off('mousedown keydown');
      if (this.gui) {
        this.gui.destroy();
        return this.gui = void 0;
      }
    };

    Controls.prototype.mousedown = function(e) {};

    Controls.prototype.keydown = function(e) {
      if (event.which === 27) {
        this.trigger('reset');
      }
      if (event.which === 32) {
        this.data.playing = this.data.playing !== true;
        this.trigger('toggle-playing', this.data.playing);
      }
      if (event.which === 13) {
        return this.trigger('screenshot');
      }
    };

    return Controls;

  })(Backbone.Model);

}).call(this);