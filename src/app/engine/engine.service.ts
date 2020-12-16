import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { WEBGL } from 'three/examples/jsm/WebGL.js';
import { Scene, Camera } from 'three';
const fontJson = require( "./../../assets/fonts/aldoapache.typeface.json" );


export type RenderScene = {
  name:string,
  scene: THREE.Scene,
  camera:THREE.PerspectiveCamera
}
@Injectable({ providedIn: 'root' })
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;

  private cube: THREE.Mesh;
  private planeBack: THREE.Mesh;

  private frameId: number = null;

  private scenes : RenderScene[] = new Array();
  public constructor(private ngZone: NgZone) {}
  private uniforms;
  private material;
  private materialBack;
  private time =0;
  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }
  public getScene(){
    return this.scene;
  }
  public getRenderer (){
    return this.renderer;
  }
  public getCanvas(){
    return this.canvas;
  }
  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    if ( WEBGL.isWebGL2Available() === false ) {

      document.body.appendChild( WEBGL.getWebGL2ErrorMessage() );
    
    }
console.log(canvas);
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
  

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

   // this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
        this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 1;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
    this.scene.add(this.light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    var shader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `;
    const loader = new THREE.TextureLoader();
    const texture = loader.load('./../../assets/pics/profilepic.png');
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const textureCRTAmstrad = loader.load('./../../assets/pics/amstradcutted.png');
    textureCRTAmstrad.minFilter = THREE.NearestFilter;
    textureCRTAmstrad.magFilter = THREE.NearestFilter;
    textureCRTAmstrad.wrapS = THREE.RepeatWrapping;
    textureCRTAmstrad.wrapT = THREE.RepeatWrapping;
    


    
    this.uniforms = {
      iTime: { value: 0.1 },
      iResolution: { type: "v3", value: new THREE.Vector3() },
      U_mouse: { type: "v2", value: new THREE.Vector2() },
      iChannel0: { value: texture },
  };

    var fs = ` 
    // Overly satisfying by nimitz (twitter: @stormoid)
    // https://www.shadertoy.com/view/Mts3zM
    // License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
    // Contact the author for other licensing options
    
    //This might look like a lot of code but the base implementation of the gif itself is ~10loc
    #include <common>
 
    uniform vec3 iResolution;
    uniform float iTime;
    #define time iTime*1.2
    #define pi 3.14159265
    
    #define NUM 20.
    #define PALETTE vec3(.0, 1.4, 2.)+1.5
    
    #define COLORED
    #define MIRROR
    //#define ROTATE
    #define ROT_OFST
    #define TRIANGLE_NOISE
    
    //#define SHOW_TRIANGLE_NOISE_ONLY
    
    mat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,-s,s,c);}
    float tri(in float x){return abs(fract(x)-.5);}
    vec2 tri2(in vec2 p){return vec2(tri(p.x+tri(p.y*2.)),tri(p.y+tri(p.x*2.)));}
    mat2 m2 = mat2( 0.970,  0.242, -0.242,  0.970 );
    
    //Animated triangle noise, cheap and pretty decent looking.
    float triangleNoise(in vec2 p)
    {
        float z=1.5;
        float z2=1.5;
      float rz = 0.;
        vec2 bp = p;
      for (float i=0.; i<=3.; i++ )
      {
            vec2 dg = tri2(bp*2.)*.8;
            dg *= mm2(time*.3);
            p += dg/z2;
    
            bp *= 1.6;
            z2 *= .6;
        z *= 1.8;
        p *= 1.2;
            p*= m2;
            
            rz+= (tri(p.x+tri(p.y)))/z;
      }
      return rz;
    }
    
    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
       float aspect = iResolution.x/iResolution.y;
       float w = 50./sqrt(iResolution.x*aspect+iResolution.y);
    
        vec2 p = fragCoord.xy / iResolution.xy*2.-1.;
      p.x *= aspect;
        p*= 1.05;
        vec2 bp = p;
        
        #ifdef ROTATE
        p *= mm2(time*.25);
        #endif
        
        float lp = length(p);
        float id = floor(lp*NUM+.5)/NUM;
        
        #ifdef ROT_OFST
        p *= mm2(id*11.);
        #endif
        
        #ifdef MIRROR
        p.y = abs(p.y); 
        #endif
        
        //polar coords
        vec2 plr = vec2(lp, atan(p.y, p.x));
        
        //Draw concentric circles
        float rz = 1.-pow(abs(sin(plr.x*pi*NUM))*1.25/pow(w,0.25),2.5);
        
        //get the current arc length for a given id
        float enp = plr.y+sin((time+id*5.5))*1.52-1.5;
        rz *= smoothstep(0., 0.05, enp);
        
        //smooth out both sides of the arcs (and clamp the number)
        rz *= smoothstep(0.,.022*w/plr.x, enp)*step(id,1.);
        #ifndef MIRROR
        rz *= smoothstep(-0.01,.02*w/plr.x,pi-plr.y);
        #endif
        
        #ifdef TRIANGLE_NOISE
        rz *= (triangleNoise(p/(w*w))*0.9+0.4);
        vec3 col = (sin(PALETTE+id*5.+time)*0.5+0.5)*rz;
        col += smoothstep(.4,1.,rz)*0.15;
        col *= smoothstep(.2,1.,rz)+1.;
        
        #else
        vec3 col = (sin(PALETTE+id*5.+time)*0.5+0.5)*rz;
        col *= smoothstep(.8,1.15,rz)*.7+.8;
        #endif
        
        #ifndef COLORED
        col = vec3(dot(col,vec3(.7)));
        #endif
        
        #ifdef SHOW_TRIANGLE_NOISE_ONLY
        col = vec3(triangleNoise(bp));
        #endif
        
      fragColor = vec4(col,1.0);
    }
      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    
    `;
    var fsNoise = 
      `
      // Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 5

