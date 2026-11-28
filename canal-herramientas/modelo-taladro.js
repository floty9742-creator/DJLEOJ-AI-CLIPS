// Taladro compacto 20V (estilo del clip de referencia). Módulo reutilizable.
// Unidades ~ cm. Eje +x = hacia la broca, +y = arriba, z = lados.
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export const COLORS = {yellow: 0xffbf0a, black: 0x121212, steel: 0xc8cbd1};

function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = opts.srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...opts.repeat); }
  return t;
}

function knurl(geom, amp, count) {
  const p = geom.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i);
    const r = Math.hypot(x, z); if (r < 1e-4) continue;
    const a = Math.atan2(z, x), f = 1 + amp * Math.cos(a * count);
    p.setX(i, x * f); p.setZ(i, z * f);
  }
  geom.computeVertexNormals();
}

export function buildDrill() {
  const g = new THREE.Group(); const parts = {}; const spin = new THREE.Group();

  // ---- materiales
  const rubberBump = canvasTex(128, 256, (c, w, h) => {
    c.fillStyle = '#808080'; c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 8) { c.fillStyle = '#e0e0e0'; c.fillRect(0, y, w, 4); c.fillStyle = '#303030'; c.fillRect(0, y + 4, w, 3); }
    for (let i = 0; i < 1800; i++) { c.fillStyle = `rgba(${Math.random() * 255 | 0},${Math.random() * 255 | 0},${Math.random() * 255 | 0},.12)`; c.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
  }, {repeat: [1, 7]});
  const grainBump = canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#808080'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 5000; i++) { const v = 90 + Math.random() * 90 | 0; c.fillStyle = `rgb(${v},${v},${v})`; c.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
  }, {repeat: [3, 3]});
  const Y = new THREE.MeshPhysicalMaterial({color: COLORS.yellow, roughness: .42, metalness: 0, clearcoat: .35, clearcoatRoughness: .5, bumpMap: grainBump, bumpScale: .25});
  const B = new THREE.MeshStandardMaterial({color: COLORS.black, roughness: .78, metalness: 0, bumpMap: grainBump, bumpScale: .6});
  const RUB = new THREE.MeshStandardMaterial({color: 0x161616, roughness: .9, metalness: 0, bumpMap: rubberBump, bumpScale: 1.4});
  const STEEL = new THREE.MeshStandardMaterial({color: COLORS.steel, roughness: .22, metalness: 1});
  const DSTEEL = new THREE.MeshStandardMaterial({color: 0x3a3d42, roughness: .35, metalness: .9});
  const BITM = new THREE.MeshStandardMaterial({color: 0x9aa0a8, roughness: .3, metalness: 1});
  const glowable = {};
  const mk = (name, geo, mat, x, y, z, glowKey) => {
    const m = new THREE.Mesh(geo, mat.clone ? mat.clone() : mat);
    m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; g.add(m); parts[name] = m;
    if (glowKey) (glowable[glowKey] = glowable[glowKey] || []).push(m);
    return m;
  };
  const RB = (w, h, d, r, s = 6) => new RoundedBoxGeometry(w, h, d, s, r);

  // ---- cabeza
    mk('housing', RB(9.2, 5.3, 4.8, 2.0), Y, -2.9, 0, 0);
  for (const s of [1, -1]) {
    mk('vent' + s, RB(3.8, 1.8, .5, .35), B, -4.9, 1.0, s * 2.28);
    for (let i = 0; i < 5; i++) mk('slit' + s + i, RB(2.8, .12, .1, .04, 2), new THREE.MeshStandardMaterial({color: 0x4a4a4a, roughness: .6}), -4.9, .45 + i * .27, s * 2.56);
    mk('sidestripe' + s, RB(2.0, .35, .3, .12), B, -1.2, -.6, s * 2.3);
  }
  mk('topcover', RB(5.4, .9, 3.8, .4), B, -3.2, 2.55, 0);
  mk('speed', RB(2.8, .6, 1.8, .22), new THREE.MeshStandardMaterial({color: 0x2c2c2c, roughness: .55}), -2.6, 3.0, 0, 3);
  for (let i = 0; i < 4; i++) mk('speedrib' + i, RB(.12, .5, 1.5, .03, 2), B, -3.4 + i * .5, 3.12, 0);
  mk('chin', RB(4.6, 2.6, 4.5, 1.1), Y, -1.8, -2.7, 0);

  // ---- collar (anillo de modo), anillo plateado, mandril
  const cylX = (r0, r1, x0, x1, mat, name, seg = 96, knurlAmp = 0, knurlN = 0, glowKey) => {
    const geo = new THREE.CylinderGeometry(r1, r0, x1 - x0, seg, 1);
    if (knurlAmp) knurl(geo, knurlAmp, knurlN);
    geo.rotateZ(-Math.PI / 2);
    return mk(name, geo, mat, (x0 + x1) / 2, .1, 0, glowKey);
  };
  cylX(2.45, 2.55, 1.5, 3.9, B, 'collar', 120, .02, 48, 2);
    cylX(2.1, 2.1, 3.9, 4.45, STEEL, 'ring', 96);
  const chuckRear = cylX(2.05, 1.9, 4.45, 5.8, DSTEEL, 'chuck', 96, .03, 36, 1);
  const chuckFront = cylX(1.8, 1.4, 5.8, 7.3, B, 'chuckfront', 96, .035, 30, 1);
  const tip = cylX(1.4, 1.05, 7.3, 7.55, STEEL, 'chucktip', 64);
  // broca helicoidal
  const bg = new THREE.CylinderGeometry(.5, .5, 7.2, 20, 90);
  { const p = bg.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i); const x = p.getX(i) * 1.0, z = p.getZ(i) * .55; const a = y * 1.9; p.setX(i, x * Math.cos(a) - z * Math.sin(a)); p.setZ(i, x * Math.sin(a) + z * Math.cos(a)); } bg.computeVertexNormals(); }
  bg.rotateZ(-Math.PI / 2);
  const bit = mk('bit', bg, BITM, 11.1, .1, 0);
  spin.add(chuckRear, chuckFront, tip, bit);

  // ---- gatillo, botón de giro, LED
  mk('trigger', RB(1.3, 2.8, 1.7, .5), B, .1, -3.6, 0, 5);
  mk('triggertip', RB(.6, 1.0, 1.2, .2), Y, .55, -4.3, 0);
  for (const s of [1, -1]) mk('dir' + s, RB(2.2, .75, .6, .28), new THREE.MeshStandardMaterial({color: 0x1f1f1f, roughness: .5}), -.3, -1.95, s * 2.28, 4);
  mk('led', RB(.55, .35, 1.1, .1, 3), new THREE.MeshStandardMaterial({color: 0xffffff, emissive: 0xffffff, emissiveIntensity: .35, roughness: .3}), 1.5, -2.95, 0, 7);

  // ---- mango de goma + franja
  const handle = mk('handle', RB(3.7, 9.3, 4.1, 1.4), RUB, -1.9, -7.0, 0);
  handle.rotation.z = .05;
  for (const s of [1, -1]) mk('hstripe' + s, RB(.36, 6.4, .2, .08, 2), Y, -2.4, -7.0, s * 2.05).rotation.z = .05;

  // ---- batería
  mk('flange', RB(6.9, 1.3, 5.7, .5), B, -2.0, -12.1, 0);
  mk('flangeplate', RB(3.2, .18, 3.6, .08, 2), Y, .1, -11.42, 0);
  mk('battery', RB(6.3, 3.8, 5.3, .65), Y, -2.0, -14.6, 6 > 0 ? 0 : 0, 6);
  mk('bband', RB(6.3, 2.1, 5.3, .55), B, -2.0, -17.1, 0, 6);
  const label = canvasTex(512, 128, (c, w, h) => {
    c.fillStyle = '#121212'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#fff'; c.font = '800 70px Arial'; c.textBaseline = 'middle'; c.fillText('20V', 18, 66);
    c.fillStyle = '#ffbf0a'; c.fillRect(190, 52, 150, 24);
    c.fillStyle = '#fff'; c.font = '800 54px Arial'; c.fillText('2Ah', 372, 66);
  }, {srgb: true});
  for (const s of [1, -1]) {
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 1.25), new THREE.MeshStandardMaterial({map: label, roughness: .6, polygonOffset: true, polygonOffsetFactor: -2}));
    pl.position.set(-2.0, -17.1, s * 2.67); if (s < 0) pl.rotation.y = Math.PI; g.add(pl);
  }
  // luces del nivel de carga
  for (let i = 0; i < 3; i++) mk('cell' + i, RB(.7, .22, .12, .05, 2), new THREE.MeshStandardMaterial({color: 0x3cff7a, emissive: 0x3cff7a, emissiveIntensity: .7}), -3.3 + i * 1.0, -15.4, 2.68);

  g.add(spin); spin.position.set(0, .1, 0); // los hijos ya están en coordenadas del grupo
  // spin group origin en eje: reubicar hijos relativos a eje (y=.1)
  for (const m of [chuckRear, chuckFront, tip, bit]) { spin.add(m); m.position.y -= .1; }

  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  const hot = {1: [6.2, 1.8, 1.2], 2: [2.7, 2.2, 1.6], 3: [-2.6, 3.4, 1.0], 4: [-.3, -1.95, 2.7], 5: [.5, -3.0, 1.1], 6: [-2.0, -14.6, 2.9], 7: [1.7, -2.85, 1.0]};
  return {group: g, parts, spin, glowable, hot, bottomY: -18.15};
}

export function makeStage(THREE_, renderer, scene) {
  // entorno + suelo con sombra suave
  return null;
}
