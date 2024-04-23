# neovim-finder

This is an experimental [Raycast](http://raycast.com/) extension that provides useful commands to integrate Raycast with [neovim](https://neovim.io). 

At the moment this is simply a side project, which mostly suits my needs, and has no ambition to be a widely-usable extension. I am mostly developing based on my needs, and to learn a bit coding with Raycast. I am very interested in feedback, of course.

At present the extension relies on [iTerm2](https://iterm2.com) and it has just 2 commands:

* Finder → Neovim: opens a Finder folder (or file) in neovim. This extension is similar in spirit to the [Finder Terminal](https://www.raycast.com/yedongze/terminalfinder) extension, but it goes one step further by invoking iTerm2 and opening a neovim instance within it.

* Neovim Note: opens a note file with neovim or, if a note file is already open in neovim, it puts the corresponding iTerm2 window in focus. 

## Notes

* At the moment the folder and naming conventions of the note file are hardwired in the code. I would like to let the users specify a folder and a filename, eventually.

* The Neovim Note command uses Raycast's [Window Management](https://www.raycast.com/extensions/window-management). As explained [here](https://manual.raycast.com/deeplinks#block-d1a7b2b605124a539323503f225301e3) this has can not be done using deeplinks. The Window Management extension requires Accessibility permissions to be turned on in your Security and Privacy settings. When you run a window management command for the first time, you will see some dialog regarding this. Also, when you run Neovim Note for the first time you should permanently allow for this operation to take place.
 
## Acknowledgements

The Neovim logo used in the icons is by [Jason Long](https://twitter.com/jasonlong), under CC BY 3.0. license (according to the [Neovim's website](https://neovim.io).
