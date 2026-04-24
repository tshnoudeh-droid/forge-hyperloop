'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HeroGlobeProps {
  size?: number
}

function ll(lon: number, lat: number): [number, number] {
  return [(lon + 180) / 360 * 960, (90 - lat) / 180 * 480]
}

function createEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 960
  canvas.height = 480
  const ctx = canvas.getContext('2d')!

  // Deep dark ocean — works with black background
  ctx.fillStyle = '#080e18'
  ctx.fillRect(0, 0, 960, 480)

  const drawLand = (points: [number, number][], fill = '#1a1a14') => {
    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1])
    ctx.closePath()
    ctx.fillStyle = fill
    ctx.fill()
  }

  // North America
  drawLand([
    ll(-168,60), ll(-160,70), ll(-138,70), ll(-118,68), ll(-90,72),
    ll(-70,73), ll(-62,60), ll(-58,50), ll(-67,44), ll(-70,42),
    ll(-76,35), ll(-82,30), ll(-80,25), ll(-88,16), ll(-97,16),
    ll(-110,23), ll(-117,32), ll(-124,48), ll(-130,54), ll(-148,58),
    ll(-155,59), ll(-162,54),
  ], '#242418')

  // Greenland
  drawLand([
    ll(-54,60), ll(-44,60), ll(-22,70), ll(-18,76), ll(-24,83),
    ll(-44,83), ll(-55,78), ll(-58,70),
  ], '#2a2a1e')

  // South America
  drawLand([
    ll(-82,8), ll(-77,5), ll(-60,5), ll(-50,5), ll(-36,-6),
    ll(-36,-18), ll(-40,-28), ll(-45,-38), ll(-68,-56), ll(-74,-50),
    ll(-80,-40), ll(-80,-28), ll(-80,-5),
  ], '#242418')

  // Europe
  drawLand([
    ll(-9,37), ll(3,37), ll(14,37), ll(26,40), ll(30,42),
    ll(28,46), ll(22,58), ll(10,57), ll(4,54), ll(-2,50),
    ll(-6,48), ll(-9,44),
  ], '#242418')

  // Scandinavia
  drawLand([
    ll(4,57), ll(10,57), ll(22,58), ll(28,70), ll(26,72),
    ll(16,70), ll(14,68), ll(6,62), ll(4,58),
  ], '#2a2a1e')

  // Africa
  drawLand([
    ll(-18,15), ll(-15,10), ll(-15,6), ll(0,5), ll(10,5),
    ll(40,10), ll(52,12), ll(52,20), ll(44,12), ll(40,0),
    ll(40,-10), ll(36,-22), ll(20,-35), ll(16,-32),
    ll(8,-14), ll(0,4), ll(-18,14),
  ], '#242418')

  // Asia
  drawLand([
    ll(28,42), ll(36,42), ll(42,40), ll(60,26), ll(72,22),
    ll(80,14), ll(100,5), ll(104,1), ll(120,5), ll(130,30),
    ll(140,36), ll(142,47), ll(138,50), ll(131,55),
    ll(150,60), ll(172,65), ll(180,68),
    ll(170,72), ll(140,74), ll(100,78), ll(68,74),
    ll(50,70), ll(30,68), ll(25,60), ll(28,50),
  ], '#242418')

  // Indian subcontinent
  drawLand([
    ll(66,24), ll(80,8), ll(88,8), ll(80,22), ll(74,22), ll(68,24),
  ], '#2a2a1e')

  // SE Asia peninsula
  drawLand([
    ll(98,20), ll(104,5), ll(104,1), ll(100,5), ll(98,12), ll(98,18),
  ], '#2a2a1e')

  // Borneo
  drawLand([ll(108,6), ll(118,6), ll(118,-2), ll(108,0)], '#2a2a1e')

  // Japan
  drawLand([
    ll(130,32), ll(132,34), ll(132,38), ll(140,40), ll(145,44), ll(143,42), ll(130,34),
  ], '#2a2a1e')

  // Australia
  drawLand([
    ll(114,-22), ll(116,-34), ll(122,-34), ll(128,-32),
    ll(134,-35), ll(140,-38), ll(150,-38), ll(154,-28),
    ll(154,-18), ll(142,-10), ll(130,-12), ll(122,-18),
  ], '#242418')

  // New Zealand
  drawLand([
    ll(172,-34), ll(178,-38), ll(178,-40), ll(174,-42), ll(172,-38),
  ], '#2a2a1e')

  // Antarctica strip
  ctx.fillStyle = '#111108'
  ctx.fillRect(0, 452, 960, 28)

  return new THREE.CanvasTexture(canvas)
}

export default function HeroGlobe({ size = 680 }: HeroGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.z = 2.6

    // Lighting — warm top light + cool rim
    scene.add(new THREE.AmbientLight(0xffffff, 0.35))
    const sun = new THREE.DirectionalLight(0xf5e6d0, 1.4)
    sun.position.set(5, 3, 5)
    scene.add(sun)
    const rimLight = new THREE.DirectionalLight(0xc4a882, 0.35)
    rimLight.position.set(-4, -1, -3)
    scene.add(rimLight)

    const globeGroup = new THREE.Group()
    scene.add(globeGroup)

    // Layer 1: Earth sphere
    const earthTex = createEarthTexture()
    earthTex.colorSpace = THREE.SRGBColorSpace
    const earthMat = new THREE.MeshPhongMaterial({
      map: earthTex,
      shininess: 8,
      specular: new THREE.Color(0x332211),
    })
    const earthMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), earthMat)
    globeGroup.add(earthMesh)

    // Layer 2: Sand wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc4a882,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    })
    globeGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.012, 28, 28), wireMat))

    // Layer 3: Atmosphere glow (sand)
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0xc4a882,
      transparent: true,
      opacity: 0.07,
      side: THREE.BackSide,
    })
    globeGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.18, 32, 32), atmosMat))

    // Layer 4: Outer dark haze
    const hazeMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    })
    globeGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.28, 32, 32), hazeMat))

    const setSize = () => {
      const s = Math.min(size, window.innerWidth * 0.7)
      renderer.setSize(s, s)
    }
    setSize()

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    let rafId = 0
    const animate = () => {
      earthMesh.rotation.y += 0.0008
      targetX += (mouseX * 0.06 - targetX) * 0.04
      targetY += (-mouseY * 0.06 - targetY) * 0.04
      globeGroup.rotation.y = targetX
      globeGroup.rotation.x = targetY
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => setSize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      earthTex.dispose()
      renderer.dispose()
    }
  }, [size])

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: `min(${size}px, 70vmin)`,
        height: `min(${size}px, 70vmin)`,
        opacity: 0.88,
      }}
    />
  )
}
