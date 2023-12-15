---
sidebar_position: 1
---
# Getting started

:::note
If you're new to Unity it might be a good idea to learn the basics of Unity and its interface.
The [Using the Unity Interface](https://learn.unity.com/tutorial/using-the-unity-interface?uv=2020.3) tutorials by Unity are a good place to start.
:::

## Step 0 - Installing Unity

The easiest (and recommended) way to install Unity is via the Unity Hub. 
It can be downloaded and installed from [here](https://unity3d.com/get-unity/download/archive).

Once you've downloaded and installed Unity Hub, you'll then need to grab [Unity 2020.3.48](unityhub://2020.3.48f1/b805b124c6b7). 
Make sure you're using this *exact* version, as other versions of Unity are not compatible. 
Make sure to also install **Android Build Support** alongside it, as it is needed for Quest support.

If you don't want to use Unity Hub, you can also grab Unity from [the Unity download archive](https://unity3d.com/get-unity/download/archive), however we do not provide support for this method. 

## Step 1 - Setting up a new project

Assuming you used Unity hub, fire it up and create a new, empty 3D project, and give the project a good name and location. 
Make sure you're using the 3D template, not URP or HDRP. (We only support the built-in render pipeline.)

Once that project has loaded, download the [latest DAVIGO Map Editor package](https://davigo.page.link/govigedit-latest)
(if you haven't already), and import it either by double-clicking on it in File Explorer, importing it via `Assets > Import Package > Custom Package`, or dragging the package onto the Hierarchy. 

## Step 2 - Creating a new map

We'll want to create a new scene via File > New Scene (Ctrl + N), and select the "Base Template" template. Save the map somewhere with a fun name (BirdSanctuary for example) and open it. 

All of the included objects should be explained within the [toolset](/govigedit/toolset/components). 

At this point, everything should be set up to design and build your level. 

We recommend using ProBuilder, which we use internally for quick prototyping of levels. It is bundled with the map editor. 

To export your map, click on `Menu bar > DAVIGO Map Editor > Export map` or press <kbd>Ctrl</kbd> + <kbd>F8</kbd>. 

## Further things to look into

* [The full DAVIGO Map Editor toolset](/govigedit/toolset/components)
* [Adding DAVIGO objects](/govigedit/toolset/editor-windows/asset-browser)
* Using ProBuilder
* [Checking your map for issues](/govigedit/toolset/editor-windows/map-issues)
