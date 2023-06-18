---
sidebar_position: 4
---
# Performance Testing Guide

This guide will help custom map makers make maps that run well on the Quest!

## Current performance targets

All maps should hit the performance targets for Quest 2. The goal is to ensure Quest users have a good first experience with the custom maps. Don't worry too much about the Quest 1 target, it's hard to hit.

| Device  | Target                                                  |
|---------|---------------------------------------------------------|
| Quest 1 | Greater than 60fps when playing with 1 warrior.         |
| Quest 2 | Greater than 90fps when playing with 4 warriors.        |
| PC      | If you can hit Quest 2 targets, then PC will be ok too. |


## Tools
You can use Oculus' OVR Metrics tool to show your frame-rate in Quest 2 overlaid on any app that's running, including DAVIGO. We use it to assess performance ourselves, it's super handy. 

You can get it here: https://developer.oculus.com/downloads/package/ovr-metrics-tool/

In the [Map issues](/govigedit/toolset/editor-windows/map-issues) window, you can see how many triangles your map has in total, as well as how many renderers your map has.

## What impacts performance the most?
These suggestions are ordered from easiest to implement, to more complex to implement.

### Lights
You can only have one shadow-casting light on Quest 1 and 2. And you'll need a directional light already to light up the scene.

#### What you can do:
* Only use one directional light in the scene, and no other lights

### Transparent materials

Transparency is a no-go on Quest 1 and 2. Huge performance impact.

#### What you can do:

* Replace all your transparent materials with opaque materials. Check your water!

### Real-time lighting

All objects in your scene should cast a shadow, but only the objects that move (trees, rocks, etc.) need to have real-time shadows. All other objects, such as the level geometry itself, should have the shadows baked into the geometry (like a texture). This should give huge performance boosts.

#### What you can do:

* Bake the lighting and shadows for all level geometry, or only have one real-time light, the directional light.

### High triangle count

Each object in your map is made of triangles. Too many triangles seen at once will slow performance. DAVIGO explicitly goes for a low-poly style and avoids complex meshes. In general, you shouldn't have more that 400,000 triangles rendering at one time on the Quest 2.

#### What you can do:

* Investigate the triangle count on your level geometry and simplify it.
* Remove complex non-gameplay geometry that could be eating up resources. This often is objects placed in the background of the map.
Be judicious with your triangle count! It adds up quickly!

### Lots of separate meshes

Meshes that are separated cause extra "draw-calls," which impact performance heavily. Thus, you'll need to limit the amount of meshes in the scene. Note that a mesh can consist of multiple objects, or include the entire level itself!

#### What you can do:

* Combine meshes. You need to pay attention to the number of MeshRenderers in the scene. Meshes that are part of the same object should be combined in a 3D modelling program and brought back into Unity.
* Note that by combining meshes, you might encounter unexpected issues with the dithering. The dither is always applied to the entire mesh, so if you combine your objects into a single mesh, all objects will be dithered.

### Large textures

Texture sizes should be fairly small. If you have large textures, replace them. DAVIGO developer maps specifically uses flat colours instead of textures to avoid issues like this.
