import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { EngineService } from '../engine.service';
@Injectable({ providedIn: 'root' })
export class ProfilepicService implements OnDestroy {

  private planeBack: THREE.Mesh;

  private frameId: number = null;

  public constructor(private ngZone: NgZone, private engineService:EngineService) {}
  private uniforms;
  private material;
  private materialBack;
  private canvas;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(): void {
   
    this.canvas = this.engineService.getCanvas();  
    this.scene = new THREE.Scene();

    this.camera =// new THREE.PerspectiveCamera(50,1,0.1,1000);
        this.camera = new THREE.PerspectiveCamera(
      75, 1, 0.1, 1000
    );
    this.camera.position.z = 1;
    this.scene.add(this.camera);

    
    // const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/bayer.png');
    


   
    
    //const cube = new THREE.Mesh(cubeGeo,this.material);
   // this.planeBack.position.set(0,-12,-2 );
    this.camera.position.set(0, 0, 2);
    this.camera.lookAt(0, 0, 0);

    this.scene.add(this.createAmstradPic());
    this.scene.add(this.createProfilePic());

    this.engineService.addSceneToRender({name:'profile_pic',scene:this.scene,camera:this.camera}) ;
  }
  private createAmstradPic():THREE.Mesh{
    const loader = new THREE.TextureLoader();
        
    const textureAmstradCRT = loader.load('./../../assets/pics/amstradcutted.png');
    textureAmstradCRT.minFilter = THREE.LinearMipMapLinearFilter;
    textureAmstradCRT.magFilter = THREE.LinearMipMapLinearFilter;
    textureAmstradCRT.wrapS = THREE.RepeatWrapping;
    textureAmstradCRT.wrapT = THREE.RepeatWrapping;
    
    var shader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `;
    var uniforms = {
      iTime: { value: 0.1 },
      iResolution: { type: "v3", value: new THREE.Vector3(1,1,1) },
      U_mouse: { type: "v2", value: new THREE.Vector2() },
      iChannel0: { value: textureAmstradCRT },
    };
    var fs = `
    uniform sampler2D iChannel0;
    varying vec2 vUv;

    void main()
    {
        gl_FragColor = texture2D(iChannel0, vUv); 
    }
    `;
    var material = new THREE.ShaderMaterial( {
      uniforms:uniforms,
      vertexShader: shader.trim(),      
      fragmentShader: fs.trim(),
      transparent: true
    } );
    const plane2 = new THREE.PlaneBufferGeometry(3, 3);
    var planeBack = new THREE.Mesh(plane2, material);
    return planeBack;
  }
  private  createProfilePic():THREE.Mesh{
    
    const loader = new THREE.TextureLoader();
    const texture = loader.load('./../../assets/pics/profilepic.jpg');
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearMipMapLinearFilter;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    this.uniforms = {
      iTime: { value: 0.1 },
      iResolution: { type: "v3", value: new THREE.Vector3(1,1,1) },
      U_mouse: { type: "v2", value: new THREE.Vector2() },
      iChannel0: { value: texture },
    };
    var fs = ` 
    uniform sampler2D iChannel0;
    uniform vec3 iResolution;
    varying vec2 vUv;
    uniform float iTime;
    //
    vec3 scanline(vec2 coord, vec3 screen)
    {
      screen.rgb -= sin(
        (coord.y + (iTime*29.0))
        ) * 0.02;
      return screen;
    }
    
    vec2 crt(vec2 coord, float bend)
    {
      // put in symmetrical coords
      coord = (coord - 0.5) * 2.0;
    
      coord *= 1.1;	
    
      // deform coords
      coord.x *= 1.0 + pow((abs(coord.y) / bend), 2.0);
      coord.y *= 1.0 + pow((abs(coord.x) / bend), 2.0);
    
      // transform back to 0.0 - 1.0 space
      coord  = (coord / 2.0) + 0.5;
    
      return coord;
    }
    
    vec3 sampleSplit(sampler2D tex, vec2 coord)
    {
      vec3 frag;
     
      frag.r = texture2D(tex, vec2(coord.x - 0.01 * sin(iTime), coord.y)).r;
      frag.g = texture2D(tex, vec2(coord.x , coord.y)).g;
      frag.b = texture2D(tex, vec2(coord.x + 0.01 * sin(iTime), coord.y)).b;
   
      return frag;
    }
    float scanlines (vec2 uv){
      return sin(uv.y*200.+iTime*7.0);
    }
    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
      vec2 uv = fragCoord.xy / iResolution.xy;
      // uv.y = 1.0 - uv.y; // flip tex
      vec2 crtCoords = crt(uv, 3.2);
      //vec2 crtCoords = uv;
    
      // shadertoy has tiling textures. wouldn't be needed
      // if you set up your tex params properly
      if (crtCoords.x < 0.0 || crtCoords.x > 1.0 || crtCoords.y < 0.0 || crtCoords.y > 1.0)
        discard;
    
      // Split the color channels
      fragColor.rgb = sampleSplit(iChannel0, crtCoords);
    
      // HACK: this bend produces a shitty moire pattern.
      // Up the bend for the scanline
      // vec2 screenSpace = uv * crtCoords;
      // fragColor.rgb = scanline(screenSpace, fragColor.rgb);
      fragColor.rgb -= vec3(scanlines(vUv))*0.02;
    }
   
    void main() {
      mainImage(gl_FragColor, vUv);
    }
    
    `;
    var shader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `;
    this.material = new THREE.ShaderMaterial( {
      uniforms:this.uniforms,
      vertexShader: shader.trim(),
      fragmentShader: fs.trim()
    } );
    const plane = new THREE.PlaneBufferGeometry(1.8, 1.8);
    plane.translate(-0.05,0.48,-0.05);
    this.planeBack = new THREE.Mesh(plane, this.material);
    return this.planeBack;
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
    });
  }


  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    //this.engineService.getRenderer().setSize(100,100);
  //  this.engineService.getRenderer().render(this.scene, this.camera);

  //this.engineService.getRenderer().setViewport(0,0,100,100)
    //this.material.uniforms.iResolution.value.set(this.canvas.width, this.canvas.height, 1);
    this.uniforms.iTime.value +=0.05;
   // if (this.uniforms.iTime.value>5) this.uniforms.iTime.value=0;
  }
}

