# Frequently Asked Questions (FAQ)

This is the beginner guide, made in the hopes that everyone having common problems might find solutions. This will start from the bare basics.

## How do I get the game?

You can now get the game off of either [Steam](https://store.steampowered.com/app/1116540/DAVIGO_VR_vs_PC/) or [AppLab](https://www.meta.com/en-gb/experiences/6244027602378363/)

You can alternatively play using the free KNIGHT'S PASS, which is on [Steam](https://store.steampowered.com/app/1116540/DAVIGO_VR_vs_PC/). This is a free version without VR, intended for playing with friends who don't own the game.

## How do I install custom maps manually?

### Manually (PC)

1. Get your map(s) from wherever

2. Place them in the `%localappdata%\Davigo\OnlineMaps` directory

3. Open an online lobby, and find the map in the custom maps section.

### Manually (Quest)

1. Get your map(s) from wherever

2. Put the map file in `Android\data\com.davigostudio.davigoquest\files\Davigo\OnlineMaps` via SideQuest (or some other Android file browser tool).

3. Open an online lobby, and find the map in the custom maps section.

## What headsets does the game support?

The game currently supports all SteamVR supported headsets.

## Do the hands move a bit slower in Davigo than in real life?

This behaviour is intentional! It ensures that the giant cannot overwhelm the warrior with too much speed, and requires wind-ups for ground pounds and throws.

## My name has a "Relay" label next to it in game. What does this mean?

When a Knight connects to a Giant's room, it will attempt to make a _direct_ connection between the two devices for best ping. In the modern world, nearly even device is connected to a router of some sort (through WiFi or a cable) rather than being plugged directly into your home's internet port. This makes forming a direction connection between two devices on the internet a bit challenging.

The technique to circumvent this is called [NAT punchthrough or Hole punching](https://stackoverflow.com/a/43182457), and it usually works, allowing a direct (low-ping) connection. When it fails, Davigo would fall back on a central server to relay messages between players, resulting in much higher ping. Users without a direct connection will have a small "relay" alert next to their name in the lobby, and will usually have **much** higher ping, so it is not ideal.
