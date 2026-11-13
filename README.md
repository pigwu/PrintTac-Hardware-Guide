# PrintTac Hardware Guide

An English hardware guide for building a PrintTac tactile UMI gripper and using the PrintTac Capture collection workflow.

## Website

**[Read the Hardware Guide](https://pigwu.github.io/PrintTac-Hardware-Guide/)**

Published with GitHub Pages from the `main` branch, using the repository root.

The guide covers parts and tools, 3D printing, fingertip assembly, power and wireless connectivity, iPhone setup, gripper calibration, first capture, and troubleshooting.

## Edit and preview

Edit `index.html` for content, `styles.css` for layout, and `guide.js` for navigation and copy controls. Images are in `assets/`. No build step is required.

For a local preview, run from this directory:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. Commit and push changes to `main` to update GitHub Pages.

### Video assets

The assembly video is served from `assets/fingertip-assembly.mp4` as a 720p H.264/AAC MP4 with streaming metadata at the beginning of the file. It retains the full duration, original playback speed, and audio.

Keep videos below GitHub's [50 MiB warning threshold](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github) and store original recordings outside this repository. [Git LFS is not supported by GitHub Pages](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage). When replacing the video, change its version query in `index.html` so browsers request the new copy.

## Sources and attribution

- [PrintTac project page](https://peppasaur.github.io/PrintTac/): hardware overview, figures, and assembly video.
- [PrintTac Capture](https://github.com/pigwu/printtac-capture): collection app, receiver tools, and documentation.
- [UMI-FT](https://umi-ft.github.io/): reference for hardware-guide organization.

The figures in `assets/` originate from the PrintTac project page. The assembly video originates from that project and is hosted here in a compressed form for web playback. Research, hardware designs, and source media belong to their original authors.

## Reproduction status

CAD / STL files, validated print profiles, magnet-polarity layout, complete BOM, wiring diagrams, and board firmware remain pending. Unconfirmed specifications are explicitly marked in the guide. This repository contains the website; it does not contain the submission manuscript or a complete hardware reproduction package.
