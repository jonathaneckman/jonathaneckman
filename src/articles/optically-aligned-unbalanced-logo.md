---
title: Optically Align an Unbalanced Logo
excerpt: "Learn how to optically align an unbalance logo in a header."
author: Jonathan Eckman
date: "2022-02-07"
tags: ["Design"]
---

Say you have a logo that is asymetrical, like the one below that is slightly larger in the front because of the dot above the "i".

![Unbalanced Incorpta Logo](/demos/optically-aligned-unbalanced-logo/unbalanced-logo.png)

You put that logo in the header of your website and mathematically align it using, for example, flexbox.

```typescript
const MathematicallyCenterAlignedUnbalancedLogo = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image src={logo} alt="Incorpta logo" height={30} />
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Careers</a>
    </nav>
  );
};
```

While this mathematically aligns the elements in the header, visually it looks incorrect.

![Mathematically center aligned header](/demos/optically-aligned-unbalanced-logo/mathematically-center-aligned.png)

Changing your logo to make it more symmetrical isn't a great solution and while you could put a few pixels of padding under the logo to schooch it up, this is fragile. So what do you do?

I solved it by using wrapping the logo in a div with a height that matches the sibbling links, aligning the image to the bottom of that wrapper, then letting the top of the image spill out of that container.

```typescript
const OpticallyAlignedUnbalancedLogo = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: "20px",
        }}
      >
        <Image src={logo} alt="Incorpta logo" height={30} />
      </div>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Careers</a>
    </nav>
  );
};
```

The result is an optically aligned image I was happy with.

![Optically aligned header](/demos/optically-aligned-unbalanced-logo/optically-aligned.png)

## How would you solve it?

Do you know of a better way to solve this? Email or tweet me and I'll add it to this post with credit back to your your website, Twitter, or link of your choosing.
