# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aliza Wong**

Time spent: **17** hours spent in total

Link to project: https://glitch.com/edit/#!/gratis-mighty-planet

Link to live site: https://gratis-mighty-planet.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Created buttons to display lives left and a timer

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

> Updated game layout/theme:

![](https://user-images.githubusercontent.com/97565167/158353719-175a8bfb-fdf8-44c6-af4a-5ca8567ef05d.png)

> User plays the game correctly and wins:

![](https://user-images.githubusercontent.com/97565167/156295694-474ba3fa-bf5c-4dfd-80d8-1e34cf3afb25.gif)

![](https://user-images.githubusercontent.com/97565167/156295844-5969ea3a-7b34-4ca9-a8e8-cedb621e8dad.gif)

![](https://user-images.githubusercontent.com/97565167/156295876-56cf774b-348a-4bbe-a623-380c1553156e.gif)

> User does not win, user runs out of time, user starts/stops game:


![](https://user-images.githubusercontent.com/97565167/156295903-d27a0696-1531-480e-a5a1-33a8fc9cb07c.gif)

![](https://user-images.githubusercontent.com/97565167/156295920-62aea3fd-d469-44d5-84a5-e6c6a60b556f.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  - https://stackoverflow.com/questions/41936043/javascript-alert-supersedes-preceding-code/41936135
  - https://www.w3schools.com/html/
  - https://www.w3schools.com/js/
  - https://www.w3schools.com/css/
  - https://support.glitch.com/t/how-do-i-upload-an-image-file/2312/17
  - https://mixkit.co/free-sound-effects/
  
  

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  - I encountered many challenges while creating this submission. This is the first time I've ever used JavaScript, CSS, and HTML, so I had to learn everything from scratch. 
Implementing the basic game design was not too difficult, however some of the extra features were a bit tricky. A bug that occurred was that the timer kept running even 
after the user loses the game. I also had a challenge where the timer would stop at 1 and display the alert instead of stopping at 0, and then displaying the alert. This is because
the alert function superceded the DOM and I mitigated this issue by writing a `setTimeout()` function to make sure the code written before this line could run. When using custom
audio files, I also had an issue where I had to change the playback speed of the audio file. It was a bit of a challenge to calculate how much the playback speed should increase
especially when the levels get faster, however, I eventually figured out the right values after some thinking and calculations. 
Another audio bug I had was when my custom audio files would not make a second sound if I pressed a button twice consecutively in a short amount of time. This was because the 1-second long audio file had to finish playing before it could play again. To fix this, I called the `pause()`, `load()`, and `play` audio functions in functions `playTone(btn,len)` and `startTone(btn)` to make the current audio stop when the button is pressed again, reload the audio file, then play the audio so that the sound repeats. I had many other challenges, mostly about learning the language
itself, but these challenges were amongst the biggest challenges I faced while creating this project. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
  - Do functions often run simultaneously when working in web development? If so, why?
  
      I've personally been working with sequential logic, so this was a whole new ballpark for me. Most of my bugs came from wondering why a line of code ran even though the lines before haven't
      run yet. 
  - Is there a way to write tests to test our implementation rather than simply testing the code by playing the game?

     I played the game many times to discover any bugs that needed to be fixed. Then, to fix those bugs, I utilized the console log to help me fix the bugs. I'm curious if there's another way to test the game by writing tests without playing it a bunch of times. 
  - What is the role of back-end?
 
    I believe for this project, I was working with front-end and I made a fully functional game. Thus, what is the role of back-end and how do they contribute to web development?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  - To improve this project, I wanted to change the number of lives button to display 3 hearts and the timer to show an actual clock to make the game experience more enjoyable
for the user. I would also add sound effects whenever the user makes a mistake, whenever the user wins or loses, and a ticking sound for the last 3 seconds of the timer. I would also find a way to display
the text in a clearer manner since the text sometimes gets obscured by the background. As far as the actual game implementation, I would add another difficulty level where each square would be covered by a
brown grocery bag, so there would only be one color, making it harder to remember. Another way I would improve this project is to research ways to fix an issue where if you drag the buttons, the image on the buttons
would stay instead of disappear. I think that problem isn't due to my code, so I would have to find ways to remedy that since accidental drags can happen. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1YPS0BuKVSTYq0li8p0tquf-HnTb2GEhp/view?usp=sharing)

- If the video doesn't seem to play in an incognito browser, click the eye button on the top right of the search bar and click "Site not working?". Then allow cookies and it should work!


## License

    Copyright Aliza Wong

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
