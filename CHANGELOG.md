# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.2] - 2026-02-01

### Fixed
- Fixed stale closure bug in `toggle()` function that caused incorrect behavior with rapid successive calls
- Changed toggle implementation from `setState(!state)` to `setState(prev => !prev)` for correct state updates

### Added
- Test case for rapid successive toggles to prevent regression

## [0.4.1] - Previous Release
