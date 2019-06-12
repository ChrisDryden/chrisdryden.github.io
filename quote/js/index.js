setInterval(() => {
    $(document).ready(function() {
        var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00,#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
        var rand = Math.floor(Math.random() * colors.length);
        $('button, .footer').css("background-color", colors[rand]);
    });
}, 2000)

function displayContent() {
	document.getElementById('islam').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById('quote').innerHTML = 'ALLAH IS THE GREATEST'
	document.getElementById("message").remove();
}