float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 st = gl_FragCoord.xy/iResolution.xy*3.;
    // st += st * abs(sin(iTime*0.1)*3.0);
    vec3 color = vec3(0.0);

    vec2 q = vec2(0.);
    q.x = fbm( st + 0.00*iTime);
    q.y = fbm( st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*iTime );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*iTime);

    float f = fbm(st+r);

    color = mix(vec3(0.101961,0.619608,0.666667),
                vec3(0.666667,0.666667,0.498039),
                clamp((f*f)*4.0,0.0,1.0));

    color = mix(color,
                vec3(0,0,0.164706),
                clamp(length(q),0.0,1.0));

    color = mix(color,
                vec3(0.666667,1,1),
                clamp(length(r.x),0.0,1.0));

    gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color,1.);
}
`;
    this.material = new THREE.ShaderMaterial( {
      uniforms:this.uniforms,
      vertexShader: shader.trim(),
      fragmentShader: fsNoise.trim()
    } );
    this.materialBack = 
    new THREE.ShaderMaterial( {
      uniforms:this.uniforms,
      vertexShader: shader.trim(),
      fragmentShader: fs.trim()
    } );
    const plane = new THREE.PlaneBufferGeometry(10, 10);
    plane.scale(1.5,1.5,1);
    const material2 = new THREE.MeshBasicMaterial({
        color: 0x222222,
        //color:'red'
    });
    const font = new THREE.Font(fontJson);
    var textGeo = new THREE.TextGeometry( "Fullstack Developer", {

      font: font,

      size: 0.5,
      height:0.1,
      

  } );

   this.cube = new THREE.Mesh( textGeo, [this.material,material2] );
 // this.cube.scale.set(0.5,0.5,1);
   this.planeBack = new THREE.Mesh(plane, this.materialBack);
   // this.cube = new THREE.Mesh( geometry, this.material );
   // this.scene.add(this.cube);
  /* var x= 100;
   var y= 100;
   var z=100;*/
   
      this.cube.position.set(-2.5,0,-2 );
      //this.planeBack.position.set(0,0,-2);
     // this.scene.add(this.planeBack);
      this.scene.add(this.cube);
      //var axesHelper = new THREE.AxesHelper( 5 );
      //this.scene.add( axesHelper );
      var planeHelp = new THREE.Plane( new THREE.Vector3( 1, 1, 0.2 ), 3 );
      var helper = new THREE.PlaneHelper( planeHelp, 1, 0xffffff );
      //this.scene.add( helper );
      this.addSceneToRender({name:'background',scene:this.scene,camera:this.camera}) ;

  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    //console.log(this.uniforms.iTime.value);
    this.material.uniforms.iResolution.value.set(this.canvas.width, this.canvas.height, 1);
    this.uniforms.iTime.value +=0.02;
    //console.log('render inside');
    //console.log(this.cube.material);
   // this.cube.rotation.x += 0.01;
   // this.cube.rotation.y += 0.01;
   
   this.renderAllscenes();
   console.log(window.innerHeight, window.innerWidth)
   //this.renderer.render(this.scene, this.camera);
    
  }
  
  public addSceneToRender(scene:RenderScene){
    this.scenes.push(scene);
    console.log(this.scenes);
  }
  
  public renderAllscenes():void{
    this.time+=0.1;
    this.renderer.setScissorTest(false);
    this.renderer.clear(true, true);
    this.renderer.setScissorTest(true);
    this.renderer.setSize( 1000,230 );
    for (let renderScene of this.scenes){
      renderScene.camera.updateProjectionMatrix();
      
     if (renderScene.name==='background') {
       //console.log(renderScene.camera.position);
       this.renderer.setViewport(0,0,800,300);
       this.renderer.setScissor(0,0,800,300);
       renderScene.camera.lookAt((Math.sin(this.time)*0.01),0,0);
       this.renderer.render(renderScene.scene, renderScene.camera);
      } else {
        this.renderer.setScissor(800, 0,200,200);
        renderScene.camera.aspect = 1;
        this.renderer.setViewport(800, 0,200,200);
       // renderScene.camera.lookAt((Math.sin(this.time)*0.01),0,0);
       this.renderer.render(renderScene.scene, renderScene.camera);
      }
      
    }
  }
  public resize(): void {
    
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    /*this.camera.updateProjectionMatrix();
    
    this.camera.aspect = window.innerWidth / window.innerHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize( window.innerWidth, window.innerHeight );
    const needResize = canvas.width !== width || canvas.height !== height;*/
    //if (needResize) {
      console.log("resizing", this.canvas.width);
     // this.renderer.setSize(width, height, false);
    //}
    
   this.renderer.setSize( this.canvas.width, this.canvas.height );
  }
}
