"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    // ============================================
    // SCENE
    // ============================================

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    )

    // Start far away
    camera.position.z = 500

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    )

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    )

    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"

    container.appendChild(renderer.domElement)

    // ============================================
    // STAR FIELD
    // ============================================

    const starCount = 2200

    const positions = new Float32Array(
      starCount * 3
    )

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3

      positions[i3] =
        (Math.random() - 0.5) * 1800

      positions[i3 + 1] =
        (Math.random() - 0.5) * 1200

      positions[i3 + 2] =
        (Math.random() - 0.5) * 1800
    }

    const geometry = new THREE.BufferGeometry()

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    )

    const material =
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

    const stars = new THREE.Points(
      geometry,
      material
    )

    scene.add(stars)

    // ============================================
    // DISTANT STARS
    // ============================================

    const distantCount = 100

    const distantPositions =
      new Float32Array(
        distantCount * 3
      )

    for (let i = 0; i < distantCount; i++) {
      const i3 = i * 3

      distantPositions[i3] =
        (Math.random() - 0.5) * 2200

      distantPositions[i3 + 1] =
        (Math.random() - 0.5) * 1500

      distantPositions[i3 + 2] =
        -500 - Math.random() * 1000
    }

    const distantGeometry =
      new THREE.BufferGeometry()

    distantGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        distantPositions,
        3
      )
    )

    const distantMaterial =
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

    const distantStars =
      new THREE.Points(
        distantGeometry,
        distantMaterial
      )

    scene.add(distantStars)

    // ============================================
    // MOUSE PARALLAX
    // ============================================

    let mouseX = 0
    let mouseY = 0

    let targetX = 0
    let targetY = 0

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      targetX =
        (event.clientX /
          window.innerWidth -
          0.5) *
        2

      targetY =
        (event.clientY /
          window.innerHeight -
          0.5) *
        2
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    )

    // ============================================
    // SCROLL ZOOM
    // ============================================

    let scrollProgress = 0

    const handleScroll = () => {
      const maxScroll =
        document.documentElement
          .scrollHeight -
        window.innerHeight

      if (maxScroll <= 0) {
        scrollProgress = 0
        return
      }

      scrollProgress =
        window.scrollY / maxScroll
    }

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    )

    handleScroll()

    // ============================================
    // ANIMATION
    // ============================================

    const clock = new THREE.Clock()

    let animationFrame = 0

    const animate = () => {
      const elapsed =
        clock.getElapsedTime()

      // Smooth mouse
      mouseX +=
        (targetX - mouseX) * 0.025

      mouseY +=
        (targetY - mouseY) * 0.025

      // ========================================
      // SPACE ROTATION
      // ========================================

      stars.rotation.y =
        elapsed * 0.006

      stars.rotation.x =
        elapsed * 0.0015

      distantStars.rotation.y =
        -elapsed * 0.002

      distantStars.rotation.x =
        elapsed * 0.0005

      // ========================================
      // SCROLL ZOOM
      // ========================================

      // 500 = starting position
      // 100 = maximum zoom
      //
      // Change 400 if you want more/less zoom.

      const targetZ =
        500 -
        scrollProgress * 400

      camera.position.z +=
        (targetZ - camera.position.z) *
        0.045

      // ========================================
      // MOUSE MOVEMENT
      // ========================================

      camera.position.x +=
        (mouseX * 18 -
          camera.position.x) *
        0.02

      camera.position.y +=
        (-mouseY * 12 -
          camera.position.y) *
        0.02

      camera.lookAt(0, 0, 0)

      renderer.render(
        scene,
        camera
      )

      animationFrame =
        requestAnimationFrame(
          animate
        )
    }

    animate()

    // ============================================
    // RESIZE
    // ============================================

    const handleResize = () => {
      camera.aspect =
        window.innerWidth /
        window.innerHeight

      camera.updateProjectionMatrix()

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      )

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          2
        )
      )
    }

    window.addEventListener(
      "resize",
      handleResize
    )

    // ============================================
    // CLEANUP
    // ============================================

    return () => {
      cancelAnimationFrame(
        animationFrame
      )

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )

      window.removeEventListener(
        "scroll",
        handleScroll
      )

      window.removeEventListener(
        "resize",
        handleResize
      )

      geometry.dispose()
      material.dispose()

      distantGeometry.dispose()
      distantMaterial.dispose()

      renderer.dispose()

      if (
        renderer.domElement.parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement
        )
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}