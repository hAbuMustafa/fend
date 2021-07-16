# Landing Page Project

## Table of Contents

- [CSS Edits](#css-edits)
- [HTML Edits](#html-edits)
- [JS Code](#js-code)

## CSS Edits

Not pretty much ahs been added to the CSS file:

- Fixed the 'hero' class for the page header,
- Added a few animations for the navbar, and the go-to-top button, and,
- Added adaptation for the navbar, based on screen-size, for better accessability.

## HTML Edits

As well, not pretty much added, but rather a few tweaks on classes assignments to allow better functionality and ids (like the one for the header).

## JS Code

I didn't stick too much to the comment guide provided in the codebase, rather, used my own ways that I felt will be easier to use as I've had previos knowledge with JS.
One thing to note is that the `menuList` variable is assigned with `var` not `const` like the other global variables. and thats because the items of the navbar are being generated in-line with a function, which means, it's going to need to be assigned later on after declaration.

Another thing to note is, the `sectionsIntersectionObserver` is actually observing sections' `h2` elements as supplied from the `addSectionTitleObserver` function. Thats is because when the observer was tested against a long section (like "Section 4" that has the longest 'Lorem Ipsum' paragraph running) it failed to observe the determined threshould value of 100%, because the paragraph never fits in its entirety in the view port. On the other hand, short sections (like "Section 6") could easily overlap with other sections.

        It's also worth noting that IntersectionObservers were favored over scroll events to introduce myself a new challenge.
