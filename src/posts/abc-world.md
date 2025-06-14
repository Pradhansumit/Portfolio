---
title: "Abc World"
date: "Oct 18, 2001"
---

I've been looking for a solid web analytics solution for side projects. The new Google Analytics dashboard is confusing and honestly overkill for side projects.

I've been using Plausible lately. It's pretty simple analytics with supports custom events, which is a requirement for me.

Analytics for side projects
Some of my game side projects like ZooDrop.io generate a lot of traffic without much revenue. And the new wave of analytics vendors all charge per page view. ZooDrop (~600 unique per day) alone already would cost $19 / month with Plausible and it doesn't generate any revenue yet.

So I needed a solution that can give me analytics for side projects that has flat, low pricing. Luckily Plausible is open source and offers a self-hosted version. This post is about using the self-hosted Plausible on DigitalOcean (and can be applied to any VM you can SSH into).

Getting your Plausible VM up and running
First, I should caution that self-hosting Plausible requires you to be comfortable setting up a VM, SSHing in, and running some basic terminal commands. It's not too hard so if you think you can do it, go for it!

I'd recommend following this DigitalOcean tutorial on setting up Plausible on DigitalOcean.

Even if you're not using DigitalOcean, you can use the second half of the steps, starting where you SSH into your VM.

I usually use Fly.io but in this case I valued DO's persistent 25GB of storage on the VM since we'll be using docker compose and a SQL container. It felt like it might take extra work to attach a volume on Fly, but to be honest I didn't try this so it might be easier than I think.

The total time it took me to set things up was about 2 hours. And now I'm locked into $6 / month analytics for all of my side projects without having to worry about the price increasing if a free project gets some attention.

As a preview to the tutorial linked above, the basic steps are:
