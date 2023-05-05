---
sidebar_position: 3
---

# Updating Govigedit

For now, updating Govigedit is slightly more involved than simply overwriting the existing package. 

## General updating steps

1. Delete following folders: 
   * Davigo
   * Govidad
   * Photon
   * Toolbox

2. Import the new package. 

## Updating to 2.x.x from Govigedit 9 and below

* On any custom rigidbodies, add the `Owner` and `ParryableBody` component. 
* If you have changed any cannon settings, you will need to re-enter any changes into the new setup, and you'll also probably want to enable ignoreMixerCannonValues and ignoreMixerExplosionValues. 

Otherwise, should be a re-export. 

If you have any issues updating, please tell us in the DAVIGO discord. Link in the navbar to the Discord server. 