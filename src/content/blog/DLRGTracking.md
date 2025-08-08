---
title: GPS Tracker Prototypes for Water Rescue Forces
firstPostet: 2025-08-01
excerpt: Building GPS Trackers for Rescue Forces Coordination at the Biggest Water Event under Time Pressure
image: ./Tracker/Tracker.png
---

# Building GPS Tracker Prototypes for Water Rescue Service Coordination at the Nadbaden Event

Not too long ago, after a DLRG training scenario, I casually suggested the idea of using GPS tracking for rescue forces — just as a way to better evaluate and coordinate deployments on the Ground from a Leadership perspective. To my surprise, the Board Member of our local DLRG Association picked up on the idea and approached me shortly after.

He invited me to build a prototype.
The DLRG has a real need for tracking their rescue teams during emergency operations and large-scale events — where knowing who is where can be critical for safety and coordination.

---

# The "Nabada" – South Germany’s Largest Water Event

One of the key events where this tracking could be especially useful is the **Nabada** in **Ulm**, Baden-Württemberg.

![Nabada in Ulm, 2015](/blog/Tracker/Nabada_Ulm.jpg)

*Image: [Nabada in Ulm, 2015](https://commons.wikimedia.org/wiki/File:Nabada_Ulm.jpg) by [UNTUlm](https://commons.wikimedia.org/wiki/User:UNTUlm), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Taken on July 22, 2015.*

The *Nabada* (literally “to bathe down the river”) is one of the **largest water festivals in Southern Germany**, taking place on the Danube River every July.
Tens of thousands of people gather to watch or take part in the colorful parade of floats, rafts, and boats — and naturally, that many people on and around water requires a significant rescue presence.

So... no pressure, right?

---

# Turning an Idea into a Real Project

I accepted the challenge and started validating possible solutions.

Over time, I evaluated, looking for the best mix of simplicity, reliability, and cost. After demonstrating these ideas in three Prototypes, I got the green light to build **25 working units**.

**Two weeks** before the Nabada Event. Just two. I had to design, buy all Parts, prototype, assemble, and deliver 25 working GPS tracking units, including Shipping of all Components arriving before the Nabada Event.

---

## Hardware, Housing & 3D Printing – On a Tight Schedule

With help from Simon G. and valuable input and Help from several members of the DLRG team, I began finalizing the Design.

We went with a clever and cost-effective suggestion from Simon — using **HT pipes** (standard drainage pipes) with **endcaps** as waterproof housings. They're durable, affordable, and surprisingly practical for Quick and Easy Waterproof Housings.

While the Electronic Components shipped i used the Time to model the components in 3D to make everything fit snugly inside.
In the limited time I had, I managed to 3D-print **20 holders** — not quite the target of 25, but the best I could do with the time and machines available.

Simon provided very usefull Feedback for the Holder inside the Pipe.

You can see the Final 3D Model of the Tracker modeled by me with the Feedback.
Every Part was Quick Replacable.
Even the ESP32 which had difficult to reach Battery Input Pins.
Simon had the great Idea to use Pogo Pins, which we Heat Sunk into the 3D Printed PLA making the ESP32 Replacable as well.

![](/blog/Tracker/Tracker.png)
GPS Tracker Assembled View Above.

![](/blog/Tracker/TrackerExplo.png)
GPS Tracker Explosion View Above.

Additonally you can view the full Model Assembly in [Onshape](https://cad.onshape.com/documents/a15bfd05fa26a9e1000c925a/w/808e858c985b51f6eea09444/e/bbb0cd3a7a603770d6593e9e?renderMode=0&uiState=6893a643792d2d6a8b5c493b)

---

## Crunch Time: Soldering Begins

The electronic components finally arrived — just **3 days** before the event.
So we began a soldering marathon. Thanks for the Countless calm Hands in the DLRG Station cutting Cables, Soldering Pogo Pins, Providing Food and positive Vibes to help Complete the Project in Time.

![](/blog/Tracker/AssembledTrackers.jpg)

Ready Assembled Trackers waiting to get the ESP32S3 and a Battery and getting Packed up.
(The ESP32S3 arrived really late, thanks to Planning ahead they could just be Switched in, while everything else could be Prepared in Advance!)


Unfortunately, hardware has its quirks.
Out of the 20 units we built, only 10 turned out to be functional. The remaining 10 had defective GPS modules. Atleast they were cheap. And thanks too Thinking Ahead, they are, as all other Components, easily Replaced later on without the need for Resoldering.

![](/blog/Tracker/FinishedTracker.jpg)

All Trackers Packed up, labeld with Instructions and what it is. (So its not Confused with a Bomb.)


---

## The Final Push: MQTT to Situation Map

On Sunday morning, just **one Day before the event**, I had 10 working GPS trackers.

To make them useful, I wrote a quick MQTT listener, converting the Meshtastic GPS data into HTTP POST requests that could feed directly into the situation map web interface used by the DLRG.

That part was finished at **4 AM** Monday, just in time for the day of the event.

Close? Very. But it worked — mostly.

All the Code can be found here on [GitHub Meshtastic MQTT Lagekarte Bridge](https://github.com/Genei180/msh-mqtt-lagekarte-bridge)
(Yes no Comments, No Readme and Ugly Code what do you Expect after an Allnighter and 3 Red Bulls?)
This will Improve in the Future, promise.

![](/blog/Tracker/ConsoleMess.jpg)

My Console Mess. In the Movie it always looks Cooler (and Faster!)

---

# What Went Wrong – and What Went Right

Despite my best efforts, we hit a few snags:

* **Time** was a very Limiting Factor, not allowing for real Testing at the End.
* **GPS imprecision** made accurate positioning difficult
* The **website had a noticeable delay** when refreshing, reducing the system's usefulness in real-time
* The **HT pipes slightly expanded** with heat, creating minor issues with fit and waterproofing

Still, the core idea was validated.
The potential this could bring along when fully functional was obvious — with more time and proper hardware, this system could greatly enhance real-time rescue coordination.

---

# What's Next?

Now, we’re taking everything we learned and planning to rebuild and improve the system — this time with almost a full year to prepare and Expand the System.

Better GPS modules, more reliable components, proper testing, and refinements in housing — all on the roadmap.
Maybe even a Complete selfwritten Open Source Situation Map.

This project might have started as a spontaneous idea, but it’s growing into something that could genuinely help improve safety and coordination at major rescue Efforts.

Stay tuned — and next time, hopefully, I won’t be writing code at 4 in the morning.

If you want to have a Look at the Current State of the Project and its Documentation see [here](./../projects/DLRG-GPS-Tracker/Overview.md)


# A Big Thanks to DLRG Ulm

A heartfelt thank you to the DLRG Ulm — an incredible team of dedicated people with an equally great spirit.

Thank you for welcoming me with open arms and giving me the chance to contribute in the way I know best:
planning, prototyping, and hacking away at software and hardware projects that (hopefully) make a difference.

It’s been a pleasure working alongside such motivated and supportive people. Looking forward to what’s next!
