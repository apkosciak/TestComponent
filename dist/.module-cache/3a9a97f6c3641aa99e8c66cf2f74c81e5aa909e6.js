var React = require('react');

var HelloWorld = React.createClass({displayName: "HelloWorld",
	render: function(){
		return (
			React.createElement("div", null, 
				"Hello World !"
			)
		);
	}
});

module.exports = HelloWorld;