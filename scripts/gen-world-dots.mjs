import { readFileSync, writeFileSync } from 'node:fs'
import { feature } from 'topojson-client'
import { geoContains } from 'd3-geo'

const topo = JSON.parse(readFileSync('node_modules/world-atlas/land-110m.json', 'utf8'))
const land = feature(topo, topo.objects.land)
const STEP = 2.2
const dots = []
for (let lat = 80, row = 0; lat >= -58; lat -= STEP, row++) {
  for (let lon = -170, col = 0; lon <= 180; lon += STEP, col++) {
    if (geoContains(land, [lon, lat])) dots.push([col, row])
  }
}
const cols = Math.floor(350 / STEP) + 1
const rows = Math.floor(138 / STEP) + 1
writeFileSync('lib/world-dots.json', JSON.stringify({ step: STEP, cols, rows, dots }))
console.log(dots.length, cols, rows)
