# unsullied-react-range-slider

A draggable selection ui that allows user to select a value from a range of values.

**[Live example](http://react-rangeslider.surge.sh/)**

![Range Slider Screen Shot](https://github.com/the-unsullied/react-range-slider/blob/demo/Screen%20Shot%202016-06-23%20at%2017.09.47.png)

## Installation
```
  npm i unsullied-react-range-slider
```

## Usage
```
  import PageBanner from 'react-page-banner';
  
  React.createClass({
  
    closePageBanner() {
      this.setState({shouldShowPageBanner: false});
    },
    render() {
      { 
        this.state.shouldShowPageBanner ? 
          <PageBanner type={'success'}
           message='Hey its a page banner!'
           duration={5000}
           sticky={false}
           afterClose={this.closePageBanner}/> : null
      }
    }
  });
```

## Params

**max** {Number} The maximum number the range slider can go to.

**min** {Number} The minimum number the range slider can go to.

**step** {Number} The increments that the slider will move by.

**onChange** {Method} The callback method that is executed after the value has changed. The method is passed the value of the slider. You *must* implement this method to set the value of range slider, otherwise will not work as expected.

**value** {Number} The value that the range slider has selected.

**className** {String} Any new class names that should be added to the range slider

**isDisabled** {Boolean} True will disable the range slider from changing, false will allow the user to change the range slider.


## Style Params

**$rangeslider-handle-size-desk:** (default: 30px)
The size of the handle that the user will click on.

**$rangeslider-handle-size-palm:** (default: 40px)
The size of the handle that the user will click on in a palm screen.

**$range-slider-bg-color:** (default: #e6e6e6)
The slider's background color.

**$range-slider-fill-color:** (default: #FE9100)
The range slider's fill color that fills anything after the handle.

**$range-slider-handle-bg-color:** (default: white)
The range slider's handle background color.

**$range-slider-handle-border-color:** (default: #cccccc)
The range slider's handle border color.
