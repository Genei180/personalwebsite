///Point in 3D Space
var Vertex = function(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.toString = function(){
		return ("("+this.x + ","+this.y+","+this.z+")").toString();
	} 
}

//TODO: add Vertex Class
function crossProd(a, b){
	cx = (a.y * b.z) - (a.z * b.y);
	cy = (a.z * b.x) - (a.x * b.z);
	cz = (a.x * b.y) - (a.y * b.x);
	return new Vertex(cx, cy, cz);
}
///Subtract Vectors AB = b - a;
function subtract(a, b){
	cx = b.x - a.x;
	cy = b.y - a.y;
	cz = b.z - a.z;	
	return new Vertex(cx, cy, cz);
}
function multiply(a, b){
	cx = a.x * b.x;
	cy = a.y * b.y;
	cz = a.z * b.z;	
	return new Vertex(cx, cy, cz);
}
function magnitude(a){
	return Math.sqrt(a.x*a.x + a.y*a.y + a.z*a.z);
}
function edgeFunction(a, b, c){
	return (c.x - a.x) * (b.y - a.y) - (c.y - a.y) * (b.x - a.x); 
}
//-----------------------------------

///Stores Framebuffer and Width/Height
var CanvasData = function(ctx){
	var w = ctx.canvas.width;
	var h = ctx.canvas.height;
	this.width = w;
	this.height= h;
	this.framebuffer = ctx.createImageData(w, h);
}

///Point in 2D (Screen)Space
var Vertex2D = function(x, y) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    
    this.toString = function(){
		return ("("+this.x + ","+this.y+")").toString();
	} 
}

//Creates a Basic Cube out of Vertices
var Cube = function(center, size ) {
	var d = size/2;

	//Generate the Vertices
	this.vertices = [
        new Vertex(center.x - d, center.y - d, center.z - d),
        new Vertex(center.x + d, center.y - d, center.z - d),
        new Vertex(center.x + d, center.y + d, center.z - d),
        new Vertex(center.x - d, center.y + d, center.z - d),
        new Vertex(center.x - d, center.y - d, center.z + d),
        new Vertex(center.x + d, center.y - d, center.z + d),
        new Vertex(center.x + d, center.y + d, center.z + d),
        new Vertex(center.x - d, center.y + d, center.z + d)
    ];

    this.triangels = [
        [this.vertices[0], this.vertices[1], this.vertices[2]],
        [this.vertices[0], this.vertices[2], this.vertices[3]],
        [this.vertices[1], this.vertices[5], this.vertices[2]],
        [this.vertices[2], this.vertices[5], this.vertices[6]],
        [this.vertices[4], this.vertices[6], this.vertices[5]],
        [this.vertices[4], this.vertices[7], this.vertices[6]],
        [this.vertices[0], this.vertices[3], this.vertices[4]],
        [this.vertices[3], this.vertices[7], this.vertices[4]],
        [this.vertices[0], this.vertices[4], this.vertices[1]],
        [this.vertices[1], this.vertices[4], this.vertices[5]],
        [this.vertices[3], this.vertices[2], this.vertices[6]],
        [this.vertices[3], this.vertices[6], this.vertices[7]]
    ];
}

///Orthographic Project Funktion
///Put in Vertex to Project
///deltaX and deltaY give Position of Origin in Screen Space
///Return X and Y in Screen Coordinates
function project(M, deltaX, deltaY) {
    return new Vertex2D(M.x + deltaX, -M.y+deltaY);
}

