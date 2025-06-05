<template>
  <div ref="container" class="galaxy-container"></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Galaxy3D",
  mounted() {
    this.initScene();
    this.createParticles();
    this.animate();
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 30;

      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(this.renderer.domElement);
    },

    createParticles() {
      const geometry = new THREE.BufferGeometry();
      const particles = 5000;

      const positions = new Float32Array(particles * 3);
      const colors = new Float32Array(particles * 3);
      const sizes = new Float32Array(particles);

      const color = new THREE.Color();

      for (let i = 0; i < particles; i++) {
        // 随机位置
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

        // 随机颜色
        color.setHSL(Math.random() * 0.2 + 0.5, 0.8, Math.random() * 0.2 + 0.5);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        // 随机大小
        sizes[i] = Math.random() * 2;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      this.particleSystem = new THREE.Points(geometry, material);
      this.scene.add(this.particleSystem);
    },

    animate() {
      requestAnimationFrame(this.animate);

      // 粒子缓慢旋转
      if (this.particleSystem) {
        this.particleSystem.rotation.y += 0.0005;
      }

      this.renderer.render(this.scene, this.camera);
    },
  },
  beforeDestroy() {
    if (this.renderer) {
      this.renderer.dispose();
    }
  },
};
</script>

<style scoped>
.galaxy-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to bottom, #000428, #004e92);
}
</style>
