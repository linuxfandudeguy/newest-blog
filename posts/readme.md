---
title: 'About the New blog...'
date: '2025-01-10'
---

So about the blog, the blog was made using `v0`, Vercel's new ai thingy and it is **COOL AS HECK**.

I decided to use PNPM because PNPM is love PNPM is life. (and storage saving too)

Also this blog will also not just be about programming anymore, it will be about my interests in general such as conlanging, books, (*Especially Harry Potter and Percy Jackson and the Olympians, you need to read those*) movies, fandoms, (*again harry potter and percy jackson*) games, etc. And of course we still have programming, if not why would you think `v0` added 

```typescript
console.log("syntax higlighting")
```
# anyways, here's just a bunch of random markdown to test that my blog is working

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.

Now I'm going to show you an example of an unordered list to make sure that looks good, too:

- So here is the first item in this list.
- In this example we're keeping the items short.
- Later, we'll use longer, more complex list items.

And that's the end of this section.

## What if we stack headings?

### We should make sure that looks good, too.

Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.

### When a heading comes after a paragraph …

When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.

- **I often do this thing where list items have headings.**

  For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.

  I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.

- **Since this is a list, I need at least two items.**

  I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.

- **It's not a bad idea to add a third item either.**

  I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.

After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.

## Code should look okay by default.

I think most people are going to use [highlight.js](https://highlightjs.org/) or [Prism](https://prismjs.com/) or something if they want to style their code blocks but it wouldn't hurt to make them look _okay_ out of the box, even with no syntax highlighting.

Here is several files from different programming languages:

**Kotlin**
```kotlin
fun greet(name: String) {
    println("Hello, $name!")
}

fun main() {
    greet("Alice")
}
```
**Python**
```python
def greet(name):
    print(f"Hello, {name}!")

greet("Bob")
```
**PHP**
```php
<?php
function greet($name) {
    echo "Hello, $name!";
}

greet("Charlie");
?>
```

Hopefully that looks good enough to you.

### What about nested lists?

Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.

1.  **Nested lists are rarely a good idea.**
    - You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.
    - Nested navigation in UIs is a bad idea too, keep things as flat as possible.
    - Nesting tons of folders in your source code is also not helpful.
2.  **Since we need to have more items, here's another one.**
    - I'm not sure if we'll bother styling more than two levels deep.
    - Two is already too much, three is guaranteed to be a bad idea.
    - If you nest four levels deep you belong in prison.
3.  **Two items isn't really a list, three is good though.**
    - Again please don't nest lists if you want people to actually read your content.
    - Nobody wants to look at this.
    - I'm upset that we even have to bother styling this.

The most annoying thing about lists in Markdown is that `<li>` elements aren't given a child `<p>` tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.

- **For example, here's another nested list.**

  But this time with a second paragraph.

  - These list items won't have `<p>` tags
  - Because they are only one line each

- **But in this second top-level list item, they will.**

  This is especially annoying because of the spacing on this paragraph.

  - As you can see here, because I've added a second line, this list item now has a `<p>` tag.

    This is the second line I'm talking about by the way.

  - Finally here's another list item so it's more like a list.

- A closing list item, but with no nested list, because why not?

And finally a sentence to close off this section.

## There are other elements we need to style

I almost forgot to mention links, like [this link to the Tailwind CSS website](https://tailwindcss.com). We made them blue.


We also need to make sure inline code looks good, like if I wanted to talk about `<span>` elements or tell you the good news about `@tailwindcss/typography`.

### Sometimes I even use `code` in headings

Even though it's probably a bad idea, and historically I've had a hard time making it look good. This _"wrap the code blocks in backticks"_ trick works pretty well though really.

Another thing I've done in the past is put a `code` tag inside of a link, like if I wanted to tell you about the [`tailwindcss/docs`](https://github.com/tailwindcss/docs) repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.

#### We haven't used an `h4` yet

But now we have. Please don't use `h5` or `h6` in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a `before` pseudo-element to scream at you if you use an `h5` or `h6`.

We don't style them at all out of the box because `h4` elements are already so small that they are the same size as the body copy. What are we supposed to do with an `h5`, make it _smaller_ than the body copy? No thanks.

### We still need to think about stacked headings though.

#### Let's make sure we don't screw that up with `h4` elements, either.

Phew, with any luck we have styled the headings above this text and they look pretty good.

Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.

What I've written here is probably long enough, but adding this final sentence can't hurt.


# Credits

[CodeBucks](https://github.com/codebucks27) for initial markdown file

[LinuxFanDudeGuy](https://github.com/linuxfandudeguy) (me) for adding my touch of flavor