//TODO:
//Add Rasterisation
//Add Z-Buffer
///Render Function
///Takes in a List of Objects to Render, a Canvas, Set Origin Coordinates in Camera View, 
///And Paints them to a Canvas
function render(objects, ctx, dx, dy) {
	var cData = new CanvasData(ctx);
	 
	//Clear Frame
	ctx.clearRect(0, 0, 2*dx, 2*dy);
	
    // For each object
    for (var i = 0, n_obj = objects.length; i < n_obj; i++) {
        // For each face
        for (var j = 0, n_faces = objects[i].triangels.length; j < n_faces; j++) {
            // Current face
            var triangle = objects[i].triangels[j];
		
		
			var triangleNorm = crossProd(subtract(triangle[0],triangle[1]) , subtract(triangle[0],triangle[2]));
			//TODO:
			//Backface Culling Only Works if the Camera is Static
			if(triangleNorm.z <= 0){
				ctx.beginPath();
				// Draw the Edges of the Triangels
				for (var k = 0, n_vertices = triangle.length; k < n_vertices; k++) {
					P = project(triangle[k], dx, dy);
					ctx.lineTo(P.x, P.y);
				}
            
				//Close the path and draw the face
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
				
				
				//Create Bounding Box
				var vert1 = project(triangle[0], dx, dy);
				var vert2 = project(triangle[1], dx, dy);
				var vert3 = project(triangle[2], dx, dy);
				
				var xmin = vert1.x < vert2.x ? (vert1.x < vert3.x ?  vert1.x : vert3.x) : (vert2.x < vert3.x ?  vert2.x : vert3.x);
				var ymin = vert1.y < vert2.y ? (vert1.y < vert3.y ?  vert1.y : vert3.y) : (vert2.y < vert3.y ?  vert2.y : vert3.y);
				var xmax = vert1.x > vert2.x ? (vert1.x > vert3.x ?  vert1.x : vert3.x) : (vert2.x > vert3.x ?  vert2.x : vert3.x);
				var ymax = vert1.y > vert2.y ? (vert1.y > vert3.y ?  vert1.y : vert3.y) : (vert2.y > vert3.y ?  vert2.y : vert3.y);
				
				//var iX = 0, iY = 0;
				var size = edgeFunction(project(triangle[0],dx, dy), project(triangle[1],dx, dy), project(triangle[2],dx, dy));
				
				// console.time("TriangleBoundingBox");
				// Illiterate thrue Rendering Box
				// for(var x = Math.round(xmin); x < Math.round(xmax); x++){
				// 	for(var y = Math.round(ymin); y < Math.round(ymax); y++){
						
						//TODO: Check if this is realy in Screenspace or WorldSpace
						//var pos =  new Vertex(x, y, 0);
						//var vec1 = edgeFunction(project(triangle[0],dx, dy), project(triangle[1],dx, dy), pos);
						
						//var vec2 = edgeFunction(project(triangle[2],dx, dy), project(triangle[0],dx, dy), pos);
						
						//var vec3 = size - vec1 - vec2;//edgeFunction(project(triangle[1],dx, dy), project(triangle[2],dx, dy), pos);
						
						
						//if(vec1 <= 0 && vec2 <= 0 && vec3 <= 0){
							//vec1 /= size;
							//vec2 /= size;
							//vec3 /= size;
							
							//need to Handle Overlapping
							// console.time();
							// plotPixel(cData, x, y, 255, 0, 255, 255);
							// console.timeEnd();
						//}
					// }
				// }
				// console.timeEnd("TriangleBoundingBox");
			}
        }
    }
    // For Manupulating the Framebuffer
	// ctx.putImageData(cData.framebuffer, 0, 0);
}

///Plot a Singel Pixel in the Canvas
function plotPixel(canvasData, x, y, r, g, b, a){
	var i = (y* canvasData.width + x)*4;
	
	canvasData.framebuffer.data[i++] = r;
	canvasData.framebuffer.data[i++] = g;
	canvasData.framebuffer.data[i++] = b;
	canvasData.framebuffer.data[i]   = a;
} 

function drawVertex(ctx, center, radius, fill){
	vertexFillStyle = 'rgba(0,0,0,1)';
	NormaleStyle = ctx.fillStyle;
	ctx.fillStyle = vertexFillStyle;
	
	ctx.beginPath();
	ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, true);
	ctx.closePath();
	ctx.stroke();
	
	if(fill){
		ctx.fill();
	}
	
	ctx.fillStyle = NormaleStyle;
}

(function() {
    // Fix the canvas width and height
    var canvas = document.getElementById('cnv');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    //Put Origin in the Center of the Camera
    var dx = canvas.width / 2;
    var dy = canvas.height / 2;

    // Objects style
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillStyle = 'rgba(0, 230, 255, 0.3)';

    // Create the cube
    var cube_center = new Vertex(0, 0, 0);
    var cube = new Cube(cube_center, dx/2);
    var objects = [cube];

    // First render
    render(objects, ctx, dx, dy);
	
	// Events
    var mousedown = false;
    var mx = 0;
    var my = 0;

    canvas.addEventListener('mousedown', initMove);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', stopMove);
	
	//TODO: Use Quaternion
    // Rotate a vertice
    function rotate(M, center, theta, phi) {
        // Rotation matrix coefficients
        var ct = Math.cos(theta);
        var st = Math.sin(theta);
        var cp = Math.cos(phi);
        var sp = Math.sin(phi);

        // Rotation
        var x = M.x - center.x;
        var y = M.y - center.y;
        var z = M.z - center.z;

        M.x = ct * x - st * cp * y + st * sp * z + center.x;
        M.y = st * x + ct * cp * y - ct * sp * z + center.y;
        M.z = sp * y + cp * z + center.z;
    }


    // Initialize the movement
    function initMove(evt) {
        clearTimeout(autorotate_timeout);
        mousedown = true;
        mx = evt.clientX;
        my = evt.clientY;
    }

    function move(evt) {
        if (mousedown) {
            var theta = (evt.clientX - mx)/30 * Math.PI / 360;
            var phi = (evt.clientY - my)/30 * Math.PI / 360;
            
            for (var i = 0; i < 8; ++i)
                rotate(cube.vertices[i], cube_center, theta, phi);

            // dx = evt.clientX;
            // dy = evt.clientY;

            render(objects, ctx, dx, dy);
        }
    }

    function stopMove() {
        mousedown = false;
        autorotate_timeout = setTimeout(autorotate, 2000);
    }

    function autorotate() {
        for (var i = 0; i < 8; ++i)
            rotate(cube.vertices[i], cube_center, -Math.PI / 720*2, Math.PI / 720);

        render(objects, ctx, dx, dy);

        autorotate_timeout = setTimeout(autorotate, 30);
    }
    autorotate_timeout = setTimeout(autorotate, 2000);

})();
