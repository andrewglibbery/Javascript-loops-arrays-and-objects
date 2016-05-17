var html = '';
var rgbColor;

function getRandomColor () {
	var randomColor = Math.floor(Math.random() * 256 );
	return randomColor;
}



for (var i = 0; i < 100; i += 1) {
rgbColor = 'rgb(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

};

document.write(html);