var Bird = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v(   3,   0,   0 );
	v( - 3, - 2,   1 );
	v( - 3,   0,   0 );
	v( - 3, - 2, - 1 );

	v(   0,   2, - 6 );
	v(   0,   2,   6 );
	v(   2,   0,   0 );
	v( - 3,   0,   0 );

	f3( 0, 2, 1 );
	// f3( 0, 3, 2 );

	f3( 3, 6, 3 );
	f3( 3, 4, 3 );

	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vector3( x, y, z ) );

	}

	function f3( a, b, c ) {

		scope.faces.push( new THREE.Face3( a, b, c ) );

	}

}

Bird.prototype = Object.create( THREE.Geometry.prototype );
Bird.prototype.constructor = Bird;
