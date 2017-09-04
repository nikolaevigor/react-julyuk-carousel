# react-julyuk-carousel
Simple yet beautiful carousel. Designed by [Evgeny Rodionov](https://github.com/evgenyrodionov).

## Usage

    <Carousel
      activeItemIdx={activeItemIdx || 0}
      escHandler={this.toggleCarousel}
    >
      {this.props.images}
    </Carousel>

`activeItemIdx` – index of image to show on opening

`escHandler` – callback to trigger on exit from carousel

`images` should have following model:

    {
      id: 1,
      height: 1024,
      width: 1024,
      label: 'my cool pic',
      url:'http://my-cool-domain/my-cool-pic.jpg',
    }

## Contributions

Any contributions are highly appreciated.
