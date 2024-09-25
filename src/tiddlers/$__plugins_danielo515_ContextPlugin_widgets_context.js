/*\\
title: $:/core/modules/widgets/danielo/context-widget.js
type: application/javascript
module-type: widget

Edit-text widget

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tc: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;
var contextWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
contextWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
contextWidget.prototype.render = function(parent,nextSibling) {
   // Save the parent dom node
	this.parentDomNode = parent;
	// Compute our attributes
	this.computeAttributes();
	// Execute our logic
	this.execute();
    
  if(this.term && this.term.length>3){
     
      this.createRegexp();
      var matches = this.executeRegexp();
	  if(matches.length > 0){ 
        this.domNode = this.document.createElement(this.element);
        this.domNode.className="tw-context";
        this.composeResults( matches ); //this appends to domNode        
      	// Insert element
      	parent.insertBefore(this.domNode,nextSibling);
      	this.renderChildren(this.domNode,null);
	  	this.domNodes.push(this.domNode);
      }
  }
	
};

/*
Compute the internal state of the widget
*/
contextWidget.prototype.execute = function() {
	// Get the parameters from the attributes
    this.matchedClass = this.getAttribute("matchClass","matched");
	this.tiddler = this.getAttribute( "tiddler",this.getVariable("currentTiddler") );
    this.term =  this.getAttribute("term",this.getAttribute("searchTerm"));
	this.contextLength = this.getAttribute("length",50);
    this.before = this.getAttribute("before",this.contextLength);
    this.after = this.getAttribute("after",this.contextLength);
    this.maxMatches = this.getAttribute("maxMatches",10);
    this.element = this.getAttribute("element","pre");
	this.makeChildWidgets();
};

  /*Create the regular expression*/
contextWidget.prototype.createRegexp = function()
{
  var regString = "(\\w+[\\s\\S]{0,#before#})?(#term#)([\\s\\S]{0,#after#}\\w+)?";

  var regString = regString.replace("#before#",this.before).replace("#term#", $tw.utils.escapeRegExp(this.term) ) .replace("#after#",this.after);
  this.regexp = new RegExp(regString,"ig");
  //console.log(regString);
};
/*
execute the regular expresion
*/
contextWidget.prototype.executeRegexp = function()
{
  var text = this.wiki.getTiddlerText(this.tiddler), match,results = new Array();
  while( (match = this.regexp.exec( text ) ) && (results.length < this.maxMatches) )
      { results.push(match) }
  //console.log("matches",results);
  return results;
};

/*
compose the results
matches : array of match objects from regular expression execute
*/
contextWidget.prototype.composeResults = function(matches){
 var result=[], self=this, node = this.domNode,
 dots = textNode("...\n"),
 span = matchedNode( this.term );

  for(var i=0; i < matches.length; i++){
   processMatch( matches[i] );
 }
  
  function processMatch(match){
    if( match.index !== 0) node.appendChild( dots.cloneNode(true) );
    for( var i=1;i<match.length;i++ ) {//match[0] full matched text (all groups together)
      if( match[i] ) {
        if ( match[i].toLowerCase() == self.term.toLowerCase() ) 
          node.appendChild( match[i] == self.term ? span.cloneNode(true) : matchedNode( match[i] ) )
          else
            node.appendChild( textNode( match[i]) )
      }
    }
    if( match.index + match[0].length < match.input.length) node.appendChild( dots.cloneNode(true) );
  }
  
  function textNode(text){ return self.document.createTextNode(text) }
  function matchedNode(text) { 
    var node = self.document.createElement("span"); node.appendChild( textNode(text) );  node.className = self.matchedClass;
    return node }
  
};
/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
contextWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(changedAttributes.tiddler || changedAttributes.term || changedAttributes.length || changedAttributes.matchedClass) {
		this.refreshSelf();
		return true;
	}
    return this.refreshChildren(changedTiddlers);
};

exports.context = contextWidget;

})();