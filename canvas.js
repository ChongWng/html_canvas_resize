$(document).ready(function () {

    var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext("2d");
    c.fillStyle = "rgba(255, 255, 0, 0.5)";
    c.fillRect(100, 100, 100, 100);

    //Line
    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(200, 200);
    c.lineTo(300, 50);
    c.strokeStyle = "#ff3344";
    c.stroke();

    //Arc / Circle
    for (var j = 0; j < 3; j++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var r = Math.random() * Math.min(window.innerWidth, window.innerHeight) / 2;
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI * 2, true);
        c.strokeStyle = "blue";
        c.stroke();
        c.fillStyle = "rgba(255, 0, 255, 0.2)";
        c.fill();
    }

    //A moving forward and backward circle with clear path
    // var x = 200;
    // var dx = 4;
    // var radius = 30;
    // function animate(){
    //     requestAnimationFrame(animate);
    //     c.clearRect(0, 169, window.innerWidth, 62);
    //     c.beginPath();
    //     c.arc(x, 200, radius, 0, Math.PI * 2, true);
    //     c.strokeStyle = "#ff3344";
    //     c.stroke();
    //     if(x + radius > innerWidth || x - radius < 0){
    //         dx = -dx;
    //     }
    //     x += dx;
    // }
    // animate();

    function Circle(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function(){
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            c.strokeStyle = "#ff3344";
            c.stroke();
        }

        this.update = function () {
            if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.dx = -this.dx;
            }
            if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }



    var circleArray = [];
    var circleLength = 50;
    for(var i = 0; i < circleLength; i++){
        var radius = 30;
        var dx = (Math.random() - 0.5) * 1.1;
        var dy = (Math.random() - 0.5) * 1.1;
        var x1 = Math.random() * (innerWidth - radius * 2) + radius;
        var y1 = Math.random() * (innerHeight - radius * 2) + radius;

        //


        circleArray.push(new Circle(x1, y1, dx, dy, radius));
    }
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for(var i = 0; i<circleArray.length; i++){
            circleArray[i].update();
        }
    }
    animate();

})