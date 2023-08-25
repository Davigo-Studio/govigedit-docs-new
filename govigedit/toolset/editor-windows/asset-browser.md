# Asset Browser

The asset browser is a feature added in v2.0.0, which allows you to easily add various DAVIGO objects to your maps, as well as add your own favourites. 

## Opening the asset browser

Opening the asset browser is done by going to `Menu bar > DAVIGO Map Editor > Asset browser`, or pressing <kbd>Ctrl</kbd> + <kbd>F7</kbd>.

![The asset browser](/img/assetbrowser/assetbrowser.png)

To add an object from the asset browser, drag it from the asset browser to the scene window or hierarchy. 

## Adding your own favourites

To add your own favourites group, go to `Assets/GovigeditConfigs/AssetBrowserFavourites`. Note that favourites groups *must* be in this folder to be detected. In that folder, create a favourites group by right-clicking and going to `Create > DAVIGO Map Editor > Asset Browser Favourites`. 

Make sure to give it a friendly name!

Due to how the asset browser works, objects must be within a sub-group (dropdown), and that sub-group must have a unique name within that asset. The sub-group/dropdown name is set by changing `Key`, and your objects are assigned to `Value`. Any object can be set as a favourite as long as it is a file, for example, prefabs, materials and even scenes!

In the asset browser window, your new favourite group can be selected by refreshing the favourites list, and selecting it from the drop-down. 
