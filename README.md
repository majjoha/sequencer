# Sequencer

This is an experimental, basic sequencer written in JavaScript. Use it any way you like.

## About Sequencer

Sequencer is a result of boredom during the Easter holiday in 2013. It was developed primarily to experience the possibilities of music making in the browser using basic JavaScript. It is only meant as an experiment. If you want to use your computer for real music creation, I recommend [PureData][1] or [Max/MSP][2].

## How to

### Setup

Using Sequencer is quite easy. First and foremost, we need an audio player. Create it by writing as follows:

	<audio id="player" style="display: none;"></audio>

To make any use of this device, we need audio. Add the sequencer and your first audio element:

	<form id="sequencer">
		<input type="radio" name="sequences" src="audio/click_09.wav">
	</form>

Add as many radio button elements as you like. Remember to add the `src` attribute to the radio button and an audio file.

To play and pause your sequence, we need two buttons. Add them somewhere on your page.

	<button id="start">Start</button>
	<button id="stop">Pause</button>

Now, you've added the HTML to make the sequencer run. At the bottom of your HTML document before the closing `</body>` tag, include `sequencer.js` and instantiate Sequencer. It only takes one parameter which is tempo.

	<script src="sequencer.js"></script>
	<script>s = new Sequencer(1000);</script>
	</body>    

### Additional 

You can add new steps to your sequencer dynamically from an input field or a drop-down list as presented in the demo. To make Sequencer listen to your input, we need a button more. Add this to your page:

	<button id="add">Add</button>

Sequencer listens to the value of any input field, drop-down list, etc., with the id `audio_file`, e.g.

	<select id="audio_file">
		<option value="audio/bass1.mp3">Bass 1</option>
	</select>

The code above will make Sequencer play the file `audio/bass1.mp3`.

## Dependencies

The only thing needed to make Sequencer run is [jQuery][3].

## Compatibility

I've tested the sequencer in Google Chrome, v. 26.0, Safari, v.6.0, and Mozilla Firefox, v. 19.0, on a Macbook Pro 15" Retina, medio 2012 running Mac OS X 10.8.3. Sequencer works properly in all three browsers. However, you must have codec support in mind. See codec support for the `<audio>` element below.

Furthermore, I've also tested the sequencer in Safari, v. 6.0, and Google Chrome, v. 25.0, on an iPhone 3G. Currently, none of these browsers support Sequencer.

If you have tested Sequencer in a browser not mentioned here, please let me know. Reach me at [mathias@mjj.io][4].

### Codec support

This table documents the current support for audio codecs by the `<audio>` element. It is borrowed from [this][5] article.

Table omitted. See article instead.

## To-do

*   Create function to add more tracks.
*   Add `<input type="range">` for setting the tempo.
*   Click on step to run it.

## Contribute

The source is hosted at GitHub: [http://github.com/majjoha/sequencer](http://github.com/majjoha/sequencer).

## License

Copyright © 2013 Mathias Jean Johansen <<mathias@mjj.io>>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 [1]: http://puredata.info/
 [2]: http://cycling74.com/products/max/
 [3]: http://jquery.com/
 [4]: mailto:mathias%40mjj.io
 [5]: https://en.wikipedia.org/wiki/HTML5_Audio