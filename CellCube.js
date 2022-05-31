		// Cells in Russian Cube
		function CellCube(parent,isCast){
			this.parent = parent
			var oMaterial = this.getcubeMate(isCast)
			var oGeo = this.cubeGeo
			if(isCast){
				var oGeo = this.castGeo
			}else{
				var oGeo = this.cubeGeo
			}
			THREE.Mesh.call(this,oGeo,oMaterial)
		}

		CellCube.prototype={
			constructor: CellCube,
			// Get the cube geometry
			cubeGeo: new THREE.CubeGeometry(1,1,1),
			castGeo: new THREE.CubeGeometry(0.98,0.98,0.98),
			// Determine the color of the material of the small square and obtain the corresponding material
			getcubeMate: function(isCast){
				var color,mate
				if(this.parent.catagory == "L"){
					color = 0xf47a55
				}else if(this.parent.catagory == "X"){
					color = 0xffd400
				}else if(this.parent.catagory == "T"){
					color = 0x78cdd1
				}else if(this.parent.catagory == "I"){
					color = 0xb69968
				}else if(this.parent.catagory == "Z"){
					color = 0x563624
				}
				isCast?mate={color:0x666666}:mate={color: color}
				var cubeMaterial = new THREE.MeshLambertMaterial(mate)
				return cubeMaterial
			},
			// Determine the layer number of the small block
			getFixd: function(){
				return [this.position.x+this.parent.position.x, this.position.y+this.parent.position.y, this.position.z+this.parent.position.z]
			},
			__proto__: new THREE.Mesh()
		}
