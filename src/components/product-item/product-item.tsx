import { Component, h, Prop } from '@stencil/core';

export interface Item {
  header: string;
  title1: string;
  subtitle1: string;
  title2: string;
  subtitle2: string;

}


@Component({
  tag: 'product-item',
  styleUrl: 'product-item.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class ProductItem {

  /**
   * Image URL
   */
  @Prop() img: string;

  /**
   * Item title
   */
  @Prop() title: string;

  /**
   * Item price
   */
  @Prop() price: number;

  /**
   * Item description
   */
  @Prop() description: string;

  /**
   * Item stars
   */
  @Prop() stars;

  starsArray: number[] = [];
  showStars: boolean = false;

  componentWillRender() {
    for (let i = 0; i < 5; i++) {
      let star = 1;
      if (i >= this.stars) {
        star = 0;
      }

      this.starsArray.push(star);
    }

    this.showStars = true;
  }

  render() {
    return (
      <div class="card h-100">
        { this.img ?
          <div class="text-center">
            <img class="card-img-top" src={this.img} alt=""/>
          </div>
          : <div></div>
        }
        <div class="card-body">
          <div class="text-center">
            <h4 class="card-title">{this.title}</h4>
          </div>
          <div>
            { this.img
              ? <div><p class="card-text">{this.description}</p></div>
              : <div></div>
            }
          </div>
          <div class="price-container text-center">
            <h5 class="price">{this.price} €</h5>
          </div>


        </div>
        <div class="card-footer text-center">
          <small class="text-muted stars">
            {this.starsArray.map((star) => {
                if (star === 1) {
                  return <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                } else {
                  return <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                }
              }
            )}
          </small>
        </div>
      </div>
    );
  }

}
