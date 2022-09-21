# Changelog

## [2.0.0](https://github.com/laurenashpole/vue-inner-image-zoom/compare/v1.1.1...v2.0.0) (2021-12-03)

### Changed

- Upgraded from Vue 2 to Vue 3. Switched from `portal-vue` dependency to Vue's built in `teleport`.

## [1.1.1](https://github.com/laurenashpole/vue-inner-image-zoom/compare/v1.1.0...v1.1.1) (2021-09-28)

### Changed

- Switched to using `touch-action` to prevent scrolling.

### Fixed

- Persist the zoomed image after zoom out if `zoomPreload` is true.

## [1.1.0](https://github.com/laurenashpole/vue-inner-image-zoom/compare/v1.0.1...v1.1.0) (2021-05-13)

### Added

- `hideCloseButton` prop to hide the close button on touch devices.
- `hideHint` prop to hide the magnifying glass icon.
- `width`, `height`, and `hasSpacer` props to set the original image's width and height attributes and optionally generate a spacer based on those values to avoid cumulative layout shift. 
- `zoomPreload` prop to load the zoomed image on render.
- `zoomScale` prop to set the size of the zoomed image.
- `zoomType` prop with "hover" option to trigger zoom on hover.

## [1.0.1](https://github.com/laurenashpole/vue-inner-image-zoom/compare/v1.0.0...v1.0.1) (2020-12-30)

### Changed

- Fixed image disappearing on zoom out on touch devices.

## [1.0.0](https://github.com/laurenashpole/vue-inner-image-zoom/compare/652d3d06559d26ec912829c2a28a82274879c7b7...v1.0.0) (2020-08-05)

### Added

- InnerImageZoom Vue component.
- README and LICENSE.
